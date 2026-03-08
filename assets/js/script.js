// ── Project Data ────────────────────────────────────────────────────────────
// 본문 HTML은 assets/projects/<id>.html 파일로 분리되어 fetch로 로드됩니다.
const projects = {
  project1: {
    title:    'LeRobot Tutorial',
    date:     '2025.04',
    tags:     ['Robotics', 'Python', 'Machine Learning'],
    image:    'https://picsum.photos/seed/lerobot/900/506',
    overview: 'Hugging Face의 LeRobot 라이브러리를 활용한 로봇 팔 모방학습(Imitation Learning) 튜토리얼 시리즈입니다. 실제 하드웨어 없이 시뮬레이션 환경에서 정책 학습을 실험했습니다.',
    src:      'assets/projects/project1.html',
    links: [
      { label: 'GitHub',    href: 'https://github.com/fridec13' },
      { label: 'Blog Post', href: '#' },
    ],
  },

  project2: {
    title:    'Jekyll Blog',
    date:     '2025.04',
    tags:     ['Jekyll', 'GitHub Pages', 'SCSS', 'TypeScript'],
    image:    'https://picsum.photos/seed/jekyllblog/900/506',
    overview: 'GitHub Pages 기반 개인 기술 블로그입니다. 기존 테마를 처음부터 재설계하여 다크모드, 카테고리, 타임라인, 3D 모델 뷰어 등의 기능을 직접 구현했습니다.',
    src:      'assets/projects/project2.html',
    links: [
      { label: 'GitHub', href: 'https://github.com/fridec13/fridec13.github.io' },
    ],
  },

  project3: {
    title:    'GSAP Portfolio',
    date:     '2026.03',
    tags:     ['GSAP', 'HTML/CSS', 'Vanilla JS'],
    image:    'https://picsum.photos/seed/gsapport/900/506',
    overview: '순수 HTML, CSS, JavaScript와 GSAP 애니메이션 라이브러리만으로 구축한 포트폴리오 페이지입니다. 프레임워크 없이 부드러운 페이지 전환과 인터랙션을 구현했습니다.',
    src:      'assets/projects/project3.html',
    links: [
      { label: 'GitHub', href: 'https://github.com/fridec13/fridec13.github.io' },
    ],
  },

  project4: {
    title:    'Demo Article',
    date:     '2026.03',
    tags:     ['Test', 'Code', 'Table', 'Mermaid'],
    image:    'https://picsum.photos/seed/demodoc/900/506',
    overview: '코드 블록, 테이블, Mermaid 차트 렌더링을 확인하기 위한 테스트 아티클입니다.',
    src:      'assets/projects/project4.html',
    links: [
      { label: 'GitHub', href: 'https://github.com/fridec13' },
    ],
  },
};

// ── Global State ─────────────────────────────────────────────────────────────
const projectKeys  = Object.keys(projects).filter(k => k.startsWith('project'));
let   currentPage  = 'home';
let   panelIndex   = 0;
let   isPanelAnim  = false;
let   mermaidReady = false; // true after first successful mermaid.run()

// ── Article shell builder (body content loaded separately via fetch) ──────────
function buildArticleShell(id) {
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
      <div class="article-body"></div>
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

// ── Init panels (async: fetches body HTML from separate files) ────────────────
async function initPanels() {
  const track  = document.getElementById('projects-track');
  const dotsEl = document.getElementById('panel-dots');

  // 1. Build panel shells synchronously so layout is ready immediately
  projectKeys.forEach((id, i) => {
    const panel = document.createElement('div');
    panel.className = 'project-panel';
    panel.dataset.project = id;
    panel.innerHTML = buildArticleShell(id);
    track.appendChild(panel);

    if (i === 0) {
      panel.style.pointerEvents = 'auto';
    } else {
      gsap.set(panel, { xPercent: 100, opacity: 0, pointerEvents: 'none' });
    }

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
  setupMobileSidebarScroll();

  // 2. Fetch all body HTML files in parallel
  await Promise.all(projectKeys.map(async (id) => {
    const p      = projects[id];
    const panel  = track.querySelector(`[data-project="${id}"]`);
    const bodyEl = panel.querySelector('.article-body');

    try {
      const res = await fetch(p.src);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      bodyEl.innerHTML = await res.text();
    } catch (err) {
      bodyEl.innerHTML = '<p class="error">콘텐츠를 불러오지 못했습니다.</p>';
      console.error(`[initPanels] Failed to load ${p.src}:`, err);
    }

    if (window.hljs) {
      panel.querySelectorAll('pre code').forEach(el => hljs.highlightElement(el));
    }
  }));
}

// ── Go to panel (병풍 fold transition) ───────────────────────────────────────
function goToPanel(nextIndex, animate = true) {
  if (nextIndex < 0 || nextIndex >= projectKeys.length) return;

  if (isPanelAnim || nextIndex === panelIndex) return;

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

      // Restore sidebar on mobile (might have been hidden while scrolling)
      const sidebar = document.querySelector('.projects-sidebar');
      if (sidebar._showSidebar) sidebar._showSidebar();

      // Render mermaid diagrams in this panel now that it has real dimensions
      if (window.mermaid) {
        const nodes = Array.from(entering.querySelectorAll('.mermaid:not([data-processed])'));
        if (nodes.length) {
          nodes.forEach(el => el.setAttribute('data-mermaid-src', el.innerHTML.trim()));
          mermaid.run({ nodes });
          mermaidReady = true;
        }
      }
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
    toEl.scrollTop = 0;
    if (toEl._snap) toEl._snap.current = 0;
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

      // First visit: render mermaid only in the currently visible panel (panel 0)
      if (window.mermaid && !mermaidReady) {
        const firstPanel = getPanels()[0];
        const nodes = firstPanel
          ? Array.from(firstPanel.querySelectorAll('.mermaid:not([data-processed])'))
          : [];
        if (nodes.length) {
          nodes.forEach(el => el.setAttribute('data-mermaid-src', el.innerHTML.trim()));
          mermaid.run({ nodes });
        }
        mermaidReady = true;
      }
    });
  }

  if (pageId === 'about') {
    tl.from(['.about-title', '.about-content p', '.skill-tag'],
      { y: 20, opacity: 0, duration: 0.4, stagger: 0.06, ease: 'power2.out' },
      '-=0.2'
    );
    // Reconnect observer with updated root after page is visible
    tl.call(() => setupSnapAnimations(toEl));
  }

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.page === pageId);
  });

  // Logo underline active only on Home
  document.querySelector('.logo').classList.toggle('active', pageId === 'home');
}

// ── Mobile sidebar (placeholder — collapse behaviour removed for stability) ───
function setupMobileSidebarScroll() {
  // Sidebar stays always visible on mobile for now.
  // goToPanel still calls sidebar._showSidebar if present; no-op here.
}

// ── Header / logo nav ─────────────────────────────────────────────────────────
document.querySelectorAll('[data-page]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    navigateTo(el.dataset.page);
  });
});

// ── Theme toggle ─────────────────────────────────────────────────────────────
function initTheme() {
  const btn  = document.getElementById('theme-toggle');
  const html = document.documentElement;

  function applyTheme(isLight) {
    html.classList.toggle('light', isLight);
    btn.textContent = isLight ? '☾' : '☀';
    btn.title = isLight ? '다크 모드로 전환' : '라이트 모드로 전환';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');

    // Re-render already-processed mermaid diagrams with the new theme
    if (window.mermaid && mermaidReady) {
      mermaid.initialize({ startOnLoad: false, theme: isLight ? 'default' : 'dark' });
      document.querySelectorAll('.mermaid[data-processed]').forEach(el => {
        const src = el.getAttribute('data-mermaid-src');
        if (src) {
          el.removeAttribute('data-processed');
          el.innerHTML = src;
        }
      });
      mermaid.run();
    }
  }

  btn.addEventListener('click', () => {
    applyTheme(!html.classList.contains('light'));
  });

  // Restore saved preference
  const saved = localStorage.getItem('theme');
  if (saved === 'light') applyTheme(true);
}

// ── GSAP-controlled snap scroll + section enter animations ───────────────────
function setupSnapAnimations(pageEl) {
  const allSections  = Array.from(pageEl.querySelectorAll('.snap-section'));
  const animSections = Array.from(pageEl.querySelectorAll('[data-snap-animate]'));
  if (!allSections.length) return;

  // Per-page snap state stored on the element
  pageEl._snap = { current: 0, busy: false };

  function snapTo(index) {
    const state = pageEl._snap;
    if (state.busy || index === state.current) return;
    if (index < 0 || index >= allSections.length) return;

    state.busy = true;
    const target    = allSections[index];
    const targetTop = target.getBoundingClientRect().top
                    + pageEl.scrollTop
                    - pageEl.getBoundingClientRect().top;

    gsap.to(pageEl, {
      scrollTop: targetTop,
      duration:  1.1,
      ease:      'power3.inOut',
      onComplete() {
        state.current = index;
        state.busy    = false;
      },
    });
  }

  // Wheel → snap (desktop only; mobile scrolls normally)
  pageEl.addEventListener('wheel', e => {
    if (window.innerWidth <= 768) return;
    e.preventDefault();
    snapTo(pageEl._snap.current + (e.deltaY > 0 ? 1 : -1));
  }, { passive: false });

  // Touch swipe
  let touchY = 0;
  pageEl.addEventListener('touchstart', e => { touchY = e.touches[0].clientY; },
    { passive: true });
  pageEl.addEventListener('touchend', e => {
    const dy = touchY - e.changedTouches[0].clientY;
    if (Math.abs(dy) > 40) snapTo(pageEl._snap.current + (dy > 0 ? 1 : -1));
  }, { passive: true });

  // IntersectionObserver for content animations (fires once per section)
  if (!animSections.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const targets = entry.target.querySelectorAll('.animate-in');
      // Unobserve immediately so snap scroll re-crossing the threshold can't
      // trigger a reset+restart cycle (which caused the "wobble" effect)
      observer.unobserve(entry.target);

      // Small delay lets the snap easing finish before cards rise up
      gsap.fromTo(targets,
        { y: 70, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.9, stagger: 0.12, ease: 'power3.out', delay: 0.25 }
      );
    });
  }, { root: pageEl, threshold: 0.4 });

  animSections.forEach(s => {
    gsap.set(s.querySelectorAll('.animate-in'), { y: 70, opacity: 0 });
    observer.observe(s);
  });
}

// ── Init ──────────────────────────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', async () => {
  if (window.mermaid) {
    const isDark = !document.documentElement.classList.contains('light');
    mermaid.initialize({ startOnLoad: false, theme: isDark ? 'dark' : 'default' });
  }

  initTheme();

  // Wait for all article HTML files to load
  await initPanels();

  // Save mermaid source text now, but DO NOT call mermaid.run() yet —
  // #page-projects is still display:none, and mermaid needs visible dimensions.
  // Actual rendering happens in navigateTo() when the page becomes visible.
  if (window.mermaid) {
    document.querySelectorAll('.mermaid').forEach(el => {
      el.setAttribute('data-mermaid-src', el.innerHTML.trim());
    });
  }

  const homePage  = document.getElementById('page-home');
  const aboutPage = document.getElementById('page-about');

  homePage.style.display = 'block';
  homePage.classList.add('active');

  setupSnapAnimations(homePage);
  setupSnapAnimations(aboutPage);

  const tl = gsap.timeline();
  tl.from('#header',     { y: -60, opacity: 0, duration: 0.6, ease: 'power3.out' })
    .from('.hero-label', { y: 30,  opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.1')
    .from('.hero-name',  { y: 50,  opacity: 0, duration: 0.8, ease: 'power4.out' }, '-=0.4')
    .from('.hero-desc',  { y: 30,  opacity: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4')
    .from('.scroll-hint',{ opacity: 0, duration: 0.5, ease: 'power2.out' }, '-=0.1');
});
