<template>
  <div class="flex justify-center gap-10 text-2xl mb-6 mt-5">
    <div class="hover:text-[#58dd33ee]">
      <router-link to="/" exact-active-class="active">Home</router-link>
    </div>
    <div class="hover:text-[#58dd33ee]">
      <router-link to="resume" exact-active-class="active">Resume</router-link>
    </div>
    <div class="hover:text-[#58dd33ee]">
      <router-link to="all_projects" exact-active-class="active"
        >All Projects</router-link
      >
    </div>
    <div class="hover:text-[#58dd33ee]">
      <router-link to="about_me" exact-active-class="active"
        >About Me</router-link
      >
    </div>
    <div class="hover:text-[#58dd33ee]">
      <router-link to="contact_me" exact-active-class="active"
        >Contact Me</router-link
      >
    </div>
  </div>
</template>

<style scoped>
.active {
  color: rgb(23, 180, 54);
}
</style>
