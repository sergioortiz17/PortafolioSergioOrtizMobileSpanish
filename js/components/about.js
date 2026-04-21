export const render = (container, { aboutParagraphs }) => {
  container.innerHTML = `
    <div class="container">
      <div class="about-layout">
        <div class="about-photo-wrap fade-in">
          <img src="assets/foto.jpg" alt="Sergio Ortiz" class="about-photo" />
        </div>
        <div class="about-text fade-in">
          <p class="section-label">// about me</p>
          <h1 class="about-name">Sergio Ortiz</h1>
          <h2 class="section-title">DevOps with a<br /><span>full-stack mindset</span></h2>
          ${aboutParagraphs.map((p) => `<p>${p}</p>`).join('')}
        </div>
      </div>
    </div>
  `;
};
