const INFINITY_SVG = `
<svg class="devops-infinity" viewBox="-40 -32 580 324" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" overflow="visible">
  <defs>
    <linearGradient id="infGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   stop-color="#7c3aed"/>
      <stop offset="50%"  stop-color="#2563eb"/>
      <stop offset="100%" stop-color="#06b6d4"/>
    </linearGradient>
    <filter id="dotGlow" x="-100%" y="-100%" width="300%" height="300%">
      <feGaussianBlur stdDeviation="8" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="pathGlow" x="-40%" y="-100%" width="180%" height="300%">
      <feGaussianBlur stdDeviation="10" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <filter id="lblGlow" x="-80%" y="-80%" width="260%" height="260%">
      <feGaussianBlur stdDeviation="5" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
    <style>
      .stage-lbl {
        font-family: 'JetBrains Mono', monospace;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 2px;
        text-anchor: middle;
        fill: #c4b5fd;
        stroke: #1e0a3c;
        stroke-width: 3px;
        paint-order: stroke fill;
        filter: url(#lblGlow);
      }
      /* Peak at 50% of each 10s cycle — delays sync with the main dot (begin=0s)
         Formula: delay = peakTime - 5s  (negative = already in progress at t=0)
         MONITOR t=0s  → -5s   PLAN t=1.25s → -3.75s
         CODE    t=2.5s → -2.5s  BUILD t=3.75s → -1.25s
         TEST    t=5s  → 0s   RELEASE t=6.25s → -8.75s
         DEPLOY  t=7.5s → -7.5s  OPERATE t=8.75s → -6.25s */
      @keyframes lblPulse {
        0%, 42%, 58%, 100% { opacity: 0.35; }
        50%                 { opacity: 1;    }
      }
      .lbl-monitor { animation: lblPulse 10s linear -5s    infinite; }
      .lbl-plan    { animation: lblPulse 10s linear -3.75s infinite; }
      .lbl-code    { animation: lblPulse 10s linear -2.5s  infinite; }
      .lbl-build   { animation: lblPulse 10s linear -1.25s infinite; }
      .lbl-test    { animation: lblPulse 10s linear 0s     infinite; }
      .lbl-release { animation: lblPulse 10s linear -8.75s infinite; }
      .lbl-deploy  { animation: lblPulse 10s linear -7.5s  infinite; }
      .lbl-operate { animation: lblPulse 10s linear -6.25s infinite; }
    </style>
  </defs>

  <!-- Ghost path (faded background) -->
  <path
    d="M 250,130 C 320,45 460,45 460,130 C 460,215 320,215 250,130 C 180,45 40,45 40,130 C 40,215 180,215 250,130 Z"
    fill="none" stroke="rgba(124,58,237,0.08)" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"/>

  <!-- Animated draw path -->
  <path id="inf-path"
    d="M 250,130 C 320,45 460,45 460,130 C 460,215 320,215 250,130 C 180,45 40,45 40,130 C 40,215 180,215 250,130 Z"
    fill="none" stroke="url(#infGrad)" stroke-width="40" stroke-linecap="round" stroke-linejoin="round"
    filter="url(#pathGlow)"/>

  <!-- Stage labels — positioned outside the stroke edge (~20px from path center) -->
  <text class="stage-lbl lbl-monitor" x="192" y="158">MONITOR</text>
  <text class="stage-lbl lbl-plan"    x="390" y="18">PLAN</text>
  <text class="stage-lbl lbl-code"    x="492" y="134">CODE</text>
  <text class="stage-lbl lbl-build"   x="390" y="248">BUILD</text>
  <text class="stage-lbl lbl-test"    x="308" y="158">TEST</text>
  <text class="stage-lbl lbl-release" x="110" y="18">RELEASE</text>
  <text class="stage-lbl lbl-deploy"  x="8"   y="134">DEPLOY</text>
  <text class="stage-lbl lbl-operate" x="110" y="248">OPERATE</text>

  <!-- Trailing dot 3 (faintest) -->
  <circle r="5" fill="#2563eb" opacity="0.25">
    <animateMotion dur="10s" begin="-2s" repeatCount="indefinite">
      <mpath href="#inf-path"/>
    </animateMotion>
  </circle>

  <!-- Trailing dot 2 -->
  <circle r="9" fill="#7c3aed" opacity="0.45">
    <animateMotion dur="10s" begin="-1s" repeatCount="indefinite">
      <mpath href="#inf-path"/>
    </animateMotion>
  </circle>

  <!-- Main glowing dot -->
  <circle r="14" fill="#a78bfa" filter="url(#dotGlow)">
    <animateMotion dur="10s" repeatCount="indefinite">
      <mpath href="#inf-path"/>
    </animateMotion>
  </circle>
</svg>
`;

export const render = (container, { personal, heroTags }) => {
  container.innerHTML = `
    <div class="hero-bg">
      <div class="orb orb-1"></div>
      <div class="orb orb-2"></div>
      <div class="orb orb-3"></div>
    </div>
    <div class="hero-layout">
      <div class="hero-content">
        <h1 class="hero-name">${personal.name}</h1>
        <p class="hero-role">${personal.role}</p>
        <p class="hero-sub">${personal.bio}</p>
        <div class="hero-tags">
          ${heroTags.map((t) => `<span class="tag">${t}</span>`).join('')}
        </div>
        <div class="hero-actions">
          <a href="#contact" class="btn-primary">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Get in touch
          </a>
          <a href="about.html" class="btn-secondary">About me</a>
        </div>
      </div>
      <div class="hero-visual">
        ${INFINITY_SVG}
      </div>
    </div>
    <div class="scroll-indicator">
      <span>scroll</span>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9"/>
      </svg>
    </div>
  `;

  // Draw the infinity path on load
  const path = container.querySelector('#inf-path');
  if (path) {
    const len = Math.ceil(path.getTotalLength());
    path.style.strokeDasharray = `${len}`;
    path.style.strokeDashoffset = `${len}`;
    path.style.transition = 'stroke-dashoffset 3s ease 0.4s';
    requestAnimationFrame(() => requestAnimationFrame(() => {
      path.style.strokeDashoffset = '0';
    }));
  }
};
