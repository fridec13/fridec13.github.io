// ── Project Data ────────────────────────────────────────────────────────────
const projects = {
  project1: {
    title: 'LeRobot Tutorial',
    date: '2025.04',
    tags: ['Robotics', 'Python', 'Machine Learning'],
    overview:
      'Hugging Face의 LeRobot 라이브러리를 활용한 로봇 팔 모방학습(Imitation Learning) 튜토리얼 시리즈입니다. 실제 하드웨어 없이 시뮬레이션 환경에서 정책 학습을 실험했습니다.',
    content: `
      <h3>프로젝트 개요</h3>
      <p>LeRobot은 Hugging Face에서 제공하는 오픈소스 로봇공학 라이브러리입니다.
         강화학습 및 모방학습 알고리즘을 시뮬레이션 환경에서 쉽게 실험할 수 있습니다.</p>
      <h3>주요 내용</h3>
      <ul>
        <li>환경 설정 및 의존성 설치 (conda, CUDA)</li>
        <li>데모 데이터셋 수집 파이프라인 구성</li>
        <li>ACT(Action Chunking Transformer) 모델 학습</li>
        <li>학습된 정책으로 로봇 팔 시뮬레이션 제어</li>
      </ul>
      <h3>사용 기술</h3>
      <p>Python · PyTorch · Hugging Face Hub · LeRobot · Gymnasium</p>
    `,
    links: [
      { label: 'GitHub',    href: 'https://github.com/fridec13' },
      { label: 'Blog Post', href: '#' },
    ],
  },

  project2: {
    title: 'Jekyll Blog',
    date: '2025.04',
    tags: ['Jekyll', 'GitHub Pages', 'SCSS', 'TypeScript'],
    overview:
      'GitHub Pages 기반 개인 기술 블로그입니다. 기존 테마를 처음부터 재설계하여 다크모드, 카테고리, 타임라인, 3D 모델 뷰어 등의 기능을 직접 구현했습니다.',
    content: `
      <h3>프로젝트 개요</h3>
      <p>Jekyll과 GitHub Pages를 활용한 정적 사이트 블로그입니다.
         기존 테마를 전면 재설계하여 개인 취향에 맞는 디자인과 기능을 구현했습니다.</p>
      <h3>구현 기능</h3>
      <ul>
        <li>완전 커스텀 SCSS 테마 (CSS 변수 기반)</li>
        <li>카테고리 · 태그 자동 생성 Ruby 플러그인</li>
        <li>타임라인 레이아웃 페이지</li>
        <li>Three.js 기반 3D 모델 뷰어 임베드</li>
        <li>Giscus 댓글 시스템 연동</li>
        <li>GitHub Actions 자동 빌드/배포</li>
      </ul>
      <h3>사용 기술</h3>
      <p>Jekyll · Liquid · SCSS · TypeScript · GitHub Actions</p>
    `,
    links: [
      { label: 'GitHub', href: 'https://github.com/fridec13/fridec13.github.io' },
    ],
  },

  project3: {
    title: 'GSAP Portfolio',
    date: '2026.03',
    tags: ['GSAP', 'HTML/CSS', 'Vanilla JS'],
    overview:
      '순수 HTML, CSS, JavaScript와 GSAP 애니메이션 라이브러리만으로 구축한 포트폴리오 페이지입니다. 프레임워크 없이 부드러운 페이지 전환과 인터랙션을 구현했습니다.',
    content: `
      <h3>프로젝트 개요</h3>
      <p>이 포트폴리오 페이지 자체입니다. 프레임워크 없이 순수 웹 기술만으로 SPA와 같은
         인터랙션을 구현하는 것을 목표로 했습니다.</p>
      <h3>구현 사항</h3>
      <ul>
        <li>GSAP Timeline을 활용한 페이지 전환 애니메이션</li>
        <li>헤더 네비게이션 기반 뷰 전환 (SPA 구조)</li>
        <li>프로젝트 사이드바 + 아티클 레이아웃</li>
        <li>GitHub Pages 정적 배포</li>
        <li>모바일 반응형 레이아웃</li>
      </ul>
      <h3>사용 기술</h3>
      <p>HTML5 · CSS3 · Vanilla JavaScript · GSAP 3</p>
    `,
    links: [
      { label: 'GitHub', href: 'https://github.com/fridec13/fridec13.github.io' },
    ],
  },
};

// ── State ────────────────────────────────────────────────────────────────────
let currentPage    = 'home';
let currentProject = 'project1';

// ── Helpers ──────────────────────────────────────────────────────────────────
function buildArticleHTML(id) {
  const p = projects[id];
  if (!p) return '';

  const tags  = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
  const links = p.links.map(l =>
    `<a class="article-link" href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`
  ).join('');

  return `
    <div class="article-header">
      <div class="article-tags">${tags}</div>
      <h1 class="article-title">${p.title}</h1>
      <span class="article-date">${p.date}</span>
    </div>
    <hr class="article-divider" />
    <p class="article-overview">${p.overview}</p>
    <div class="article-body">${p.content}</div>
    ${links ? `<div class="article-links">${links}</div>` : ''}
  `;
}

// ── Article render ───────────────────────────────────────────────────────────
function renderArticle(id, animate = true) {
  const articleEl = document.querySelector('.project-article');
  articleEl.innerHTML = buildArticleHTML(id);
  currentProject = id;

  if (!animate) return;

  const els = [
    '.article-header',
    '.article-overview',
    '.article-body',
    '.article-links',
  ].map(s => articleEl.querySelector(s)).filter(Boolean);

  gsap.fromTo(els,
    { opacity: 0, y: 24 },
    { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out', stagger: 0.08 }
  );
}

// ── Page transition ──────────────────────────────────────────────────────────
function navigateTo(pageId) {
  if (pageId === currentPage) return;

  const fromEl = document.getElementById(`page-${currentPage}`);
  const toEl   = document.getElementById(`page-${pageId}`);

  const tl = gsap.timeline({
    onComplete() {
      fromEl.style.display = 'none';
      fromEl.classList.remove('active');
      currentPage = pageId;
    },
  });

  tl.to(fromEl, { opacity: 0, y: -18, duration: 0.22, ease: 'power2.in' });

  tl.call(() => {
    toEl.style.display = 'block';
    toEl.classList.add('active');
    gsap.set(toEl, { opacity: 0, y: 20 });
  });

  tl.to(toEl, { opacity: 1, y: 0, duration: 0.38, ease: 'power3.out' });

  // Sidebar stagger on projects
  if (pageId === 'projects') {
    tl.from('.project-item',
      { x: -16, opacity: 0, duration: 0.35, stagger: 0.07, ease: 'power2.out' },
      '-=0.2'
    );
  }

  // About stagger
  if (pageId === 'about') {
    tl.from(['.about-title', '.about-content p', '.skill-tag'],
      { y: 20, opacity: 0, duration: 0.4, stagger: 0.06, ease: 'power2.out' },
      '-=0.2'
    );
  }

  // Update nav active state
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === pageId);
  });
}

// ── Event listeners ──────────────────────────────────────────────────────────

// Header nav + logo
document.querySelectorAll('[data-page]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    const page = el.dataset.page;
    navigateTo(page);

    // Render first project when entering projects page
    if (page === 'projects') {
      renderArticle(currentProject);
    }
  });
});

// Sidebar items
document.querySelectorAll('.project-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.project-item').forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    renderArticle(item.dataset.project);
  });
});

// ── Init ─────────────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  // Pre-populate article (no animation, page is hidden)
  renderArticle('project1', false);

  // Show home page
  const homePage = document.getElementById('page-home');
  homePage.style.display = 'block';
  homePage.classList.add('active');

  // Header drop-in
  gsap.from('#header', { y: -60, opacity: 0, duration: 0.7, ease: 'power3.out' });

  // Hero sequence
  const tl = gsap.timeline({ delay: 0.3 });
  tl.from('.hero-label', { y: 30, opacity: 0, duration: 0.7, ease: 'power3.out' })
    .from('.hero-name',  { y: 50, opacity: 0, duration: 0.9, ease: 'power4.out' }, '-=0.4')
    .from('.hero-desc',  { y: 30, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.5');

  gsap.set(homePage, { opacity: 1 });
});
