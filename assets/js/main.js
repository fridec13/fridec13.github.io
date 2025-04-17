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
    }
}
const blogInitializer = new BlogInitializer();
//# sourceMappingURL=main.js.map