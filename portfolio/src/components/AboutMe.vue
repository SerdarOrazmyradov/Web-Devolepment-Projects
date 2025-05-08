<script setup>
import Footer from "./Footer.vue";
import NavBar from "./NavBar.vue";
</script>

<template>
  <NavBar />

  <div class="about-me mt-7">
    <p>
      Hello! My name is Serdar, and I am a passionate web developer and
      programmer. I have experience working with HTML, CSS, JavaScript, Vue.js,
      and other web technologies. In particular, programming and creating
      websites are one of my biggest interests.
    </p>
    <p>
      You can learn more about my portfolio and past work. I continue to develop
      new projects that will be useful to you.
    </p>
    <div class="social-links">
      <a
        href="https://github.com/serdar"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <a
        href="https://linkedin.com/in/serdar"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
  data() {
    return {
      currentDate: new Date().toLocaleDateString(),
    };
  },
};
</script>

<style scoped>
.about-me {
  padding: 20px;
  background-color: #f4f4f9;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 20px auto;
}

.about-me h1 {
  color: #2c3e50;
}

.about-me p {
  font-size: 16px;
  line-height: 1.6;
  color: #34495e;
}

.social-links a {
  text-decoration: none;
  margin-right: 10px;
  color: #3498db;
}

.social-links a:hover {
  color: #2980b9;
}
</style>
