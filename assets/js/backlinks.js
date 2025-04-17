class BacklinksManager {
    constructor(containerId = 'backlinks-container') {
        this.backlinksData = {};
        this.container = null;
        document.addEventListener('DOMContentLoaded', () => {
            this.container = document.getElementById(containerId);
            this.loadBacklinks();
        });
    }
    async loadBacklinks() {
        if (!this.container)
            return;
        try {
            const response = await fetch('/assets/data/backlinks.json');
            if (!response.ok) {
                throw new Error('Backlinks data not found');
            }
            this.backlinksData = await response.json();
            this.renderBacklinks();
        }
        catch (error) {
            console.error('Failed to load backlinks:', error);
        }
    }
    renderBacklinks() {
        if (!this.container)
            return;
        const path = window.location.pathname;
        const backlinks = this.backlinksData[path] || [];
        if (backlinks.length === 0) {
            this.container.style.display = 'none';
            return;
        }
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
const backlinksManager = new BacklinksManager();
export default backlinksManager;
//# sourceMappingURL=backlinks.js.map