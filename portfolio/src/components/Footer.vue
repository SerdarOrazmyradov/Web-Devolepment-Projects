<script setup></script>

<template>
  <nav class="flex flex-col items-center mt-25 bg-[#7070ff50]">
    <div class="font-bold text-[#fff] text-2xl">Serdar</div>
    <div>Web developer</div>
    <div class="flex gap-5">
      <router-link
        to="/"
        exact-active-class="active"
        class="text-[#fff] text-xl font-bold"
        >Home</router-link
      >
      <router-link
        to="resume"
        exact-active-class="active"
        class="text-[#fff] text-xl font-bold"
        >Resume</router-link
      >
      <router-link
        to="all_projects"
        exact-active-class="active"
        class="text-[#fff] text-xl font-bold"
        >All Projects</router-link
      >
      <router-link
        to="about_me"
        exact-active-class="active"
        class="text-[#fff] text-xl font-bold"
        >About Me</router-link
      >
      <router-link
        to="contact_me"
        exact-active-class="active"
        class="text-[#fff] text-xl font-bold"
        >Contact Me</router-link
      >
    </div>
    <div class="bg-[#fff] my-1 h-1 w-fitt px-[100vh]"></div>
    <div>&#169; Serdar. All rigths reserved</div>
  </nav>
</template>
<style scoped>
.active {
  color: rgb(23, 180, 54);
}
</style>
