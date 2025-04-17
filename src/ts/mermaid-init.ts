/**
 * 머메이드 차트 초기화를 위한 TypeScript 파일
 * 마크다운에서 머메이드 코드 블록을 찾아 차트로 렌더링합니다.
 */

import mermaid from 'mermaid';

class MermaidManager {
  constructor() {
    document.addEventListener('DOMContentLoaded', () => {
      this.initMermaid();
    });
  }

  /**
   * 머메이드 초기화
   */
  private initMermaid(): void {
    // 머메이드 설정
    mermaid.initialize({
      startOnLoad: true,
      theme: 'default',
      securityLevel: 'loose',
      logLevel: 'error',
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis'
      },
      sequence: {
        diagramMarginX: 50,
        diagramMarginY: 10,
        actorMargin: 50,
        width: 150,
        height: 65,
        boxMargin: 10,
        boxTextMargin: 5,
        noteMargin: 10,
        messageMargin: 35
      },
      gantt: {
        titleTopMargin: 25,
        barHeight: 20,
        barGap: 4,
        topPadding: 50,
        leftPadding: 75,
        gridLineStartPadding: 35,
        fontSize: 11,
        numberSectionStyles: 4
      }
    });

    // 라이트 모드/다크 모드 감지 및 테마 변경
    this.setupThemeDetection();

    // 머메이드 실행
    this.runMermaid();
  }

  /**
   * 테마 감지 설정
   */
  private setupThemeDetection(): void {
    // 다크 모드 감지
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    // 테마 변경 함수
    const updateTheme = (isDark: boolean): void => {
      mermaid.initialize({
        theme: isDark ? 'dark' : 'default'
      });
      // 이미 렌더링된 머메이드 다이어그램 다시 렌더링
      this.runMermaid();
    };

    // 초기 테마 설정
    updateTheme(darkModeMediaQuery.matches);

    // 테마 변경 감지
    darkModeMediaQuery.addEventListener('change', event => {
      updateTheme(event.matches);
    });
  }

  /**
   * 머메이드 실행
   */
  private runMermaid(): void {
    // 머메이드 코드 블록 찾기
    const mermaidBlocks = document.querySelectorAll('pre > code.language-mermaid');

    // 이미 처리된 다이어그램이 있는지 확인
    const existingDiagrams = document.querySelectorAll('.mermaid-processed');
    existingDiagrams.forEach(diagram => {
      diagram.parentNode?.removeChild(diagram);
    });

    // 각 코드 블록에 대해 처리
    mermaidBlocks.forEach((block, index) => {
      const preElement = block.parentElement;
      if (!preElement) return;

      // 코드 블록 내용 가져오기
      const code = block.textContent || '';
      
      // 새 컨테이너 만들기
      const container = document.createElement('div');
      container.className = 'mermaid mermaid-processed';
      container.id = `mermaid-diagram-${index}`;
      container.textContent = code;
      
      // 코드 블록 다음에 컨테이너 삽입
      preElement.insertAdjacentElement('afterend', container);
      
      // 코드 블록 숨기기 (선택적)
      preElement.style.display = 'none';
    });

    // 머메이드 다시 실행
    mermaid.init(undefined, '.mermaid:not(.mermaid-rendered)');
  }
}

// 싱글톤 인스턴스 생성
const mermaidManager = new MermaidManager();
export default mermaidManager; 