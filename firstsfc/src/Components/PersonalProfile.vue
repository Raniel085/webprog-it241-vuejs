<template>
  <div class="profile-body">
    <div class="bg-accent-blur"></div>

    <section class="hero-section">
      <div class="hero-text">
        <span class="hero-subtitle" id="dynamic-greeting">Welcome</span>
        <h1>Raniel<br><span class="outline">Dela Cruz</span></h1>
        <div class="mt-5">
          <a href="#content" class="btn-custom">EXPLORE PROFILE</a>
        </div>
      </div>
    </section>

    <section id="content" class="content-grid">
      <div class="bento-item about">
        <span class="label">01 // Biography</span>
        <h2>About Me</h2>
        <p>I am Panyeng.</p>
      </div>

      <div class="bento-item degree">
        <span class="label">02 // Degree</span>
        <h2>Course</h2>
        <p>BS in Information Technology<br><strong>Asia Pacific College</strong></p>
      </div>

      <div class="bento-item goals">
        <span class="label">03 // Vision</span>
        <h2>Goals In Life & Dreams</h2>
        <p>My goal in life is to become a <strong>successful businessman</strong>.</p> 
        <p>One of my greatest motivations is to <strong>help my parents</strong>.</p>
      </div>

      <div class="bento-item academic">
        <span class="label">04 // Academic</span>
        <h2>Education & Achievements</h2>
        <ul class="list-unstyled">
          <li>• Asia Pacific College (Current)</li>
          <li>• 2nd Year, BSIT Student</li>
          <li>• Specialized in Web Programming</li>
        </ul>
      </div>

      <div class="bento-item expertise">
        <span class="label">05 // Expertise</span>
        <h2>IT Experience</h2>
        <ul class="list-unstyled">
          <li>• Python Programming</li>
          <li>• LinkedIn Learning Certifications</li>
        </ul>
      </div>

      <div class="bento-item interests">
        <span class="label">06 // Interests</span>
        <h2>Hobbies & Interests</h2>
        <ul class="list-unstyled">
          <li>• <strong>Ride Therapy</strong></li>
          <li>• <strong>Competitive Gaming</strong></li>
          <li>• <strong>KDrama</strong></li>
        </ul>
      </div>
    </section>

    <section class="gallery-section">
      <div class="px-5 mb-4 text-center">
        <span class="label">07 // Visuals</span>
        <h2 class="display-4 fw-bold text-white">PICTURE GALLERY</h2>
      </div>
      <div class="gallery-wrapper">
        <img src="https://i.pinimg.com/736x/9e/51/da/9e51dab79becdc334b68e46334023b2a.jpg" alt="Gallery 1">
        <img src="https://i.pinimg.com/736x/da/6e/fc/da6efc48d7c753d345720ecc3aee58c8.jpg" alt="Gallery 2">
      </div>
    </section>

    <footer>
      Raniel DELA CRUZ &copy; 2026 // WEBPROG IT241
    </footer>
  </div>
</template>

<script>
export default {
  name: 'PersonalProfile',
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};
</script>

<style scoped>
:component {
  --bg-dark: #0a0a0a;
  --accent-purple: #8a2be2;
  --accent-blue: #00d4ff;
  --text-main: #ffffff;
  --text-muted: #a0a0a0;
  --glass-bg: rgba(255, 255, 255, 0.05);
}

.profile-body {
  background-color: var(--bg-dark);
  color: var(--text-main);
  font-family: 'Inter', sans-serif;
  min-height: 100vh;
  padding: 20px;
}

/* Hero Section Styles */
.hero-section {
  padding: 100px 20px;
  text-align: center;
}

.outline {
  -webkit-text-stroke: 1.5px var(--accent-blue);
  color: transparent;
  font-family: 'Syncopate', sans-serif;
  text-transform: uppercase;
}

/* Bento Grid Layout */
.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.bento-item {
  background: var(--glass-bg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  transition: transform 0.3s ease, border-color 0.3s ease;
}

.bento-item:hover {
  transform: translateY(-5px);
  border-color: var(--accent-purple);
}

/* Label & Typography */
.label {
  color: var(--accent-blue);
  font-size: 0.8rem;
  font-weight: 900;
  text-transform: uppercase;
  display: block;
  margin-bottom: 10px;
}

h2 {
  font-weight: 900;
  margin-bottom: 15px;
}

/* Custom Button */
.btn-custom {
  display: inline-block;
  padding: 12px 30px;
  background: linear-gradient(45deg, var(--accent-purple), var(--accent-blue));
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: bold;
  transition: opacity 0.3s;
}

.btn-custom:hover {
  opacity: 0.8;
  color: white;
}

/* Gallery Images */
.gallery-wrapper img {
  width: 100%;
  border-radius: 15px;
  border: 2px solid var(--accent-purple);
}
</style>