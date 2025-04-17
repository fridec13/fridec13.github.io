import * as Prism from 'prismjs';
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
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
class CodeBlocksManager {
    constructor() {
        document.addEventListener('DOMContentLoaded', () => {
            this.initCodeBlocks();
        });
    }
    initCodeBlocks() {
        this.updateCodeBlocks();
        Prism.highlightAll();
        this.addCopyButtons();
    }
    updateCodeBlocks() {
        const preElements = document.querySelectorAll('pre');
        preElements.forEach((pre) => {
            if (pre.classList.contains('processed'))
                return;
            pre.classList.add('line-numbers');
            pre.classList.add('processed');
            const codeElement = pre.querySelector('code');
            if (!codeElement)
                return;
            if (!this.hasLanguageClass(codeElement)) {
                codeElement.classList.add('language-text');
            }
        });
    }
    hasLanguageClass(element) {
        return Array.from(element.classList).some(cls => cls.startsWith('language-'));
    }
    addCopyButtons() {
        const preElements = document.querySelectorAll('pre:not(.no-copy-button)');
        preElements.forEach((pre) => {
            if (pre.querySelector('.copy-button'))
                return;
            const codeElement = pre.querySelector('code');
            if (!codeElement)
                return;
            const copyButton = document.createElement('button');
            copyButton.className = 'copy-button';
            copyButton.textContent = '복사';
            copyButton.setAttribute('aria-label', '코드 복사');
            copyButton.style.position = 'absolute';
            copyButton.style.top = '5px';
            copyButton.style.right = '5px';
            copyButton.style.padding = '4px 8px';
            copyButton.style.background = '#f5f5f5';
            copyButton.style.border = '1px solid #ccc';
            copyButton.style.borderRadius = '3px';
            copyButton.style.fontSize = '12px';
            copyButton.style.cursor = 'pointer';
            if (window.getComputedStyle(pre).position === 'static') {
                pre.style.position = 'relative';
            }
            copyButton.addEventListener('click', () => {
                const code = codeElement.textContent || '';
                this.copyToClipboard(code, copyButton);
            });
            pre.appendChild(copyButton);
        });
    }
    copyToClipboard(text, button) {
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
const codeBlocksManager = new CodeBlocksManager();
export default codeBlocksManager;
//# sourceMappingURL=code-blocks.js.map