const skillCategory = ({ type, icon, title, subtitle, items }) => `
  <div class="skill-category ${type} fade-in">
    <div class="skill-cat-icon">${icon}</div>
    <h3 class="skill-cat-title">${title}</h3>
    <p class="skill-cat-sub">${subtitle}</p>
    <div class="skill-list">
      ${items.map((item) => `<span class="skill-badge">${item}</span>`).join('')}
    </div>
  </div>
`;

export const render = (container, { skills }) => {
  container.innerHTML = `
    <div class="container">
      <p class="section-label fade-in">// technical skills</p>
      <h2 class="section-title fade-in">Tools &amp; <span>technologies</span></h2>
      <p class="section-desc fade-in">A broad toolkit built across multiple disciplines in software engineering.</p>
      <div class="skills-grid">
        ${skills.map(skillCategory).join('')}
      </div>
    </div>
  `;
};
