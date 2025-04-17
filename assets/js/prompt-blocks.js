class PromptBlocksManager {
    constructor() {
        this.PROMPT_SELECTOR = '.prompt-block';
        this.styles = {
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
        document.addEventListener('DOMContentLoaded', () => {
            this.initPromptBlocks();
        });
    }
    initPromptBlocks() {
        this.processExistingPromptBlocks();
        this.convertMarkdownToPromptBlocks();
    }
    processExistingPromptBlocks() {
        const promptBlocks = document.querySelectorAll(this.PROMPT_SELECTOR);
        promptBlocks.forEach((block) => {
            const blockElement = block;
            if (blockElement.classList.contains('processed-prompt'))
                return;
            const type = this.getPromptType(blockElement);
            this.applyPromptStyle(blockElement, type);
            blockElement.classList.add('processed-prompt');
        });
    }
    convertMarkdownToPromptBlocks() {
        const codeBlocks = document.querySelectorAll('pre > code');
        codeBlocks.forEach((block) => {
            const codeElement = block;
            const preElement = codeElement.parentElement;
            if (preElement.classList.contains('processed-prompt'))
                return;
            const classList = Array.from(codeElement.classList);
            const promptClass = classList.find(cls => cls.startsWith('language-prompt:') || cls.startsWith('language-prompt['));
            if (!promptClass)
                return;
            let type = 'info';
            if (promptClass.startsWith('language-prompt:')) {
                type = promptClass.replace('language-prompt:', '');
            }
            else if (promptClass.startsWith('language-prompt[')) {
                type = promptClass.replace('language-prompt[', '').replace(']', '');
            }
            const content = codeElement.textContent || '';
            const lines = content.split('\n');
            let title = '';
            let body = content;
            if (lines.length > 0 && lines[0].trim() !== '') {
                title = lines[0].trim();
                body = lines.slice(1).join('\n').trim();
            }
            const promptBlock = document.createElement('div');
            promptBlock.className = `prompt-block prompt-${type} processed-prompt`;
            if (title) {
                const titleElement = document.createElement('div');
                titleElement.className = 'prompt-title';
                titleElement.textContent = title;
                promptBlock.appendChild(titleElement);
            }
            const bodyElement = document.createElement('div');
            bodyElement.className = 'prompt-body';
            bodyElement.textContent = body;
            promptBlock.appendChild(bodyElement);
            this.applyPromptStyle(promptBlock, type);
            preElement.parentNode?.replaceChild(promptBlock, preElement);
        });
    }
    getPromptType(element) {
        const classes = Array.from(element.classList);
        for (const cls of classes) {
            if (cls.startsWith('prompt-') && cls !== 'prompt-block' && cls !== 'prompt-title' && cls !== 'prompt-body') {
                return cls.replace('prompt-', '');
            }
        }
        return 'info';
    }
    applyPromptStyle(element, type) {
        const style = this.styles[type] || this.styles['info'];
        element.style.backgroundColor = style.bgColor;
        element.style.borderLeft = `4px solid ${style.borderColor}`;
        element.style.padding = '16px';
        element.style.margin = '16px 0';
        element.style.borderRadius = '4px';
        const titleElement = element.querySelector('.prompt-title');
        if (titleElement) {
            titleElement.style.fontWeight = 'bold';
            titleElement.style.marginBottom = '8px';
            titleElement.style.color = style.titleColor;
        }
    }
}
const promptBlocksManager = new PromptBlocksManager();
export default promptBlocksManager;
//# sourceMappingURL=prompt-blocks.js.map