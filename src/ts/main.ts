/**
 * 메인 TypeScript 파일
 * 모든 기능을 초기화하고 통합합니다.
 */

// 모든 기능 가져오기
import './code-blocks';
import './prompt-blocks';
import './mermaid-init';
import './backlinks';
import './mindmap';

class BlogInitializer {
  constructor() {
    document.addEventListener('DOMContentLoaded', () => {
      this.initialize();
    });
  }

  /**
   * 초기화 함수
   */
  private initialize(): void {
    // 여기에 추가 초기화 코드를 넣을 수 있습니다
    console.log('Blog features initialized');
  }
}

// 블로그 초기화 객체 생성
const blogInitializer = new BlogInitializer(); 