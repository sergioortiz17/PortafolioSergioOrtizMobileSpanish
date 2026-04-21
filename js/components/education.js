const educationItem = ({ degree, institution, period, status }) => `
  <div class="edu-item fade-in">
    <div class="edu-header">
      <div>
        <h3 class="edu-degree">${degree}</h3>
        <p class="edu-institution">${institution}</p>
      </div>
      <div class="edu-meta">
        <span class="edu-period">${period}</span>
        <span class="edu-status ${status}">${status === 'in-progress' ? 'In Progress' : 'Completed'}</span>
      </div>
    </div>
  </div>
`;

export const render = (container, { education }) => {
  container.innerHTML = `
    <div class="container">
      <p class="section-label fade-in">// education</p>
      <h2 class="section-title fade-in">Academic <span>background</span></h2>
      <p class="section-desc fade-in">Formal education spanning computer science, cybersecurity, and software development.</p>
      <div class="edu-list">
        ${education.map(educationItem).join('')}
      </div>
    </div>
  `;
};
