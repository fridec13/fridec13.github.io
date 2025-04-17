/**
 * 마인드맵 렌더링을 위한 TypeScript 파일
 * d3.js를 사용하여 마인드맵을 렌더링합니다.
 */

import * as d3 from 'd3';

interface MindMapNode {
  id: string;
  name: string;
  children?: MindMapNode[];
  url?: string;
  type?: 'post' | 'tag' | 'category' | 'default';
}

class MindMapVisualizer {
  private container: HTMLElement | null = null;
  private data: MindMapNode | null = null;
  private width: number = 800;
  private height: number = 600;
  private svg: d3.Selection<SVGSVGElement, unknown, null, undefined> | null = null;
  
  constructor(containerId: string = 'mindmap-container') {
    document.addEventListener('DOMContentLoaded', () => {
      this.container = document.getElementById(containerId);
      this.init();
    });
  }
  
  private init(): void {
    if (!this.container) return;
    
    // 컨테이너의 크기를 가져옴
    const containerRect = this.container.getBoundingClientRect();
    this.width = containerRect.width || this.width;
    this.height = containerRect.height || this.height;
    
    // SVG 생성
    this.svg = d3.select(this.container)
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height)
      .attr('viewBox', [-this.width / 2, -this.height / 2, this.width, this.height])
      .attr('style', 'max-width: 100%; height: auto;');
    
    this.loadData();
  }
  
  private async loadData(): Promise<void> {
    try {
      const response = await fetch('/assets/data/mindmap.json');
      if (!response.ok) {
        throw new Error('Mind map data not found');
      }
      
      this.data = await response.json();
      this.renderMindMap();
    } catch (error) {
      console.error('Failed to load mind map data:', error);
    }
  }
  
  private renderMindMap(): void {
    if (!this.svg || !this.data) return;
    
    // D3 계층 레이아웃 생성
    const root = d3.hierarchy(this.data);
    const links = root.links();
    const nodes = root.descendants();
    
    // 트리 레이아웃 생성
    const treeLayout = d3.tree<MindMapNode>()
      .size([2 * Math.PI, Math.min(this.width, this.height) / 2 - 100]);
    
    treeLayout(root as d3.HierarchyNode<MindMapNode>);
    
    // 링크 그리기
    const linkGenerator = d3.linkRadial<d3.HierarchyLink<MindMapNode>, d3.HierarchyNode<MindMapNode>>()
      .angle(d => (d as any).x)
      .radius(d => (d as any).y);
    
    this.svg.append('g')
      .attr('fill', 'none')
      .attr('stroke', '#999')
      .attr('stroke-opacity', 0.4)
      .attr('stroke-width', 1.5)
      .selectAll('path')
      .data(links)
      .join('path')
      .attr('d', linkGenerator as any);
    
    // 노드 그리기
    const node = this.svg.append('g')
      .selectAll('g')
      .data(nodes)
      .join('g')
      .attr('transform', d => `translate(${this.project((d as any).x, (d as any).y)})`);
    
    // 노드 원 그리기
    node.append('circle')
      .attr('fill', d => this.getNodeColor(d.data))
      .attr('r', 4);
    
    // 노드 텍스트 그리기
    node.append('text')
      .attr('dy', '0.31em')
      .attr('x', d => ((d as any).x < Math.PI === !((d as any).children) ? 6 : -6))
      .attr('text-anchor', d => ((d as any).x < Math.PI === !((d as any).children) ? 'start' : 'end'))
      .attr('transform', d => `rotate(${((d as any).x < Math.PI ? (d as any).x - Math.PI / 2 : (d as any).x + Math.PI / 2) * 180 / Math.PI})`)
      .text(d => d.data.name)
      .clone(true).lower()
      .attr('stroke', 'white')
      .attr('stroke-width', 3);
    
    // 링크 기능 추가
    node.filter(d => Boolean(d.data.url))
      .style('cursor', 'pointer')
      .on('click', (_, d) => {
        if (d.data.url) {
          window.location.href = d.data.url;
        }
      });
  }
  
  private project(x: number, y: number): [number, number] {
    const angle = x - Math.PI / 2;
    return [Math.cos(angle) * y, Math.sin(angle) * y];
  }
  
  private getNodeColor(node: MindMapNode): string {
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

// 싱글톤 인스턴스 생성
const mindMapVisualizer = new MindMapVisualizer();
export default mindMapVisualizer; 