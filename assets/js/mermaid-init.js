import mermaid from 'mermaid';
class MermaidManager {
    constructor() {
        document.addEventListener('DOMContentLoaded', () => {
            this.initMermaid();
        });
    }
    initMermaid() {
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
        this.setupThemeDetection();
        this.runMermaid();
    }
    setupThemeDetection() {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const updateTheme = (isDark) => {
            mermaid.initialize({
                theme: isDark ? 'dark' : 'default'
            });
            this.runMermaid();
        };
        updateTheme(darkModeMediaQuery.matches);
        darkModeMediaQuery.addEventListener('change', event => {
            updateTheme(event.matches);
        });
    }
    runMermaid() {
        const mermaidBlocks = document.querySelectorAll('pre > code.language-mermaid');
        const existingDiagrams = document.querySelectorAll('.mermaid-processed');
        existingDiagrams.forEach(diagram => {
            diagram.parentNode?.removeChild(diagram);
        });
        mermaidBlocks.forEach((block, index) => {
            const preElement = block.parentElement;
            if (!preElement)
                return;
            const code = block.textContent || '';
            const container = document.createElement('div');
            container.className = 'mermaid mermaid-processed';
            container.id = `mermaid-diagram-${index}`;
            container.textContent = code;
            preElement.insertAdjacentElement('afterend', container);
            preElement.style.display = 'none';
        });
        mermaid.init(undefined, '.mermaid:not(.mermaid-rendered)');
    }
}
const mermaidManager = new MermaidManager();
export default mermaidManager;
//# sourceMappingURL=mermaid-init.js.map