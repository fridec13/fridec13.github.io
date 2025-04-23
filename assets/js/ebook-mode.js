/**
 * 이북 모드 - 페이지 넘김 기능 구현
 */

class EbookMode {
  constructor() {
    this.contentElement = document.querySelector('.post-content');
    this.isEbookMode = false;
    this.currentPage = 0;
    this.totalPages = 0;
    this.pageHeight = 0;
    this.pages = [];
    
    this.init();
  }
  
  init() {
    // 이북 모드 토글 버튼 생성
    this.createToggleButton();
    
    // 키보드 이벤트 리스너 추가
    document.addEventListener('keydown', this.handleKeyDown.bind(this));
  }
  
  createToggleButton() {
    const postHeader = document.querySelector('.post-header');
    if (!postHeader) return;
    
    const toggleButton = document.createElement('button');
    toggleButton.className = 'ebook-toggle-btn';
    toggleButton.innerHTML = '<i class="fas fa-book-reader"></i> 이북 모드';
    toggleButton.addEventListener('click', () => this.toggleEbookMode());
    
    postHeader.appendChild(toggleButton);
  }
  
  toggleEbookMode() {
    this.isEbookMode = !this.isEbookMode;
    
    if (this.isEbookMode) {
      this.enableEbookMode();
    } else {
      this.disableEbookMode();
    }
  }
  
  enableEbookMode() {
    if (!this.contentElement) return;
    
    // 현재 스크롤 위치 저장
    this.scrollPosition = window.scrollY;
    
    // 페이지 나누기
    this.setupPages();
    
    // UI 변경
    document.body.classList.add('ebook-mode-active');
    this.contentElement.classList.add('ebook-content');
    
    // 페이지 네비게이션 생성
    this.createPageNavigation();
    
    // 종료 버튼 생성
    this.createExitButton();
    
    // 첫 페이지 표시
    this.showPage(0);
    
    // 초기 스크롤 위치 조정
    window.scrollTo(0, 0);
  }
  
  disableEbookMode() {
    // UI 원복
    document.body.classList.remove('ebook-mode-active');
    this.contentElement.classList.remove('ebook-content');
    
    // 페이지 네비게이션 제거
    const pageNav = document.querySelector('.ebook-page-nav');
    if (pageNav) pageNav.remove();
    
    // 종료 버튼 제거
    const exitBtn = document.querySelector('.ebook-exit-btn');
    if (exitBtn) exitBtn.remove();
    
    // 원래 스크롤 위치로 복원
    window.scrollTo(0, this.scrollPosition);
  }
  
  setupPages() {
    const contentHeight = this.contentElement.scrollHeight;
    this.pageHeight = window.innerHeight - 60; // 여백 조정
    this.totalPages = Math.ceil(contentHeight / this.pageHeight);
    
    // 콘텐츠 높이에 맞게 페이지 배열 생성
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i);
  }
  
  createPageNavigation() {
    const pageNav = document.createElement('div');
    pageNav.className = 'ebook-page-nav';
    
    const prevBtn = document.createElement('button');
    prevBtn.className = 'ebook-nav-btn prev-btn';
    prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
    prevBtn.addEventListener('click', () => this.prevPage());
    
    const pageInfo = document.createElement('span');
    pageInfo.className = 'ebook-page-info';
    this.pageInfoElement = pageInfo;
    
    const nextBtn = document.createElement('button');
    nextBtn.className = 'ebook-nav-btn next-btn';
    nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
    nextBtn.addEventListener('click', () => this.nextPage());
    
    pageNav.appendChild(prevBtn);
    pageNav.appendChild(pageInfo);
    pageNav.appendChild(nextBtn);
    
    document.body.appendChild(pageNav);
  }
  
  createExitButton() {
    const exitBtn = document.createElement('button');
    exitBtn.className = 'ebook-exit-btn';
    exitBtn.innerHTML = '<i class="fas fa-times"></i>';
    exitBtn.setAttribute('title', '이북 모드 종료');
    exitBtn.addEventListener('click', () => this.toggleEbookMode());
    
    document.body.appendChild(exitBtn);
  }
  
  showPage(pageIndex) {
    if (pageIndex < 0 || pageIndex >= this.totalPages) return;
    
    this.currentPage = pageIndex;
    const scrollPosition = this.currentPage * this.pageHeight;
    this.contentElement.scrollTop = scrollPosition;
    
    // 페이지 정보 업데이트
    if (this.pageInfoElement) {
      this.pageInfoElement.textContent = `${this.currentPage + 1} / ${this.totalPages}`;
    }
  }
  
  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.showPage(this.currentPage + 1);
    }
  }
  
  prevPage() {
    if (this.currentPage > 0) {
      this.showPage(this.currentPage - 1);
    }
  }
  
  handleKeyDown(event) {
    if (!this.isEbookMode) return;
    
    if (event.key === 'ArrowRight' || event.key === ' ') {
      this.nextPage();
      event.preventDefault();
    } else if (event.key === 'ArrowLeft') {
      this.prevPage();
      event.preventDefault();
    } else if (event.key === 'Escape') {
      this.toggleEbookMode();
      event.preventDefault();
    }
  }
}

// 문서가 로드된 후 이북 모드 초기화
document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.post-content')) {
    new EbookMode();
  }
}); 