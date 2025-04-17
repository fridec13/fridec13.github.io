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
    initialize() {
        console.log('Blog features initialized');
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
            if (sidebarCollapsed) {
                sidebar.classList.add('sidebar-collapsed');
                container.classList.add('sidebar-hidden');
                
                const icon = sidebarToggle.querySelector('i');
                icon.classList.remove('fa-chevron-left');
                icon.classList.add('fa-chevron-right');
            }
            
            // 메뉴 카테고리 토글
            const menuTitles = document.querySelectorAll('.nav-title');
            menuTitles.forEach(title => {
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
    }
}
const blogInitializer = new BlogInitializer();
//# sourceMappingURL=main.js.map