import * as d3 from 'd3';
class MindMapVisualizer {
    constructor(containerId = 'mindmap-container') {
        this.container = null;
        this.data = null;
        this.width = 800;
        this.height = 600;
        this.svg = null;
        document.addEventListener('DOMContentLoaded', () => {
            this.container = document.getElementById(containerId);
            this.init();
        });
    }
    init() {
        if (!this.container)
            return;
        const containerRect = this.container.getBoundingClientRect();
        this.width = containerRect.width || this.width;
        this.height = containerRect.height || this.height;
        this.svg = d3.select(this.container)
            .append('svg')
            .attr('width', this.width)
            .attr('height', this.height)
            .attr('viewBox', [-this.width / 2, -this.height / 2, this.width, this.height])
            .attr('style', 'max-width: 100%; height: auto;');
        this.loadData();
    }
    async loadData() {
        try {
            const response = await fetch('/assets/data/mindmap.json');
            if (!response.ok) {
                throw new Error('Mind map data not found');
            }
            this.data = await response.json();
            this.renderMindMap();
        }
        catch (error) {
            console.error('Failed to load mind map data:', error);
        }
    }
    renderMindMap() {
        if (!this.svg || !this.data)
            return;
        const root = d3.hierarchy(this.data);
        const links = root.links();
        const nodes = root.descendants();
        const treeLayout = d3.tree()
            .size([2 * Math.PI, Math.min(this.width, this.height) / 2 - 100]);
        treeLayout(root);
        const linkGenerator = d3.linkRadial()
            .angle(d => d.x)
            .radius(d => d.y);
        this.svg.append('g')
            .attr('fill', 'none')
            .attr('stroke', '#999')
            .attr('stroke-opacity', 0.4)
            .attr('stroke-width', 1.5)
            .selectAll('path')
            .data(links)
            .join('path')
            .attr('d', linkGenerator);
        const node = this.svg.append('g')
            .selectAll('g')
            .data(nodes)
            .join('g')
            .attr('transform', d => `translate(${this.project(d.x, d.y)})`);
        node.append('circle')
            .attr('fill', d => this.getNodeColor(d.data))
            .attr('r', 4);
        node.append('text')
            .attr('dy', '0.31em')
            .attr('x', d => (d.x < Math.PI === !(d.children) ? 6 : -6))
            .attr('text-anchor', d => (d.x < Math.PI === !(d.children) ? 'start' : 'end'))
            .attr('transform', d => `rotate(${(d.x < Math.PI ? d.x - Math.PI / 2 : d.x + Math.PI / 2) * 180 / Math.PI})`)
            .text(d => d.data.name)
            .clone(true).lower()
            .attr('stroke', 'white')
            .attr('stroke-width', 3);
        node.filter(d => Boolean(d.data.url))
            .style('cursor', 'pointer')
            .on('click', (_, d) => {
            if (d.data.url) {
                window.location.href = d.data.url;
            }
        });
    }
    project(x, y) {
        const angle = x - Math.PI / 2;
        return [Math.cos(angle) * y, Math.sin(angle) * y];
    }
    getNodeColor(node) {
        switch (node.type) {
            case 'post':
                return '#4285F4';
            case 'tag':
                return '#EA4335';
            case 'category':
                return '#34A853';
            default:
                return '#FBBC05';
        }
    }
}
const mindMapVisualizer = new MindMapVisualizer();
export default mindMapVisualizer;
//# sourceMappingURL=mindmap.js.map