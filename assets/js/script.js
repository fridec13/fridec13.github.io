// ── Project Data ────────────────────────────────────────────────────────────
// 본문 HTML은 assets/projects/<id>.html 파일로 분리되어 fetch로 로드됩니다.
const projects = {
  project1: {
    title:    'LeRobot — Bimanual Teleoperation',
    date:     '2025.04 ~ 2025.05',
    tags:     ['ROS2', 'Python', 'ACT', 'Imitation Learning'],
    image:    'https://picsum.photos/seed/lerobot/900/506',
    overview: 'Hugging Face LeRobot 기반 양손 협응 로봇팔 제어 프로젝트입니다. 웹캠 3대·로봇팔 2개로 데이터를 수집하고 ACT 모델을 학습해 6개 태스크를 자율 수행하도록 구현했습니다. SSAFY 12기 자율 프로젝트.',
    src:      'assets/projects/project1.html',
    links: [
      { label: 'GitHub',    href: 'https://github.com/fridec13' },
      { label: 'Blog Post', href: '#' },
    ],
  },

  project2: {
    title:    'Jekyll Blog',
    date:     '2025.06 ~',
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
    date:     '2026.03 ~',
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

  project5: {
    title:    'ROBOCOP 로컬 포팅 및 고도화',
    date:     '2026.03.10 ~ 2026.03.12',
    tags:     ['ROS2', 'FastAPI', 'Vue3', 'Three.js', 'Python', 'MongoDB'],
    image:    'assets/images/robocop-3dmap.png',
    overview: '무인 순찰 로봇 관제 시스템을 로컬 환경으로 재포팅하면서, 미해결로 남았던 유휴 CPU 75~80% 점유 문제를 구조적으로 재분석해 0.3% 수준으로 개선한 리팩터링 프로젝트입니다.',
    src:      'assets/projects/project5.html',
    links: [
      { label: 'GitHub', href: 'https://github.com/fridec13' },
    ],
  },

  project6: {
    title:    'ROBOCOP 무인 순찰 로봇 관제',
    date:     '2025.01 ~ 2025.02',
    tags:     ['ROS2', 'FastAPI', 'Vue3', 'Gazebo', 'Docker', 'MongoDB'],
    image:    'https://picsum.photos/seed/robocop/900/506',
    overview: 'SSAFY 12기 공통 프로젝트. ROS2·Gazebo 기반 로봇 2대의 실시간 위치 추적·원격 제어·CCTV 스트리밍을 Vue3 대시보드에서 통합 관제하는 솔루션입니다. FastAPI + Motor + Docker + Nginx 전체 스택을 7주 안에 설계·구축했습니다.',
    src:      'assets/projects/project6.html',
    links: [
      { label: 'GitHub', href: 'https://github.com/fridec13' },
    ],
  },

  project7: {
    title:    'GPT 컨베이어 공정 자동화',
    date:     '2024.10 ~ 2024.11',
    tags:     ['ROS2', 'YOLO', 'ChatGPT', 'Raspberry Pi', 'Python'],
    image:    'https://picsum.photos/seed/conveyor/900/506',
    overview: 'SSAFY 12기 관통 프로젝트 최우수상 수상작. 4DOF Dobot Magician 로봇팔이 음성 명령(STT + ChatGPT)으로 픽앤플레이스 작업을 수행하고, YOLO로 불량 부품을 검출해 라즈베리파이 컨베이어에서 자동 분류하는 공정 자동화 시스템입니다.',
    src:      'assets/projects/project7.html',
    links: [
      { label: 'GitHub', href: 'https://github.com/fridec13' },
    ],
  },

  project8: {
    title:    'KKUKKKUK — 반려동물 의료정보 관리',
    date:     '2025.03 ~ 2025.04',
    tags:     ['Solidity', 'React', 'Spring Boot', 'MetaMask', 'Ethereum', 'Flutter'],
    image:    'assets/images/kkukkkuk-logo.png',
    overview: 'SSAFY 12기 공통 프로젝트. 프라이빗 이더리움 네트워크(Besu)에서 가스비 없이 반려동물 진료 기록을 스마트컨트랙트로 관리합니다. 보호자가 병원별 조회 권한을 직접 부여·회수하는 DIDRegistry 아키텍처로 설계했습니다.',
    src:      'assets/projects/project8.html',
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

      // Prime sidebar height now that the page is visible (scrollHeight works)
      const sidebarEl = document.querySelector('.projects-sidebar');
      if (sidebarEl && sidebarEl._initHeight) sidebarEl._initHeight();

      // Capture sidebar height now that the page is visible (scrollHeight is valid)
      const sb = document.querySelector('.projects-sidebar');
      if (sb && sb._captureHeight) sb._captureHeight();

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

// ── Mobile sidebar: overlay slide on scroll ───────────────────────────────────
// The sidebar is position:absolute over the article area (see CSS).
// Sliding it via transform keeps the article's scroll position intact —
// the track-wrapper never resizes, so no layout reflow occurs.
function setupMobileSidebarScroll() {
  const sidebar = document.querySelector('.projects-sidebar');

  const isMobile = () => window.innerWidth <= 768;

  let visible     = true;
  let naturalH    = 0;
  let initialized = false;

  function captureHeight() {
    if (initialized) return;
    if (!isMobile()) return;
    naturalH = sidebar.offsetHeight; // valid once projects page is display:block
    if (!naturalH) return;
    // Set padding-top on every panel so content starts below the sidebar overlay.
    // This space is always reserved; the sidebar covers it when visible.
    getPanels().forEach(p => { p.style.paddingTop = naturalH + 'px'; });
    initialized = true;
  }

  function showSidebar() {
    if (!isMobile()) return;
    if (visible) return;
    visible = true;
    sidebar.style.transform = 'translateY(0)';
  }

  function hideSidebar() {
    if (!isMobile()) return;
    if (!visible) return;
    if (!initialized) {
      captureHeight();
      if (!initialized) return; // page not visible yet, skip
    }
    visible = false;
    sidebar.style.transform = 'translateY(-100%)';
  }

  // Adapt sidebar when viewport crosses the mobile breakpoint
  let wasMobile = isMobile();
  function onResize() {
    const mobile = isMobile();
    if (wasMobile === mobile) return; // no breakpoint crossing, skip
    wasMobile = mobile;

    if (!mobile) {
      // Crossed into desktop: strip all mobile-only inline styles
      sidebar.style.transform = '';
      getPanels().forEach(p => { p.style.paddingTop = ''; });
      visible     = true;
      initialized = false;
      naturalH    = 0;
      lastScrollTop = 0;
    } else {
      // Crossed back into mobile: re-capture height and restore padding
      lastScrollTop = 0;
      captureHeight();
    }
  }
  window.addEventListener('resize', onResize);

  let lastScrollTop = 0;

  function onScroll() {
    if (!isMobile()) return;
    const st = this.scrollTop;
    if (st <= 0) {
      showSidebar();
    } else if (st > lastScrollTop) {
      hideSidebar();   // scrolling down
    } else {
      showSidebar();   // scrolling up
    }
    lastScrollTop = st;
  }

  getPanels().forEach(panel =>
    panel.addEventListener('scroll', onScroll, { passive: true })
  );

  sidebar._showSidebar   = showSidebar;
  sidebar._captureHeight = captureHeight;
}

// ── Header / logo nav ─────────────────────────────────────────────────────────
document.querySelectorAll('[data-page]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    navigateTo(el.dataset.page);
  });
});

// ── Theme toggle (3-mode: dark → light → read → dark) ────────────────────────
function initTheme() {
  const btn       = document.getElementById('theme-toggle');
  const html      = document.documentElement;
  const hljsTheme = document.getElementById('hljs-theme');

  const HLJS_DARK  = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css';
  const HLJS_LIGHT = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css';

  // mode: 'dark' | 'light' | 'read'
  function applyTheme(mode) {
    html.classList.remove('light', 'read');

    const isDark = mode === 'dark';

    if (mode === 'light') {
      html.classList.add('light');
      btn.textContent = 'Aa';            // → 다음은 가독성 모드
      btn.title       = '가독성 모드로 전환';
    } else if (mode === 'read') {
      html.classList.add('read');
      btn.textContent = '☾\uFE0E';       // → 다음은 다크 모드
      btn.title       = '다크 모드로 전환';
    } else {
      btn.textContent = '☀\uFE0E';       // → 다음은 라이트 모드
      btn.title       = '라이트 모드로 전환';
    }

    // highlight.js 테마 교체
    if (hljsTheme) {
      hljsTheme.href = isDark ? HLJS_DARK : HLJS_LIGHT;
    }

    localStorage.setItem('theme', mode);

    // Mermaid 테마 재렌더링
    if (window.mermaid && mermaidReady) {
      mermaid.initialize({ startOnLoad: false, theme: isDark ? 'dark' : 'default' });
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

  // 클릭: dark → light → read → dark 순환
  btn.addEventListener('click', () => {
    const cur  = localStorage.getItem('theme') || 'dark';
    const next = cur === 'dark' ? 'light' : cur === 'light' ? 'read' : 'dark';
    applyTheme(next);
  });

  // 저장된 설정 복원
  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'read') applyTheme(saved);
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
