/**
 * 프롬프트 블록 표시 기능을 위한 TypeScript 파일
 * 마크다운에서 특정 형식의 블록을 프롬프트 블록으로 변환합니다.
 */

interface PromptStyles {
  [key: string]: {
    bgColor: string;
    borderColor: string;
    titleColor: string;
    iconClass?: string;
  };
}

class PromptBlocksManager {
  private readonly PROMPT_SELECTOR: string = '.prompt-block';
  private readonly styles: PromptStyles = {
    'info': {
      bgColor: '#e8f4fd',
      borderColor: '#c8e1fb',
      titleColor: '#0969da',
      iconClass: 'info-icon'
    },
    'warning': {
      bgColor: '#fff8c5',
      borderColor: '#ffd33d',
      titleColor: '#9a6700',
      iconClass: 'warning-icon'
    },
    'error': {
      bgColor: '#ffebe9',
      borderColor: '#ff8182',
      titleColor: '#cf222e',
      iconClass: 'error-icon'
    },
    'success': {
      bgColor: '#dafbe1',
      borderColor: '#aceebb',
      titleColor: '#116329',
      iconClass: 'success-icon'
    },
    'user': {
      bgColor: '#f6f8fa',
      borderColor: '#d0d7de',
      titleColor: '#24292f',
      iconClass: 'user-icon'
    },
    'assistant': {
      bgColor: '#f9f9f9',
      borderColor: '#d0d7de',
      titleColor: '#8250df',
      iconClass: 'assistant-icon'
    }
  };

  constructor() {
    document.addEventListener('DOMContentLoaded', () => {
      this.initPromptBlocks();
    });
  }

  /**
   * 프롬프트 블록 초기화
   */
  private initPromptBlocks(): void {
    // 기존 프롬프트 블록 처리
    this.processExistingPromptBlocks();
    
    // 마크다운에서 프롬프트 블록 변환
    this.convertMarkdownToPromptBlocks();
  }

  /**
   * 기존 프롬프트 블록 처리
   */
  private processExistingPromptBlocks(): void {
    const promptBlocks = document.querySelectorAll(this.PROMPT_SELECTOR);
    
    promptBlocks.forEach((block) => {
      const blockElement = block as HTMLElement;
      
      // 이미 처리된 경우 건너뜀
      if (blockElement.classList.contains('processed-prompt')) return;
      
      // 프롬프트 유형 확인
      const type = this.getPromptType(blockElement);
      
      // 프롬프트 스타일 적용
      this.applyPromptStyle(blockElement, type);
      
      // 처리됨 표시
      blockElement.classList.add('processed-prompt');
    });
  }

  /**
   * 마크다운에서 프롬프트 블록 변환
   * 형식: ```prompt:type 또는 ```prompt[type]
   */
  private convertMarkdownToPromptBlocks(): void {
    const codeBlocks = document.querySelectorAll('pre > code');
    
    codeBlocks.forEach((block) => {
      const codeElement = block as HTMLElement;
      const preElement = codeElement.parentElement as HTMLElement;
      
      // 이미 처리된 경우 건너뜀
      if (preElement.classList.contains('processed-prompt')) return;
      
      // 클래스 확인
      const classList = Array.from(codeElement.classList);
      const promptClass = classList.find(cls => 
        cls.startsWith('language-prompt:') || cls.startsWith('language-prompt[')
      );
      
      if (!promptClass) return;
      
      // 프롬프트 유형 추출
      let type = 'info';
      if (promptClass.startsWith('language-prompt:')) {
        type = promptClass.replace('language-prompt:', '');
      } else if (promptClass.startsWith('language-prompt[')) {
        type = promptClass.replace('language-prompt[', '').replace(']', '');
      }
      
      // 제목 추출 (첫 번째 줄)
      const content = codeElement.textContent || '';
      const lines = content.split('\n');
      let title = '';
      let body = content;
      
      if (lines.length > 0 && lines[0].trim() !== '') {
        title = lines[0].trim();
        body = lines.slice(1).join('\n').trim();
      }
      
      // 새 프롬프트 블록 생성
      const promptBlock = document.createElement('div');
      promptBlock.className = `prompt-block prompt-${type} processed-prompt`;
      
      // 제목 추가
      if (title) {
        const titleElement = document.createElement('div');
        titleElement.className = 'prompt-title';
        titleElement.textContent = title;
        promptBlock.appendChild(titleElement);
      }
      
      // 내용 추가
      const bodyElement = document.createElement('div');
      bodyElement.className = 'prompt-body';
      bodyElement.textContent = body;
      promptBlock.appendChild(bodyElement);
      
      // 스타일 적용
      this.applyPromptStyle(promptBlock, type);
      
      // 기존 코드 블록 대체
      preElement.parentNode?.replaceChild(promptBlock, preElement);
    });
  }

  /**
   * 프롬프트 유형 가져오기
   */
  private getPromptType(element: HTMLElement): string {
    // 클래스에서 유형 추출
    const classes = Array.from(element.classList);
    for (const cls of classes) {
      if (cls.startsWith('prompt-') && cls !== 'prompt-block' && cls !== 'prompt-title' && cls !== 'prompt-body') {
        return cls.replace('prompt-', '');
      }
    }
    
    // 기본값 반환
    return 'info';
  }

  /**
   * 프롬프트 스타일 적용
   */
  private applyPromptStyle(element: HTMLElement, type: string): void {
    // 유효한 유형인지 확인
    const style = this.styles[type] || this.styles['info'];
    
    // 스타일 적용
    element.style.backgroundColor = style.bgColor;
    element.style.borderLeft = `4px solid ${style.borderColor}`;
    element.style.padding = '16px';
    element.style.margin = '16px 0';
    element.style.borderRadius = '4px';
    
    // 제목 스타일 적용
    const titleElement = element.querySelector('.prompt-title') as HTMLElement | null;
    if (titleElement) {
      titleElement.style.fontWeight = 'bold';
      titleElement.style.marginBottom = '8px';
      titleElement.style.color = style.titleColor;
    }
  }
}

// 싱글톤 인스턴스 생성
const promptBlocksManager = new PromptBlocksManager();
export default promptBlocksManager; 