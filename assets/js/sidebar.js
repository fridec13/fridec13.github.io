document.addEventListener('DOMContentLoaded', function() {
  // 토글 버튼 동작
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sidebar = document.querySelector('.sidebar');
  const container = document.querySelector('.container');
  
  if (sidebarToggle) {
    sidebarToggle.addEventListener('click', function() {
      sidebar.classList.toggle('sidebar-collapsed');
      container.classList.toggle('sidebar-hidden');
      
      // 아이콘 변경
      const icon = sidebarToggle.querySelector('i');
      if (sidebar.classList.contains('sidebar-collapsed')) {
        icon.classList.remove('fa-chevron-left');
        icon.classList.add('fa-chevron-right');
        localStorage.setItem('sidebarCollapsed', 'true');
      } else {
        icon.classList.remove('fa-chevron-right');
        icon.classList.add('fa-chevron-left');
        localStorage.setItem('sidebarCollapsed', 'false');
      }
    });
  }
  
  // 페이지 로드 시 이전 상태 복원
  const sidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
  if (sidebarCollapsed && sidebarToggle) {
    sidebar.classList.add('sidebar-collapsed');
    container.classList.add('sidebar-hidden');
    
    const icon = sidebarToggle.querySelector('i');
    if (icon) {
      icon.classList.remove('fa-chevron-left');
      icon.classList.add('fa-chevron-right');
    }
  }
  
  // 메뉴 카테고리 토글
  const menuTitles = document.querySelectorAll('.nav-title');
  menuTitles.forEach(title => {
    // 화살표 아이콘 추가
    const arrow = document.createElement('i');
    arrow.classList.add('fas', 'fa-chevron-down', 'menu-arrow');
    title.appendChild(arrow);
    
    title.addEventListener('click', function() {
      const menuContent = this.nextElementSibling;
      menuContent.classList.toggle('menu-collapsed');
      
      // 화살표 아이콘 변경
      const arrow = this.querySelector('.menu-arrow');
      if (arrow) {
        if (menuContent.classList.contains('menu-collapsed')) {
          arrow.classList.remove('fa-chevron-down');
          arrow.classList.add('fa-chevron-right');
        } else {
          arrow.classList.remove('fa-chevron-right');
          arrow.classList.add('fa-chevron-down');
        }
      }
    });
  });
});

// 포스트 썸네일 설정 함수
function setupThumbnails() {
  const postItems = document.querySelectorAll('.post-item');
  
  postItems.forEach(function(item) {
    // 이미 썸네일이 있으면 건너뛰기
    if (item.querySelector('.post-thumbnail')) return;
    
    // 썸네일 컨테이너 생성
    const thumbnail = document.createElement('div');
    thumbnail.className = 'post-thumbnail';
    
    // 컨텐츠 컨테이너 생성 (기존 내용을 감싸기 위함)
    const content = document.createElement('div');
    content.className = 'post-content';
    
    // 포스트의 첫 번째 이미지를 썸네일로 사용하거나 기본 이미지 설정
    const postImages = item.querySelectorAll('img');
    if (postImages.length > 0) {
      const imageUrl = postImages[0].src;
      thumbnail.style.backgroundImage = `url(${imageUrl})`;
    } else {
      // 기본 썸네일 색상 랜덤 설정
      const colors = ['#3498db', '#e74c3c', '#1abc9c', '#f39c12', '#9b59b6', '#2ecc71'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      thumbnail.style.backgroundColor = randomColor;
    }
    
    // 기존 내용을 content 컨테이너로 이동
    while (item.firstChild) {
      content.appendChild(item.firstChild);
    }
    
    // 썸네일과 컨텐츠 컨테이너를 추가
    item.appendChild(thumbnail);
    item.appendChild(content);
  });
} 