<template>
  <div class="portfolio-container">
    <section class="hero-section">
      <div class="hero-text">
        <span class="hero-subtitle">Welcome</span>
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

      </section>
  </div>
</template>

<script>
export default {
  name: 'PersonalProfile'
}
</script>

<style scoped>
/* Paste the contents of your css/style.css here */
.hero-section {
  text-align: center;
  padding: 50px 0;
}
.outline {
  -webkit-text-stroke: 1px white;
  color: transparent;
}
/* ... rest of your styles ... */
</style>