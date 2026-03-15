// ?? Project Data ????????????????????????????????????????????????????????????
// 蹂몃Ц HTML? assets/projects/<id>.html ?뚯씪濡?遺꾨━?섏뼱 fetch濡?濡쒕뱶?⑸땲??
const projects = {
  project1: {
    title:    'LeRobot ??Bimanual Teleoperation',
    date:     '2025.04 ~ 2025.05',
    tags:     ['ROS2', 'Python', 'ACT', 'Imitation Learning'],
    image:    'https://picsum.photos/seed/lerobot/900/506',
    overview: 'Hugging Face LeRobot 湲곕컲 ?묒넀 ?묒쓳 濡쒕큸???쒖뼱 ?꾨줈?앺듃?낅땲?? ?뱀틺 3?쨌濡쒕큸??2媛쒕줈 ?곗씠?곕? ?섏쭛?섍퀬 ACT 紐⑤뜽???숈뒿??6媛??쒖뒪?щ? ?먯쑉 ?섑뻾?섎룄濡?援ы쁽?덉뒿?덈떎. SSAFY 12湲??먯쑉 ?꾨줈?앺듃.',
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
    overview: 'GitHub Pages 湲곕컲 媛쒖씤 湲곗닠 釉붾줈洹몄엯?덈떎. 湲곗〈 ?뚮쭏瑜?泥섏쓬遺???ъ꽕怨꾪븯???ㅽ겕紐⑤뱶, 移댄뀒怨좊━, ??꾨씪?? 3D 紐⑤뜽 酉곗뼱 ?깆쓽 湲곕뒫??吏곸젒 援ы쁽?덉뒿?덈떎.',
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
    overview: '?쒖닔 HTML, CSS, JavaScript? GSAP ?좊땲硫붿씠???쇱씠釉뚮윭由щ쭔?쇰줈 援ъ텞???ы듃?대━???섏씠吏?낅땲?? ?꾨젅?꾩썙???놁씠 遺?쒕윭???섏씠吏 ?꾪솚怨??명꽣?숈뀡??援ы쁽?덉뒿?덈떎.',
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
    overview: '肄붾뱶 釉붾줉, ?뚯씠釉? Mermaid 李⑦듃 ?뚮뜑留곸쓣 ?뺤씤?섍린 ?꾪븳 ?뚯뒪???꾪떚?댁엯?덈떎.',
    src:      'assets/projects/project4.html',
    links: [
      { label: 'GitHub', href: 'https://github.com/fridec13' },
    ],
  },

  project5: {
    title:    'ROBOCOP 濡쒖뺄 ?ы똿 諛?怨좊룄??,
    date:     '2026.03.10 ~ 2026.03.12',
    tags:     ['ROS2', 'FastAPI', 'Vue3', 'Three.js', 'Python', 'MongoDB'],
    image:    'assets/images/robocop-3dmap.png',
    overview: '臾댁씤 ?쒖같 濡쒕큸 愿???쒖뒪?쒖쓣 濡쒖뺄 ?섍꼍?쇰줈 ?ы룷?낇븯硫댁꽌, 誘명빐寃곕줈 ?⑥븯???좏쑕 CPU 75~80% ?먯쑀 臾몄젣瑜?援ъ“?곸쑝濡??щ텇?앺빐 0.3% ?섏??쇰줈 媛쒖꽑??由ы뙥?곕쭅 ?꾨줈?앺듃?낅땲??',
    src:      'assets/projects/project5.html',
    links: [
      { label: 'GitHub', href: 'https://github.com/fridec13' },
    ],
  },

  project6: {
    title:    'ROBOCOP 臾댁씤 ?쒖같 濡쒕큸 愿??,
    date:     '2025.01 ~ 2025.02',
    tags:     ['ROS2', 'FastAPI', 'Vue3', 'Gazebo', 'Docker', 'MongoDB'],
    image:    'https://picsum.photos/seed/robocop/900/506',
    overview: 'SSAFY 12湲?怨듯넻 ?꾨줈?앺듃. ROS2쨌Gazebo 湲곕컲 濡쒕큸 2????ㅼ떆媛??꾩튂 異붿쟻쨌?먭꺽 ?쒖뼱쨌CCTV ?ㅽ듃由щ컢??Vue3 ??쒕낫?쒖뿉???듯빀 愿?쒗븯???붾（?섏엯?덈떎. FastAPI + Motor + Docker + Nginx ?꾩껜 ?ㅽ깮??7二??덉뿉 ?ㅺ퀎쨌援ъ텞?덉뒿?덈떎.',
    src:      'assets/projects/project6.html',
    links: [
      { label: 'GitHub', href: 'https://github.com/fridec13' },
    ],
  },

  project7: {
    title:    'GPT 而⑤쿋?댁뼱 怨듭젙 ?먮룞??,
    date:     '2024.10 ~ 2024.11',
    tags:     ['ROS2', 'YOLOv5', 'ChatGPT', 'Raspberry Pi', 'RoboDK', 'Python'],
    image:    'assets/images/dobot-demo.png',
    overview: 'SSAFY 12湲?愿???꾨줈?앺듃 理쒖슦?섏긽 ?섏긽?? 4DOF Dobot Magician 濡쒕큸?붿씠 ?뚯꽦 紐낅졊(STT + ChatGPT)?쇰줈 ?쎌븻?뚮젅?댁뒪 ?묒뾽???섑뻾?섍퀬, YOLOv5濡?遺덈웾 遺?덉쓣 寃異쒗빐 ?쇱쫰踰좊━?뚯씠 而⑤쿋?댁뼱?먯꽌 ?먮룞 遺꾨쪟?⑸땲?? RoboDK ?붿????몄쐢?쇰줈 ?ㅼ떆媛??곹깭 ?숆린?붾룄 援ы쁽?덉뒿?덈떎.',
    src:      'assets/projects/project7.html',
    links: [
      { label: 'GitHub', href: 'https://github.com/fridec13' },
      { label: 'YouTube', href: 'https://youtu.be/IU831hxLje0' },
    ],
  },

  project8: {
    title:    'KKUKKKUK ??諛섎젮?숇Ъ ?섎즺?뺣낫 愿由?,
    date:     '2025.03 ~ 2025.04',
    tags:     ['Solidity', 'React', 'Spring Boot', 'MetaMask', 'Ethereum', 'Flutter'],
    image:    'assets/images/kkukkkuk-logo.png',
    overview: 'SSAFY 12湲?怨듯넻 ?꾨줈?앺듃. ?꾨씪?대퉿 ?대뜑由ъ? ?ㅽ듃?뚰겕(Besu)?먯꽌 媛?ㅻ퉬 ?놁씠 諛섎젮?숇Ъ 吏꾨즺 湲곕줉???ㅻ쭏?몄빻?몃옓?몃줈 愿由ы빀?덈떎. 蹂댄샇?먭? 蹂묒썝蹂?議고쉶 沅뚰븳??吏곸젒 遺??룻쉶?섑븯??DIDRegistry ?꾪궎?띿쿂濡??ㅺ퀎?덉뒿?덈떎.',
    src:      'assets/projects/project8.html',
    links: [
      { label: 'GitHub', href: 'https://github.com/fridec13' },
    ],
  },
};

// ?? Global State ?????????????????????????????????????????????????????????????
const projectKeys  = Object.keys(projects).filter(k => k.startsWith('project'));
let   currentPage  = 'home';
let   panelIndex   = 0;
let   isPanelAnim  = false;
let   mermaidReady = false; // true after first successful mermaid.run()

// ?? Article shell builder (body content loaded separately via fetch) ??????????
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

// ?? Panel helpers ?????????????????????????????????????????????????????????????
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

// ?? Init panels (async: fetches body HTML from separate files) ????????????????
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

  // Sidebar items ??jump to panel
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
      bodyEl.innerHTML = '<p class="error">肄섑뀗痢좊? 遺덈윭?ㅼ? 紐삵뻽?듬땲??</p>';
      console.error(`[initPanels] Failed to load ${p.src}:`, err);
    }

    if (window.hljs) {
      panel.querySelectorAll('pre code').forEach(el => hljs.highlightElement(el));
    }
  }));
}

// ?? Go to panel (蹂묓뭾 fold transition) ???????????????????????????????????????
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

// ?? Wheel ??panel scroll (desktop) ???????????????????????????????????????????
function setupPanelScroll() {
  const wrapper = document.querySelector('.projects-track-wrapper');

  wrapper.addEventListener('wheel', (e) => {
    if (window.innerWidth <= 768 || isPanelAnim) return;

    const panel                             = getPanels()[panelIndex];
    const { scrollTop, scrollHeight, clientHeight } = panel;
    const atBottom = scrollTop + clientHeight >= scrollHeight - 2;
    const atTop    = scrollTop <= 0;

    // Edge of panel ??switch panel; otherwise let it scroll naturally
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

// ?? Page transition ???????????????????????????????????????????????????????????
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

// ?? Mobile sidebar: overlay slide on scroll ???????????????????????????????????
// The sidebar is position:absolute over the article area (see CSS).
// Sliding it via transform keeps the article's scroll position intact ??
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

// ?? Header / logo nav ?????????????????????????????????????????????????????????
document.querySelectorAll('[data-page]').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    navigateTo(el.dataset.page);
  });
});

// ?? Theme toggle (3-mode: dark ??light ??read ??dark) ????????????????????????
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
      btn.textContent = 'Aa';            // ???ㅼ쓬? 媛?낆꽦 紐⑤뱶
      btn.title       = '媛?낆꽦 紐⑤뱶濡??꾪솚';
    } else if (mode === 'read') {
      html.classList.add('read');
      btn.textContent = '??uFE0E';       // ???ㅼ쓬? ?ㅽ겕 紐⑤뱶
      btn.title       = '?ㅽ겕 紐⑤뱶濡??꾪솚';
    } else {
      btn.textContent = '?\uFE0E';       // ???ㅼ쓬? ?쇱씠??紐⑤뱶
      btn.title       = '?쇱씠??紐⑤뱶濡??꾪솚';
    }

    // highlight.js ?뚮쭏 援먯껜
    if (hljsTheme) {
      hljsTheme.href = isDark ? HLJS_DARK : HLJS_LIGHT;
    }

    localStorage.setItem('theme', mode);

    // Mermaid ?뚮쭏 ?щ젋?붾쭅
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

  // ?대┃: dark ??light ??read ??dark ?쒗솚
  btn.addEventListener('click', () => {
    const cur  = localStorage.getItem('theme') || 'dark';
    const next = cur === 'dark' ? 'light' : cur === 'light' ? 'read' : 'dark';
    applyTheme(next);
  });

  // ??λ맂 ?ㅼ젙 蹂듭썝
  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'read') applyTheme(saved);
}

// ?? GSAP-controlled snap scroll + section enter animations ???????????????????
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

  // Wheel ??snap (desktop only; mobile scrolls normally)
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

// ?? Init ??????????????????????????????????????????????????????????????????????
window.addEventListener('DOMContentLoaded', async () => {
  if (window.mermaid) {
    const isDark = !document.documentElement.classList.contains('light');
    mermaid.initialize({ startOnLoad: false, theme: isDark ? 'dark' : 'default' });
  }

  initTheme();

  // Wait for all article HTML files to load
  await initPanels();

  // Save mermaid source text now, but DO NOT call mermaid.run() yet ??
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

// ?? Print Editor (Easter egg: Ctrl+Shift+P) ??????????????????????????????????
document.addEventListener('keydown', e => {
  if (e.ctrlKey && e.shiftKey && e.key === 'P') {
    e.preventDefault();
    openPrintEditor();
  }
});

// ?? Data ??????????????????????????????????????????????????????????????????????
function getPrintItems() {
  return [
    { id: 'header',  label: '?ㅻ뜑 / ?곕씫泥?,        type: 'meta' },
    { id: 'history', label: 'History & Education', type: 'meta' },
    ...projectKeys.map(k => ({
      id:    k,
      label: projects[k].title,
      date:  projects[k].date,
      type:  'project',
    })),
  ];
}

// ?? Editor open / close ???????????????????????????????????????????????????????
function openPrintEditor() {
  if (document.getElementById('print-editor')) return;

  const overlay = document.createElement('div');
  overlay.id = 'print-editor';
  overlay.className = 'pe-overlay';
  overlay.innerHTML = buildEditorHTML(getPrintItems());
  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add('visible'));
  bindEditorEvents(overlay);
}

function closePrintEditor() {
  const el = document.getElementById('print-editor');
  if (!el) return;
  el.classList.remove('visible');
  setTimeout(() => el.remove(), 220);
}

// ?? Editor HTML ???????????????????????????????????????????????????????????????
function buildEditorHTML(items) {
  const rows = items.map((item, i) => `
    <li class="pe-item" data-id="${item.id}">
      <span class="pe-grip">??떘</span>
      <input type="checkbox" class="pe-check" id="pec-${item.id}" checked>
      <label class="pe-name" for="pec-${item.id}">
        ${item.label}${item.date ? `<span class="pe-date">${item.date}</span>` : ''}
      </label>
      <div class="pe-btns">
        <button class="pe-arrow pe-up"   title="?꾨줈">??/button>
        <button class="pe-arrow pe-down" title="?꾨옒濡?>??/button>
      </div>
    </li>`).join('');

  return `
    <div class="pe-panel">
      <div class="pe-header">
        <span class="pe-title">?몄뇙 ?먮뵒??/span>
        <button class="pe-close" title="?リ린">??/button>
      </div>
      <p class="pe-hint">?ы븿???뱀뀡???좏깮?섍퀬 ?쒖꽌瑜?議곗젙?섏꽭??/p>
      <ul class="pe-list">${rows}</ul>
      <div class="pe-footer">
        <button class="pe-cancel">痍⑥냼</button>
        <button class="pe-print-btn">??nbsp; ?몄뇙</button>
      </div>
    </div>`;
}

// ?? Editor events ?????????????????????????????????????????????????????????????
function bindEditorEvents(overlay) {
  const list = overlay.querySelector('.pe-list');

  // Close
  overlay.querySelector('.pe-close').addEventListener('click', closePrintEditor);
  overlay.querySelector('.pe-cancel').addEventListener('click', closePrintEditor);
  overlay.addEventListener('click', e => { if (e.target === overlay) closePrintEditor(); });

  // Escape key
  const onKey = e => { if (e.key === 'Escape') { closePrintEditor(); document.removeEventListener('keydown', onKey); } };
  document.addEventListener('keydown', onKey);

  // Up / Down arrows
  list.addEventListener('click', e => {
    const btn = e.target.closest('.pe-arrow');
    if (!btn) return;
    const li = btn.closest('.pe-item');
    if (btn.classList.contains('pe-up')) {
      const prev = li.previousElementSibling;
      if (prev) list.insertBefore(li, prev);
    } else {
      const next = li.nextElementSibling;
      if (next) list.insertBefore(next, li);
    }
    refreshArrows(list);
  });

  // Dim row when unchecked
  list.addEventListener('change', e => {
    if (e.target.classList.contains('pe-check'))
      e.target.closest('.pe-item').classList.toggle('pe-off', !e.target.checked);
  });

  // Print
  overlay.querySelector('.pe-print-btn').addEventListener('click', () => {
    const selected = [...list.querySelectorAll('.pe-item')]
      .filter(li => li.querySelector('.pe-check').checked)
      .map(li => li.dataset.id);
    closePrintEditor();
    executePrint(selected);
  });

  refreshArrows(list);
}

function refreshArrows(list) {
  const items = [...list.querySelectorAll('.pe-item')];
  items.forEach((li, i) => {
    li.querySelector('.pe-up').disabled   = i === 0;
    li.querySelector('.pe-down').disabled = i === items.length - 1;
  });
}

// ?? Toast ?????????????????????????????????????????????????????????????????????
function setPrintToast(msg) {
  let el = document.getElementById('print-toast');
  if (!el) { el = document.createElement('div'); el.id = 'print-toast'; document.body.appendChild(el); }
  el.textContent = msg;
  el.classList.add('visible');
  return el;
}

// ?? Execute print ?????????????????????????????????????????????????????????????
async function executePrint(selectedIds) {
  const toast = setPrintToast('?ы듃?대━???앹꽦 以묅?);
  try {
    const projIds = selectedIds.filter(id => id.startsWith('project'));
    const bodyMap = {};
    await Promise.all(projIds.map(k =>
      fetch(projects[k].src).then(r => r.text())
        .then(html => { bodyMap[k] = html; })
        .catch(()  => { bodyMap[k] = '<p>?댁슜??遺덈윭?????놁뒿?덈떎.</p>'; })
    ));

    const htmlEl     = document.documentElement;
    const themeClass = htmlEl.classList.contains('read') ? 'read' :
                       htmlEl.classList.contains('light') ? 'light' : '';
    const cs = getComputedStyle(htmlEl);
    const v  = n => cs.getPropertyValue(n).trim();
    const vars = {
      '--bg': v('--bg'), '--bg-surface': v('--bg-surface'), '--bg-hover': v('--bg-hover'),
      '--border': v('--border'), '--text-1': v('--text-1'), '--text-2': v('--text-2'), '--accent': v('--accent'),
    };

    const base = window.location.origin +
      window.location.pathname.replace(/\/[^/]*$/, '').replace(/\/$/, '');

    // History: grab only the grid + cert columns (avoid snap-section wrappers)
    const historyGrid = document.querySelector('.history-grid');
    const historyHTML = historyGrid ? historyGrid.outerHTML : '';

    toast.textContent = '?꾨┛??李??닿린 以묅?;
    const win = window.open('', '_blank');
    if (!win) {
      setPrintToast('?앹뾽??李⑤떒?섏뿀?듬땲?? ?앹뾽 ?덉슜 ???ㅼ떆 ?쒕룄?섏꽭??');
      setTimeout(() => toast.classList.remove('visible'), 3000);
      return;
    }

    win.document.write(buildPrintDoc({ selectedIds, bodyMap, themeClass, vars, base, historyHTML }));
    win.document.close();
    win.focus();
    setTimeout(() => { win.print(); toast.classList.remove('visible'); }, 800);
  } catch (err) {
    console.error(err);
    setPrintToast('?ㅻ쪟媛 諛쒖깮?덉뒿?덈떎.');
    setTimeout(() => toast.classList.remove('visible'), 3000);
  }
}

// ?? Build print document ?????????????????????????????????????????????????????
function buildPrintDoc({ selectedIds, bodyMap, themeClass, vars, base, historyHTML }) {
  const varsCss = Object.entries(vars).map(([k, v]) => `  ${k}: ${v};`).join('\n');

  // TOC ??only from selected project IDs in order
  const selectedProjects = selectedIds.filter(id => id.startsWith('project'));
  const tocItems = selectedProjects.map(k =>
    `<li><a href="#proj-${k}">${projects[k].title}</a><span class="toc-date">${projects[k].date}</span></li>`
  ).join('');

  // Sections in selected order
  const sections = selectedIds.map(id => {
    if (id === 'header') return `
<div class="print-header">
  <div class="print-name">源?깊썕</div>
  <div class="print-contacts">
    <span>maybecold@naver.com</span>
    <span>blog.naver.com/maybecold</span>
    <span>github.com/fridec13</span>
  </div>
</div>`;

    if (id === 'history') return `
<div class="print-history">
  <div class="section-label">History &amp; Education</div>
  ${historyHTML}
</div>`;

    if (id.startsWith('project')) {
      const p      = projects[id];
      const tagHtml = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
      const body   = fixPrintPaths(bodyMap[id] || '', base);
      return `
<section class="print-project" id="proj-${id}">
  <div class="proj-header">
    <h2 class="proj-title">${p.title}</h2>
    <span class="proj-date">${p.date}</span>
    <div class="article-tags">${tagHtml}</div>
    <p class="article-overview">${p.overview}</p>
  </div>
  <div class="article-body">${body}</div>
</section>`;
    }
    return '';
  }).join('\n');

  return `<!DOCTYPE html>
<html lang="ko"${themeClass ? ` class="${themeClass}"` : ''}>
<head>
<meta charset="UTF-8">
<title>源?깊썕 ?ы듃?대━??/title>
<style>
:root {
${varsCss}
}
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: var(--bg); color: var(--text-1); font-size: 13.5px; line-height: 1.75; }
a { color: var(--accent); text-decoration: none; }

/* Header */
.print-header { padding: 2.5rem 3rem 1.8rem; border-bottom: 2px solid var(--accent); }
.print-name { font-size: 2rem; font-weight: 800; letter-spacing: -0.02em; color: var(--text-1); }
.print-contacts { margin-top: 0.5rem; display: flex; gap: 1.5rem; font-size: 0.82rem; color: var(--text-2); }

/* Section label */
.section-label { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.14em; text-transform: uppercase; color: var(--accent); padding-bottom: 0.5rem; border-bottom: 1px solid var(--border); margin-bottom: 1.5rem; }

/* History */
.print-history { padding: 2rem 3rem; }
.history-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 2rem 4rem; width: 100%; }
.timeline { display: flex; flex-direction: column; }
.timeline-item { display: grid; grid-template-columns: 80px 1fr; gap: 0 1rem; position: relative; padding-bottom: 1.4rem; }
.timeline-item:last-child { padding-bottom: 0; }
.timeline-item::before { content: ''; position: absolute; left: 80px; top: 6px; bottom: 0; width: 1px; background: var(--border); }
.timeline-item:last-child::before { display: none; }
.tl-year { font-size: 0.7rem; font-weight: 600; color: var(--text-2); text-align: right; padding-top: 2px; }
.tl-body { padding-left: 1.2rem; position: relative; }
.tl-body::before { content: ''; position: absolute; left: -4px; top: 7px; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); }
.tl-title { font-size: 0.88rem; font-weight: 600; color: var(--text-1); margin-bottom: 0.2rem; }
.tl-sub   { font-size: 0.76rem; color: var(--text-2); line-height: 1.5; }
.cert-col { display: flex; flex-direction: column; gap: 1.4rem; }
.cert-group-title { font-size: 0.68rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-2); margin-bottom: 0.6rem; }
.cert-items { display: flex; flex-direction: column; gap: 0.4rem; }
.cert-item { display: flex; align-items: center; gap: 0.6rem; font-size: 0.85rem; color: var(--text-1); }
.cert-item::before { content: ''; width: 4px; height: 4px; border-radius: 50%; background: var(--accent); flex-shrink: 0; }
.award-item { background: var(--bg-surface); border: 1px solid var(--border); border-left: 3px solid var(--accent); border-radius: 6px; padding: 0.6rem 0.9rem; font-size: 0.8rem; line-height: 1.5; color: var(--text-2); }
.award-item strong { color: var(--text-1); display: block; margin-bottom: 0.15rem; }

/* TOC */
.print-toc { padding: 2rem 3rem; border-top: 1px solid var(--border); }
.print-toc ol { padding-left: 1.5rem; }
.print-toc li { padding: 0.3rem 0; font-size: 0.9rem; color: var(--text-1); }
.toc-date { color: var(--text-2); font-size: 0.78em; margin-left: 0.75rem; }

/* Project */
.print-project { padding: 2.5rem 3rem; border-top: 1px solid var(--border); }
.proj-header { margin-bottom: 1.5rem; }
.proj-title { font-size: 1.35rem; font-weight: 800; color: var(--text-1); margin-bottom: 0.2rem; }
.proj-date  { font-size: 0.78rem; color: var(--text-2); }
.article-tags { display: flex; flex-wrap: wrap; gap: 0.3rem; margin: 0.7rem 0; }
.tag { padding: 0.15rem 0.55rem; border: 1px solid var(--border); border-radius: 999px; font-size: 0.69rem; color: var(--text-2); }
.article-overview { font-size: 0.88rem; color: var(--text-2); line-height: 1.75; }

/* Article body */
.article-body { font-size: 0.86rem; }
.article-body h2 { font-size: 1.05rem; font-weight: 700; color: var(--text-1); margin: 2rem 0 0.6rem; }
.article-body h3 { font-size: 0.92rem; font-weight: 600; color: var(--text-1); margin: 1.2rem 0 0.35rem; }
.article-body p  { color: var(--text-2); line-height: 1.85; margin-bottom: 0.65rem; }
.article-body ul, .article-body ol { padding-left: 1.4rem; color: var(--text-2); margin-bottom: 0.65rem; }
.article-body li { margin-bottom: 0.18rem; }
.article-body strong { color: var(--text-1); font-weight: 600; }
.article-body hr { border: none; border-top: 1px solid var(--border); margin: 1.6rem 0; }
.article-body table { width: 100%; border-collapse: collapse; font-size: 0.8rem; margin: 0.9rem 0; }
.article-body th, .article-body td { border: 1px solid var(--border); padding: 0.35rem 0.55rem; }
.article-body th { background: var(--bg-surface); font-weight: 600; color: var(--text-1); }
.article-body td { color: var(--text-2); }
.article-body pre { background: var(--bg-surface); border: 1px solid var(--border); border-radius: 6px; padding: 0.9rem 1rem; font-size: 0.76rem; line-height: 1.6; margin: 0.8rem 0; white-space: pre-wrap; word-break: break-all; }
.article-body code { font-family: 'Fira Code','Consolas',monospace; }
.article-body :not(pre) > code { background: var(--bg-surface); border: 1px solid var(--border); border-radius: 3px; padding: 0.1rem 0.3rem; font-size: 0.79rem; color: var(--text-1); }
.article-body figure { margin: 1rem 0; }
.article-body img { max-width: 100%; border-radius: 6px; }
.article-body figcaption { font-size: 0.75rem; color: var(--text-2); margin-top: 0.25rem; text-align: center; }
.metric-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 0.6rem; margin: 0.9rem 0; }
.metric-card { background: var(--bg-surface); border: 1px solid var(--border); border-radius: 6px; padding: 0.6rem; text-align: center; }
.metric-value { display: block; font-size: 1.3rem; font-weight: 800; color: var(--accent); }
.metric-label { display: block; font-size: 0.67rem; color: var(--text-2); margin-top: 0.15rem; }
.mermaid { background: var(--bg-surface); border: 1px solid var(--border); border-radius: 6px; padding: 0.7rem 1rem; font-size: 0.75rem; font-family: monospace; color: var(--text-2); white-space: pre; margin: 0.8rem 0; }
.mermaid svg { display: none; }

/* Read mode */
html.read .tag { border-color: transparent; font-weight: 600; }
html.read .article-tags .tag:nth-child(6n+1){background:#fee2e2;color:#991b1b}
html.read .article-tags .tag:nth-child(6n+2){background:#fef3c7;color:#92400e}
html.read .article-tags .tag:nth-child(6n+3){background:#dcfce7;color:#166534}
html.read .article-tags .tag:nth-child(6n+4){background:#dbeafe;color:#1e40af}
html.read .article-tags .tag:nth-child(6n+5){background:#f3e8ff;color:#6b21a8}
html.read .article-tags .tag:nth-child(6n+6){background:#ccfbf1;color:#0f766e}
html.read .article-body p,
html.read .article-body ul li,
html.read .article-body ol li { color: var(--text-1); }
html.read .article-overview { color: var(--text-1); }

@media print {
  body { background: var(--bg) !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  .print-project { page-break-before: always; }
}
</style>
</head>
<body>
${sections}
</body>
</html>`;
}

function fixPrintPaths(html, base) {
  return html
    .replace(/src="assets\//g,  `src="${base}/assets/`)
    .replace(/href="assets\//g, `href="${base}/assets/`);
}

