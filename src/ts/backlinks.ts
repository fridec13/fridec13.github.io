/**
 * 역링크 표시 기능을 위한 TypeScript 파일
 */

interface Backlink {
  url: string;
  title: string;
  excerpt?: string;
}

interface BacklinksData {
  [key: string]: Backlink[];
}

class BacklinksManager {
  private backlinksData: BacklinksData = {};
  private container: HTMLElement | null = null;

  constructor(containerId: string = 'backlinks-container') {
    document.addEventListener('DOMContentLoaded', () => {
      this.container = document.getElementById(containerId);
      this.loadBacklinks();
    });
  }

  private async loadBacklinks(): Promise<void> {
    if (!this.container) return;
    
    try {
      const response = await fetch('/assets/data/backlinks.json');
      if (!response.ok) {
        throw new Error('Backlinks data not found');
      }
      
      this.backlinksData = await response.json();
      this.renderBacklinks();
    } catch (error) {
      console.error('Failed to load backlinks:', error);
    }
  }

  private renderBacklinks(): void {
    if (!this.container) return;
    
    // 현재 페이지 URL에서 경로 부분만 추출
    const path = window.location.pathname;
    
    // 해당 페이지에 연결된 역링크가 있는지 확인
    const backlinks = this.backlinksData[path] || [];
    
    if (backlinks.length === 0) {
      this.container.style.display = 'none';
      return;
    }
    
    // 역링크 목록 렌더링
    const heading = document.createElement('h3');
    heading.textContent = '이 페이지를 참조하는 문서';
    this.container.appendChild(heading);
    
    const list = document.createElement('ul');
    list.className = 'backlinks-list';
    
    backlinks.forEach(link => {
      const item = document.createElement('li');
      
      const anchor = document.createElement('a');
      anchor.href = link.url;
      anchor.textContent = link.title;
      
      item.appendChild(anchor);
      
      if (link.excerpt) {
        const excerpt = document.createElement('p');
        excerpt.className = 'backlink-excerpt';
        excerpt.textContent = link.excerpt;
        item.appendChild(excerpt);
      }
      
      list.appendChild(item);
    });
    
    this.container.appendChild(list);
  }
}

// 싱글톤 인스턴스 생성
const backlinksManager = new BacklinksManager();
export default backlinksManager; 