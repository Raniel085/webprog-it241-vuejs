<template>
  <div class="profile-body">
    <section class="hero-section text-center">
      <div class="hero-text">
        <span class="hero-subtitle">WELCOME TO MY PERSONAL WEBSITE // INFORMATION TECHNOLOGY</span>
        <h1 class="main-name">RANIEL<br><span class="outline">DELA CRUZ</span></h1>
        <div class="mt-4">
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
        <p>My goal in life is to become a <strong>successful businessman</strong>. I dream of building my own business so that I can achieve financial stability and independence.</p>
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
          <li>• Basic Hardware & Networking</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PersonalProfile'
}
</script>

<style scoped>
/* Main Background */
.profile-body {
  background-color: #000000;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  min-height: 100vh;
  padding-bottom: 50px;
}

/* Hero Section */
.hero-section {
  padding: 100px 20px;
}

.hero-subtitle {
  color: #00e5ff;
  font-size: 0.8rem;
  letter-spacing: 2px;
  font-weight: bold;
}

.main-name {
  font-size: 5rem;
  font-weight: 900;
  line-height: 1;
  margin-top: 20px;
}

.outline {
  color: transparent;
  -webkit-text-stroke: 1px #00e5ff;
}

/* Button */
.btn-custom {
  border: 1px solid #00e5ff;
  color: #00e5ff;
  padding: 10px 25px;
  text-decoration: none;
  font-size: 0.7rem;
  transition: 0.3s;
}

.btn-custom:hover {
  background: #00e5ff;
  color: black;
}

/* Bento Grid */
.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 20px;
  padding: 0 40px;
  max-width: 1400px;
  margin: 0 auto;
}

.bento-item {
  background: #111111;
  border-radius: 10px;
  padding: 30px;
  border: 1px solid #222;
}

.label {
  color: #00e5ff;
  font-size: 0.7rem;
  font-weight: bold;
  display: block;
  margin-bottom: 10px;
}

h2 {
  font-weight: 800;
  margin-bottom: 15px;
}

p, li {
  color: #cccccc;
  font-size: 0.9rem;
}
</style>