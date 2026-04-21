const companyLogo = ({ logo, logoInitials, logoGradient, role }) => {
  if (logo) {
    return `
      <div class="company-logo">
        <img src="${logo}" alt="${logoInitials}" loading="lazy" />
      </div>`;
  }
  return `
    <div class="company-logo" style="background: ${logoGradient}" title="${role}">
      <span>${logoInitials}</span>
    </div>`;
};

const timelineItem = (item) => {
  const { period, role, company, tech, current,
          logo, logoInitials, logoGradient, description } = item;
  return `
    <div class="timeline-item ${current ? 'timeline-current' : ''} fade-in">
      <div class="timeline-dot"></div>
      <div class="timeline-header">
        ${companyLogo({ logo, logoInitials, logoGradient, role })}
        <div class="timeline-header-body">
          <div class="timeline-header-text">
            <p class="timeline-period">${period}</p>
            <h3 class="timeline-role">${role}</h3>
            <p class="timeline-company">${company}</p>
          </div>
          <div class="timeline-card">
            <p class="timeline-desc">${description}</p>
            <div class="timeline-tech">
              ${tech.map((t) => `<span class="tech-pill">${t}</span>`).join('')}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};

export const render = (container, { journey }) => {
  container.innerHTML = `
    <div class="container">
      <p class="section-label fade-in">// career journey</p>
      <h2 class="section-title fade-in">Work Experience: From code to <span>infrastructure</span></h2>
      <p class="section-desc fade-in">A path through mobile development, quality engineering, and now infrastructure &amp; DevOps.</p>
      <div class="timeline">
        ${journey.map(timelineItem).join('')}
      </div>
    </div>
  `;
};
