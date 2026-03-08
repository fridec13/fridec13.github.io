// ── Project Data ────────────────────────────────────────────────────────────
const projects = {
  project1: {
    title: 'LeRobot Tutorial',
    date: '2025.04',
    tags: ['Robotics', 'Python', 'Machine Learning'],
    image: 'https://picsum.photos/seed/lerobot/900/506',
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
    image: 'https://picsum.photos/seed/jekyllblog/900/506',
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
    image: 'https://picsum.photos/seed/gsapport/900/506',
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
        <li>프로젝트 사이드바 + 가로 패널 전환</li>
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

// ── Global State ─────────────────────────────────────────────────────────────
const projectKeys  = Object.keys(projects);
let   currentPage  = 'home';
let   panelIndex   = 0;
let   isPanelAnim  = false;

// ── Article HTML builder ──────────────────────────────────────────────────────
function buildArticleHTML(id) {
  const p = projects[id];
  if (!p) return '';

  const tags  = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
  const links = p.links.map(l =>
    `<a class="article-link" href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`
  ).join('');
  const imageHTML = p.image
    ? `<div class="article-image"><img src="${p.image}" alt="${p.title}" loading="lazy" /></div>`
    : '';

  return `
    <div class="article-inner">
      <div class="article-header">
        <div class="article-tags">${tags}</div>
        <h1 class="article-title">${p.title}</h1>
        <span class="article-date">${p.date}</span>
      </div>
      <hr class="article-divider" />
      ${imageHTML}
      <p class="article-overview">${p.overview}</p>
      <div class="article-body">${p.content}</div>
      ${links ? `<div class="article-links">${links}</div>` : ''}
    </div>
  `;
}

// ── Panel helpers ─────────────────────────────────────────────────────────────
function getPanels() {
  return Array.from(document.querySelectorAll('.project-panel'));
}

function updatePanelUI() {
  document.querySelectorAll('.project-item').forEach((el, i) =>
    el.classList.toggle('active', i === panelIndex)
  );
  document.querySelectorAll('.panel-dot').forEach((el, i) =>
    el.classList.toggle('active', i === panelIndex)
  );
}

// ── Init panels (called once on DOMContentLoaded) ─────────────────────────────
function initPanels() {
  const track  = document.getElementById('projects-track');
  const dotsEl = document.getElementById('panel-dots');

  projectKeys.forEach((id, i) => {
    // Panel
    const panel = document.createElement('div');
    panel.className = 'project-panel';
    panel.dataset.project = id;
    panel.innerHTML = buildArticleHTML(id);
    track.appendChild(panel);

    // Hide panels except first
    if (i > 0) {
      gsap.set(panel, { xPercent: 100, opacity: 0, pointerEvents: 'none' });
    } else {
      panel.style.pointerEvents = 'auto';
    }

    // Dot
    const dot = document.createElement('span');
    dot.className = 'panel-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goToPanel(i));
    dotsEl.appendChild(dot);
  });

  // Sidebar items → jump to panel
  document.querySelectorAll('.project-item').forEach((item, i) => {
    item.addEventListener('click', () => goToPanel(i));
  });

  setupPanelScroll();
}

// ── Go to panel (병풍 fold transition) ───────────────────────────────────────
function goToPanel(nextIndex, animate = true) {
  if (isPanelAnim || nextIndex === panelIndex) return;
  if (nextIndex < 0 || nextIndex >= projectKeys.length) return;

  const panels  = getPanels();
  const leaving  = panels[panelIndex];
  const entering = panels[nextIndex];
  const dir      = nextIndex > panelIndex ? 1 : -1;  // +1 = forward, -1 = back

  isPanelAnim = true;
  entering.scrollTop = 0;

  // Stage the entering panel off-screen
  gsap.set(entering, { xPercent: dir * 105, skewX: dir * 4, opacity: 0 });
  entering.style.pointerEvents = 'none';

  const tl = gsap.timeline({
    onComplete() {
      gsap.set(leaving, { opacity: 0, xPercent: 0, skewX: 0 });
      leaving.style.pointerEvents  = 'none';
      entering.style.pointerEvents = 'auto';
      panelIndex  = nextIndex;
      isPanelAnim = false;
      updatePanelUI();
    },
  });

  // Leaving panel: fold/slide away
  tl.to(leaving, {
    xPercent: dir * -105,
    skewX:    dir * -4,
    opacity:  0,
    duration: 0.45,
    ease:     'power3.in',
  });

  // Entering panel: unfold from the side
  tl.to(entering, {
    xPercent: 0,
    skewX:    0,
    opacity:  1,
    duration: 0.5,
    ease:     'power3.out',
  }, '-=0.18');

  // Article content stagger
  const contentEls = [
    '.article-header', '.article-image',
    '.article-overview', '.article-body', '.article-links',
  ].map(s => entering.querySelector(s)).filter(Boolean);

  if (contentEls.length) {
    tl.fromTo(contentEls,
      { y: 22, opacity: 0 },
      { y: 0,  opacity: 1, duration: 0.38, stagger: 0.06, ease: 'power3.out' },
      '-=0.25'
    );
  }
}

// ── Wheel → panel scroll (desktop) ───────────────────────────────────────────
function setupPanelScroll() {
  const wrapper = document.querySelector('.projects-track-wrapper');

  wrapper.addEventListener('wheel', (e) => {
    if (window.innerWidth <= 768 || isPanelAnim) return;

    const panel                             = getPanels()[panelIndex];
    const { scrollTop, scrollHeight, clientHeight } = panel;
    const atBottom = scrollTop + clientHeight >= scrollHeight - 2;
    const atTop    = scrollTop <= 0;

    // Edge of panel → switch panel; otherwise let it scroll naturally
    if (e.deltaY > 0 && atBottom) {
      e.preventDefault();
      goToPanel(panelIndex + 1);
    } else if (e.deltaY < 0 && atTop) {
      e.preventDefault();
      goToPanel(panelIndex - 1);
    }
  }, { passive: false });

  // Keyboard support
  window.addEventListener('keydown', (e) => {
    if (currentPage !== 'projects') return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goToPanel(panelIndex + 1);
    if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   goToPanel(panelIndex - 1);
  });
}

// ── Page transition ───────────────────────────────────────────────────────────
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

  if (pageId === 'projects') {
    tl.from('.project-item',
      { x: -16, opacity: 0, duration: 0.35, stagger: 0.07, ease: 'power2.out' },
      '-=0.2'
    );
    // Animate current panel content when re-entering
    tl.call(() => {
      const panel = getPanels()[panelIndex];
      if (!panel) return;
      const els = ['.article-header', '.article-image', '.article-overview', '.article-body', '.article-links']
        .map(s => panel.querySelector(s)).filter(Boolean);
      if (els.length) gsap.fromTo(els,
        { y: 16, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.35, stagger: 0.05, ease: 'power3.out' }
      );
    });
  }

  if (pageId === 'about') {
    tl.from(['.about-title', '.about-content p', '.skill-tag'],
      { y: 20, opacity: 0, duration: 0.4, stagger: 0.06, ease: 'power2.out' },
      '-=0.2'
    );
  }

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === pageId);
  });
}

// ── Header / logo nav ─────────────────────────────────────────────────────────
document.querySelectorAll('[data-page]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    navigateTo(el.dataset.page);
  });
});

// ── Init ──────────────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  initPanels();

  const homePage = document.getElementById('page-home');
  homePage.style.display = 'block';
  homePage.classList.add('active');

  const tl = gsap.timeline();
  tl.from('#header',     { y: -60, opacity: 0, duration: 0.6, ease: 'power3.out' })
    .from('.hero-label', { y: 30,  opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.1')
    .from('.hero-name',  { y: 50,  opacity: 0, duration: 0.8, ease: 'power4.out' }, '-=0.4')
    .from('.hero-desc',  { y: 30,  opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4');
});
