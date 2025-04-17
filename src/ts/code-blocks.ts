/**
 * 코드 블록 표시 기능을 위한 TypeScript 파일
 * Prism.js를 사용하여 코드 구문 강조 및 복사 버튼 기능을 추가합니다.
 */

import * as Prism from 'prismjs';

// 추가 언어 및 플러그인 로드
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-yaml';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markdown';
import 'prismjs/components/prism-ruby';

// 라인 번호 및 복사 버튼 플러그인
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';

class CodeBlocksManager {
  constructor() {
    document.addEventListener('DOMContentLoaded', () => {
      this.initCodeBlocks();
    });
  }

  /**
   * 코드 블록 초기화
   */
  private initCodeBlocks(): void {
    // pre code 블록에 클래스 추가
    this.updateCodeBlocks();
    
    // 이미 생성된 코드 블록에 대해 Prism 다시 적용
    Prism.highlightAll();
    
    // 복사 버튼 추가
    this.addCopyButtons();
  }

  /**
   * 코드 블록 업데이트
   */
  private updateCodeBlocks(): void {
    const preElements = document.querySelectorAll('pre');
    
    preElements.forEach((pre) => {
      // 이미 처리된 경우 건너뜀
      if (pre.classList.contains('processed')) return;
      
      // pre 요소에 line-numbers 클래스 추가
      pre.classList.add('line-numbers');
      pre.classList.add('processed');
      
      // code 요소가 있는지 확인
      const codeElement = pre.querySelector('code');
      if (!codeElement) return;
      
      // 언어 클래스가 없으면 추가
      if (!this.hasLanguageClass(codeElement)) {
        codeElement.classList.add('language-text');
      }
    });
  }

  /**
   * 언어 클래스가 있는지 확인
   */
  private hasLanguageClass(element: Element): boolean {
    return Array.from(element.classList).some(cls => cls.startsWith('language-'));
  }

  /**
   * 복사 버튼 추가
   */
  private addCopyButtons(): void {
    const preElements = document.querySelectorAll('pre:not(.no-copy-button)');
    
    preElements.forEach((pre) => {
      // 이미 버튼이 있는 경우 건너뜀
      if (pre.querySelector('.copy-button')) return;
      
      // 코드 요소 찾기
      const codeElement = pre.querySelector('code');
      if (!codeElement) return;
      
      // 복사 버튼 생성
      const copyButton = document.createElement('button');
      copyButton.className = 'copy-button';
      copyButton.textContent = '복사';
      copyButton.setAttribute('aria-label', '코드 복사');
      
      // 버튼 스타일링
      copyButton.style.position = 'absolute';
      copyButton.style.top = '5px';
      copyButton.style.right = '5px';
      copyButton.style.padding = '4px 8px';
      copyButton.style.background = '#f5f5f5';
      copyButton.style.border = '1px solid #ccc';
      copyButton.style.borderRadius = '3px';
      copyButton.style.fontSize = '12px';
      copyButton.style.cursor = 'pointer';
      
      // 상대 위치 설정
      if (window.getComputedStyle(pre).position === 'static') {
        // pre를 HTMLElement로 캐스팅하여 style 속성에 접근
        (pre as HTMLElement).style.position = 'relative';
      }
      
      // 버튼 클릭 이벤트
      copyButton.addEventListener('click', () => {
        const code = codeElement.textContent || '';
        this.copyToClipboard(code, copyButton);
      });
      
      // 버튼 추가
      pre.appendChild(copyButton);
    });
  }

  /**
   * 클립보드에 복사
   */
  private copyToClipboard(text: string, button: HTMLButtonElement): void {
    navigator.clipboard.writeText(text)
      .then(() => {
        const originalText = button.textContent;
        button.textContent = '복사됨!';
        button.style.background = '#d4edda';
        button.style.borderColor = '#c3e6cb';
        
        setTimeout(() => {
          button.textContent = originalText;
          button.style.background = '#f5f5f5';
          button.style.borderColor = '#ccc';
        }, 2000);
      })
      .catch((err) => {
        console.error('클립보드 복사 실패:', err);
        button.textContent = '복사 실패';
        button.style.background = '#f8d7da';
        button.style.borderColor = '#f5c6cb';
        
        setTimeout(() => {
          button.textContent = '복사';
          button.style.background = '#f5f5f5';
          button.style.borderColor = '#ccc';
        }, 2000);
      });
  }
}

// 싱글톤 인스턴스 생성
const codeBlocksManager = new CodeBlocksManager();
export default codeBlocksManager; 