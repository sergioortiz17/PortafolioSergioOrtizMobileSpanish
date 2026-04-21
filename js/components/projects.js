const projectCard = ({ type, title, description, tech }) => `
  <div class="project-card fade-in">
    <p class="project-type">${type}</p>
    <h3 class="project-title">${title}</h3>
    <p class="project-desc">${description}</p>
    <div class="project-footer">
      <div class="project-tech">
        ${tech.map((t) => `<span class="tech-pill">${t}</span>`).join('')}
      </div>
    </div>
  </div>
`;

export const render = (container, { projects }) => {
  container.innerHTML = `
    <div class="container">
      <p class="section-label fade-in">// selected work</p>
      <h2 class="section-title fade-in">Projects &amp; <span>contributions</span></h2>
      <p class="section-desc fade-in">A selection of work spanning DevOps, QA, and mobile development.</p>
      <div class="projects-grid">
        ${projects.map(projectCard).join('')}
      </div>
    </div>
  `;
};
