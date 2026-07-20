(() => {
  'use strict';

  const projects = [
    {
      id: 'financial',
      title: 'Financial Reporting, Capital & Variance Analysis',
      category: 'Financial analysis · Independent case study',
      context: 'Independent case study using Goldman Sachs public filings',
      summary: 'A control-minded financial analysis workflow that turns annual and quarterly filing data into a structured Excel model and an executive-ready management dashboard.',
      facts: [
        ['Analysis scope', 'Annual + quarterly filings'],
        ['Comparison views', 'QoQ + YoY'],
        ['Core discipline', 'Reconciliation + controls']
      ],
      overview: 'This independent case study examined publicly available annual and quarterly filings to evaluate revenue, earnings, expenses, assets, shareholders’ equity, risk-weighted assets, CET1 ratios and business-segment performance. The work was designed as evidence of financial analysis, reporting discipline and control-aware communication—not as sponsored or commissioned work.',
      objective: 'Build a dependable reporting process that could compare periods, surface performance and capital changes, and preserve a clear line back to source disclosures. The central challenge was not simply displaying figures; it was keeping reporting periods, units, source references and calculation logic consistent enough that the output could be trusted.',
      role: 'As the independent analyst, I structured the source data, developed the Excel financial model, designed the management dashboard and defined validation checks across the workflow. I also shaped the presentation around questions a management audience would ask: what changed, where it changed and whether the underlying numbers reconcile.',
      approach: [
        'Reviewed annual and quarterly public filings and organized financial measures by reporting period and source.',
        'Modeled revenue, earnings, expenses, balance-sheet measures, capital measures and business-segment performance in Excel.',
        'Built quarter-over-quarter and year-over-year variance views for management-oriented analysis.',
        'Added checks for reporting period alignment, unit consistency, duplicate records, source accuracy and balance-sheet integrity.',
        'Reconciled model outputs to official filings before surfacing them in the dashboard.'
      ],
      result: 'The finished case study connected financial modeling and dashboard design with a documented control layer. It demonstrates an ability to move from public disclosure to structured analysis while preserving traceability, risk awareness and executive-ready communication.',
      stack: ['Excel', 'PivotTables', 'XLOOKUP / VLOOKUP', 'SUMIFS', 'INDEX / MATCH', 'Financial modeling', 'Variance analysis', 'Data reconciliation', 'Validation controls'],
      demonstrates: ['Financial analysis', 'Reporting discipline', 'Risk awareness', 'Control design', 'Data reliability', 'Executive-ready communication'],
      visual: 'finance'
    },
    {
      id: 'miteg',
      title: 'MITEG Predictive Oncology Research',
      category: 'Predictive research · UT Dallas industry capstone',
      context: 'Four-person capstone · August–December 2025',
      summary: 'Predictive research on breast-cancer data focused on classification reliability, threshold decisions and the tradeoff between sensitivity and false negatives.',
      facts: [
        ['Research data', '1,082 samples · 13 biomarkers'],
        ['Sensitivity', '61.7% → 78.7%'],
        ['Strongest AUROC', '0.682']
      ],
      overview: 'The UT Dallas industry capstone used the TCGA-BRCA genomic dataset to study predictive classification across 1,082 breast-cancer samples and 13 biomarker features. It was a research and analytical decision-support project, not a deployed clinical diagnostic system.',
      objective: 'Evaluate multiple classification approaches while treating false-negative tradeoffs as a first-class analytical decision. The work needed to test generalization, compare models consistently and explain why a threshold choice could matter as much as a headline score.',
      role: 'I led the analytical workstream within a four-person team. My work covered model evaluation, class balancing, cross-validation, hyperparameter search, threshold analysis and the communication of methodology and risk tradeoffs to company leadership.',
      approach: [
        'Prepared 1,082 patient samples across 13 biomarker features for classification analysis.',
        'Compared multiple classification models in Python using scikit-learn.',
        'Applied SMOTE to address class imbalance and five-fold cross-validation to assess generalization.',
        'Used grid search for model tuning and evaluated error profiles across thresholds.',
        'Adjusted the decision threshold to study sensitivity and false-negative tradeoffs.',
        'Presented methodology, findings and biomarker insights to company leadership.'
      ],
      result: 'Sensitivity improved from 61.7% to 78.7% through threshold analysis, while Random Forest achieved the strongest AUROC of 0.682. The project demonstrates evaluation discipline and the ability to frame model performance around the decision risk it supports.',
      stack: ['Python', 'scikit-learn', 'Pandas', 'NumPy', 'SMOTE', 'Five-fold cross-validation', 'Grid search', 'Threshold optimization', 'Classification'],
      demonstrates: ['Analytical leadership', 'Model evaluation', 'Risk tradeoff analysis', 'Research communication', 'Cross-functional presentation'],
      visual: 'miteg'
    },
    {
      id: 'rainline',
      title: 'Rainline AI Irrigation Assistant',
      category: 'Decision product · Serverless cloud system',
      context: 'Project Lead · December 2025–March 2026',
      summary: 'A location-aware irrigation decision product combining validated field inputs, rules-based safeguards, weather context and AI-generated explanations.',
      facts: [
        ['Recognition', 'AWS 10,000 AIdeas Semi-Finalist'],
        ['Architecture', 'Full-stack + serverless'],
        ['Decision model', 'Rules + AI explanation']
      ],
      overview: 'Rainline converted crop, soil, growth-stage, irrigation-history and weather inputs into field-specific watering recommendations. The product paired a practical recommendation workflow with a technically sophisticated serverless architecture.',
      objective: 'Give nontechnical users a recommendation they could understand while preserving deterministic safeguards and a useful record of prior outputs. The product also needed feedback and data-quality workflows so questionable inputs or outputs could be identified over time.',
      role: 'As project lead, I guided the system from decision logic through the user-facing workflow. I built and coordinated the full-stack architecture, API interactions, recommendation logic, AI explanations, history storage and feedback capture.',
      approach: [
        'Collected location, crop type, soil type, growth stage, irrigation history and weather context as recommendation inputs.',
        'Validated inputs before passing them into the decision workflow.',
        'Combined rule-based agricultural calculations and safeguards with contextual recommendation logic.',
        'Used Amazon Bedrock to translate technical output into an explanation for nontechnical users.',
        'Created REST API endpoints for input processing, recommendation retrieval, history storage and user feedback.',
        'Designed recommendation-history and feedback workflows to surface data-quality issues and inform future outputs.'
      ],
      result: 'The project delivered a full-stack serverless decision system and earned AWS 10,000 AIdeas National Semi-Finalist recognition. It demonstrates product thinking, cloud engineering and the ability to place AI inside a governed decision workflow.',
      stack: ['React', 'TypeScript', 'Node.js', 'REST APIs', 'AWS Lambda', 'DynamoDB', 'API Gateway', 'Amazon Bedrock', 'S3', 'CloudFront', 'AWS CDK'],
      demonstrates: ['Product leadership', 'Decision-system design', 'Cloud architecture', 'Data-quality workflows', 'Business-to-technical translation'],
      visual: 'rainline'
    },
    {
      id: 'patient',
      title: 'Patient-Link Clinic Management System',
      category: 'Operational system · Relational database',
      context: 'Five-person team · June–August 2025',
      summary: 'A PHP and MySQL clinic-management system with separate patient, receptionist and doctor interfaces built on normalized relational design.',
      facts: [
        ['Team', 'Five members'],
        ['Data design', 'Third Normal Form'],
        ['Interfaces', 'Patient · Receptionist · Doctor']
      ],
      overview: 'Patient-Link organized core clinic workflows across appointments, billing records and role-specific interfaces. The project connected database design choices to the day-to-day operational needs of patients, receptionists and doctors.',
      objective: 'Create a structured clinic system that separated responsibilities by user role while keeping operational records organized and consistent. The database needed clear entity relationships, normalized tables and practical create, read, update and delete workflows.',
      role: 'I led a five-member team and designed the entity-relationship model, relational schema, functional dependencies and Third Normal Form table structure. I also guided development of role-based functionality across the three interfaces.',
      approach: [
        'Mapped doctors, patients, appointments and billing records into an entity-relationship model.',
        'Defined functional dependencies and translated the model into a relational schema.',
        'Normalized database tables to Third Normal Form to improve organization and reduce inconsistency.',
        'Developed separate patient, receptionist and doctor interfaces.',
        'Implemented role-based CRUD workflows around the operational responsibilities of each user group.'
      ],
      result: 'The project produced a working clinic-management system that demonstrates relational modeling, team leadership and an ability to connect database structure with operational workflow improvement.',
      stack: ['PHP', 'MySQL', 'HTML / CSS', 'Entity-relationship modeling', 'Relational schema design', 'Functional dependencies', 'Third Normal Form', 'CRUD'],
      demonstrates: ['Team leadership', 'Database design', 'Requirements translation', 'Role-based workflows', 'Operational process thinking'],
      visual: 'patient'
    }
  ];

  const byId = (id) => document.getElementById(id);
  const root = document.documentElement;
  const body = document.body;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)');

  const header = document.querySelector('.site-header');
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = byId('nav-links');
  const resumeMenu = document.querySelector('.resume-menu');
  const themeButton = byId('theme-control');
  const themeName = themeButton.querySelector('.theme-name');
  const themeWash = document.querySelector('.theme-wash');
  const themeMeta = document.querySelector('meta[name="theme-color"]');

  function applyTheme(theme, persist = true) {
    const arctic = theme === 'arctic';
    root.dataset.theme = arctic ? 'arctic' : 'singularity';
    themeName.textContent = arctic ? 'Arctic Signal' : 'Singularity';
    themeButton.setAttribute('aria-label', arctic ? 'Switch to Singularity theme' : 'Switch to Arctic Signal theme');
    themeMeta.setAttribute('content', arctic ? '#061018' : '#050510');
    if (persist) {
      try { localStorage.setItem('sb-theme', root.dataset.theme); } catch (error) {}
    }
  }

  applyTheme(root.dataset.theme, false);

  themeButton.addEventListener('click', () => {
    const nextTheme = root.dataset.theme === 'arctic' ? 'singularity' : 'arctic';
    const rect = themeButton.getBoundingClientRect();
    const x = `${rect.left + rect.width / 2}px`;
    const y = `${rect.top + rect.height / 2}px`;
    themeWash.style.setProperty('--wash-x', x);
    themeWash.style.setProperty('--wash-y', y);

    if (reducedMotion.matches) {
      applyTheme(nextTheme);
      return;
    }

    themeWash.classList.remove('is-active');
    void themeWash.offsetWidth;
    themeWash.classList.add('is-active');
    window.setTimeout(() => applyTheme(nextTheme), 125);
    window.setTimeout(() => themeWash.classList.remove('is-active'), 600);
  });

  function setMenu(open) {
    header.classList.toggle('menu-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.querySelector('.sr-only').textContent = open ? 'Close navigation' : 'Open navigation';
  }

  navToggle.addEventListener('click', () => setMenu(!header.classList.contains('menu-open')));

  navLinks.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenu(false);
  });

  document.addEventListener('pointerdown', (event) => {
    if (header.classList.contains('menu-open') && !event.target.closest('.nav-shell')) setMenu(false);
    if (resumeMenu.open && !event.target.closest('.resume-menu')) resumeMenu.open = false;
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && header.classList.contains('menu-open')) {
      setMenu(false);
      navToggle.focus();
    }
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 900) setMenu(false);
  }, { passive: true });

  let scrollFrame = 0;
  function updateHeader() {
    header.classList.toggle('is-scrolled', window.scrollY > 24);
    scrollFrame = 0;
  }

  window.addEventListener('scroll', () => {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(updateHeader);
  }, { passive: true });
  updateHeader();

  const sections = [...document.querySelectorAll('main section[id]')];
  const sectionLinks = [...document.querySelectorAll('.nav-links > a[href^="#"]')];
  const activeSections = new Map();

  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => activeSections.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0));
      const active = [...activeSections.entries()].sort((a, b) => b[1] - a[1])[0];
      if (!active || active[1] <= 0) return;
      sectionLinks.forEach((link) => {
        const selected = link.getAttribute('href') === `#${active[0]}`;
        link.classList.toggle('is-active', selected);
        if (selected) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }, { rootMargin: '-22% 0px -58% 0px', threshold: [0, .15, .35, .6] });
    sections.forEach((section) => sectionObserver.observe(section));
  }

  const revealItems = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || reducedMotion.matches) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: .08 });
    revealItems.forEach((item) => revealObserver.observe(item));
  }

  function formatNumber(value, decimals) {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(value);
  }

  const counters = document.querySelectorAll('[data-counter]');
  function runCounter(element) {
    if (element.dataset.counted === 'true') return;
    element.dataset.counted = 'true';
    const target = Number(element.dataset.counter);
    const decimals = Number(element.dataset.decimals || 0);
    if (reducedMotion.matches) {
      element.textContent = formatNumber(target, decimals);
      return;
    }

    const duration = 900;
    const startTime = performance.now();
    const startValue = target > 100 ? target * .86 : target * .72;

    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = startValue + (target - startValue) * eased;
      element.textContent = formatNumber(current, decimals);
      if (progress < 1 && !document.hidden) requestAnimationFrame(tick);
      else element.textContent = formatNumber(target, decimals);
    }
    requestAnimationFrame(tick);
  }

  if ('IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        runCounter(entry.target);
        observer.unobserve(entry.target);
      });
    }, { threshold: .7 });
    counters.forEach((counter) => counterObserver.observe(counter));
  } else {
    counters.forEach(runCounter);
  }

  const heroVisual = byId('hero-visual');
  if (canHover.matches && !reducedMotion.matches) {
    let heroPointerFrame = 0;
    heroVisual.addEventListener('pointermove', (event) => {
      if (heroPointerFrame) cancelAnimationFrame(heroPointerFrame);
      heroPointerFrame = requestAnimationFrame(() => {
        const rect = heroVisual.getBoundingClientRect();
        heroVisual.style.setProperty('--pointer-x', `${((event.clientX - rect.left) / rect.width) * 100}%`);
        heroVisual.style.setProperty('--pointer-y', `${((event.clientY - rect.top) / rect.height) * 100}%`);
      });
    });

    document.querySelectorAll('[data-project-card]').forEach((card) => {
      let cardFrame = 0;
      card.addEventListener('pointermove', (event) => {
        if (cardFrame) cancelAnimationFrame(cardFrame);
        cardFrame = requestAnimationFrame(() => {
          const rect = card.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width;
          const y = (event.clientY - rect.top) / rect.height;
          card.style.setProperty('--spot-x', `${x * 100}%`);
          card.style.setProperty('--spot-y', `${y * 100}%`);
          card.style.setProperty('--tilt-x', `${(0.5 - y) * 1.1}deg`);
          card.style.setProperty('--tilt-y', `${(x - 0.5) * 1.1}deg`);
        });
      });
      card.addEventListener('pointerleave', () => {
        card.style.setProperty('--tilt-x', '0deg');
        card.style.setProperty('--tilt-y', '0deg');
      });
    });
  }

  window.requestAnimationFrame(() => document.querySelector('.hero').classList.add('is-ready'));

  const visualTemplates = {
    finance: () => `
      <div class="case-visual visual-finance" aria-label="Financial dashboard visual with trend lines and reporting controls">
        <div class="visual-panel">
          <div class="visual-panel-head"><span>Financial performance & capital</span><i>Reconciled</i></div>
          <svg viewBox="0 0 420 190" role="img" aria-label="Neutral revenue and expense trend visualization">
            <defs><linearGradient id="caseFinanceFill" x1="0" x2="0" y1="0" y2="1"><stop stop-color="var(--accent-blue)" stop-opacity=".28"/><stop offset="1" stop-color="var(--accent-blue)" stop-opacity="0"/></linearGradient></defs>
            <path class="preview-grid-line" d="M0 35h420M0 90h420M0 145h420"/>
            <path fill="url(#caseFinanceFill)" d="M0 153C43 146 72 116 114 122s65-40 104-22 69-8 103-25 58-13 99-51v166H0Z"/>
            <path class="preview-line" d="M0 153C43 146 72 116 114 122s65-40 104-22 69-8 103-25 58-13 99-51"/>
            <path class="preview-line-secondary" d="M0 128c42-5 76-19 117-15s65-16 107-4 66-9 105-7 59-13 91-22"/>
          </svg>
          <div class="visual-controls"><span>Source accuracy</span><span>Reporting periods</span><span>Unit consistency</span><span>Balance-sheet integrity</span></div>
        </div>
      </div>`,
    miteg: () => `
      <div class="case-visual visual-miteg" aria-label="Model threshold and validation-stage visual">
        <div class="threshold-visual">
          <div class="threshold-labels"><span>Lower threshold / higher sensitivity</span><span>Risk-balanced selection</span></div>
          <div class="threshold-line"></div>
          <div class="threshold-metrics"><div><span>Baseline sensitivity</span><strong>61.7%</strong></div><div><span>Optimized sensitivity</span><strong>78.7%</strong></div><div><span>Strongest AUROC</span><strong>0.682</strong></div></div>
          <div class="validation-rail"><span>SMOTE</span><i></i><span>5-fold CV</span><i></i><span>Grid search</span><i></i><span>Threshold</span></div>
        </div>
      </div>`,
    rainline: () => `
      <div class="case-visual visual-rainline" aria-label="Irrigation recommendation-system workflow">
        <div class="system-flow">
          <div class="flow-row"><span class="flow-node">Inputs</span><i class="flow-arrow"></i><span class="flow-node">Validation</span><i class="flow-arrow"></i><span class="flow-node emphasis">Rules Engine</span><i class="flow-arrow"></i><span class="flow-node">AI Explanation</span></div>
          <div class="flow-output"><span>Decision output</span><strong>Field recommendation</strong><small>Recommendation → History → User feedback</small></div>
        </div>
      </div>`,
    patient: () => `
      <div class="case-visual visual-patient" aria-label="Relational database and clinic-workflow visual">
        <div class="relational-visual">
          <svg viewBox="0 0 420 360" aria-hidden="true"><path d="M80 65 210 180 340 65M80 295l130-115 130 115M80 65v230M340 65v230"/></svg>
          <span class="rel-node a">Patients<small>Role interface</small></span>
          <span class="rel-node b">Doctors<small>Role interface</small></span>
          <span class="rel-node c">Appointments<small>Normalized workflow</small></span>
          <span class="rel-node d">Reception<small>Role interface</small></span>
          <span class="rel-node e">Billing<small>Records</small></span>
        </div>
      </div>`
  };

  const overlay = byId('case-overlay');
  const caseContent = byId('case-content');
  const caseScroll = byId('case-scroll');
  const closeButton = overlay.querySelector('.case-close');
  const previousLabel = byId('previous-project');
  const nextLabel = byId('next-project');
  const caseCount = byId('case-count');
  const inertTargets = document.querySelectorAll('[data-inert-target]');
  let currentProjectIndex = 0;
  let projectOpener = null;
  let closeTimer = 0;

  function listMarkup(items, className) {
    return `<ul class="${className}">${items.map((item) => `<li>${item}</li>`).join('')}</ul>`;
  }

  function renderProject(index, moveFocus = false) {
    currentProjectIndex = (index + projects.length) % projects.length;
    const project = projects[currentProjectIndex];
    const previous = projects[(currentProjectIndex - 1 + projects.length) % projects.length];
    const next = projects[(currentProjectIndex + 1) % projects.length];

    caseCount.textContent = `${String(currentProjectIndex + 1).padStart(2, '0')} / ${String(projects.length).padStart(2, '0')}`;
    previousLabel.textContent = previous.title;
    nextLabel.textContent = next.title;

    caseContent.innerHTML = `
      <div class="case-hero">
        <div>
          <p class="case-category">${project.category}</p>
          <h2 id="case-title" tabindex="-1">${project.title}</h2>
          <p class="case-context">${project.context}</p>
          <p class="case-summary">${project.summary}</p>
          <div class="case-facts">${project.facts.map(([label, value]) => `<div class="case-fact"><span>${label}</span><strong>${value}</strong></div>`).join('')}</div>
        </div>
        ${visualTemplates[project.visual]()}
      </div>
      <div class="case-detail-grid">
        <aside class="case-detail-nav" aria-label="Case study contents"><p>Case study</p><ol><li>Overview</li><li>Objective</li><li>My role</li><li>Approach & methods</li><li>Outcome</li><li>Technology</li><li>Demonstrates</li></ol></aside>
        <div class="case-sections">
          <section class="case-section-block"><span>01 / Overview</span><h3>Context and scope</h3><p>${project.overview}</p></section>
          <section class="case-section-block"><span>02 / Objective</span><h3>The question behind the work</h3><p>${project.objective}</p></section>
          <section class="case-section-block"><span>03 / My role</span><h3>Ownership within the project</h3><p>${project.role}</p></section>
          <section class="case-section-block"><span>04 / Approach & methods</span><h3>A structured path from inputs to insight</h3>${listMarkup(project.approach, 'case-bullets')}</section>
          <section class="case-section-block"><span>05 / Key result</span><h3>Outcome</h3><p>${project.result}</p></section>
          <section class="case-section-block"><span>06 / Technology stack</span><h3>Tools used</h3>${listMarkup(project.stack, 'case-stack')}</section>
          <section class="case-section-block"><span>07 / What it demonstrates</span><h3>Evidence beyond the deliverable</h3>${listMarkup(project.demonstrates, 'case-stack')}</section>
        </div>
      </div>`;

    caseScroll.scrollTop = 0;
    if (moveFocus) requestAnimationFrame(() => byId('case-title').focus());
  }

  function setBackgroundInert(value) {
    inertTargets.forEach((element) => { element.inert = value; });
  }

  function openProject(projectId, opener) {
    window.clearTimeout(closeTimer);
    projectOpener = opener;
    const index = projects.findIndex((project) => project.id === projectId);
    renderProject(index < 0 ? 0 : index);
    overlay.hidden = false;
    setBackgroundInert(true);
    body.classList.add('modal-open');
    requestAnimationFrame(() => {
      overlay.classList.add('is-open');
      requestAnimationFrame(() => closeButton.focus());
    });
  }

  function closeProject() {
    if (overlay.hidden) return;
    overlay.classList.remove('is-open');
    const delay = reducedMotion.matches ? 0 : 220;
    closeTimer = window.setTimeout(() => {
      overlay.hidden = true;
      caseContent.innerHTML = '';
      body.classList.remove('modal-open');
      setBackgroundInert(false);
      if (projectOpener && document.contains(projectOpener)) projectOpener.focus();
      projectOpener = null;
    }, delay);
  }

  document.querySelectorAll('[data-project]').forEach((button) => {
    button.addEventListener('click', () => openProject(button.dataset.project, button));
  });

  closeButton.addEventListener('click', closeProject);
  overlay.querySelectorAll('[data-case-direction]').forEach((button) => {
    button.addEventListener('click', () => {
      const direction = button.dataset.caseDirection === 'next' ? 1 : -1;
      renderProject(currentProjectIndex + direction, true);
    });
  });

  overlay.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      event.preventDefault();
      closeProject();
      return;
    }

    if (event.key !== 'Tab') return;
    const focusable = [...overlay.querySelectorAll('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])')]
      .filter((element) => !element.hidden && element.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  const copyButton = document.querySelector('.copy-email');
  const copyToast = document.querySelector('.copy-toast');
  let toastTimer = 0;

  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.setAttribute('readonly', '');
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    body.appendChild(textArea);
    textArea.select();
    const copied = document.execCommand('copy');
    textArea.remove();
    if (!copied) throw new Error('Copy unavailable');
  }

  copyButton.addEventListener('click', async () => {
    try {
      await copyText(copyButton.dataset.email);
      copyToast.textContent = 'Email copied to clipboard';
      copyButton.innerHTML = '<span aria-hidden="true">✓</span> Copied';
    } catch (error) {
      copyToast.textContent = 'Copy unavailable — use the email link';
    }
    window.clearTimeout(toastTimer);
    copyToast.classList.add('is-visible');
    toastTimer = window.setTimeout(() => {
      copyToast.classList.remove('is-visible');
      copyButton.innerHTML = '<span aria-hidden="true">⧉</span> Copy email';
    }, 2200);
  });

  byId('current-year').textContent = new Date().getFullYear();
})();
