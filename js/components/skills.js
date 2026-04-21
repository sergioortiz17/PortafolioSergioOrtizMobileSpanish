const skillCategory = ({ type, icon, title, subtitle, items }) => `
  <div class="skill-category ${type} fade-in">
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
      <div class="skills-grid">
        ${skills.map(skillCategory).join('')}
      </div>
    </div>
  `;
};
