<script setup>
import FireFlies from "fireflies.js";
FireFlies.initialize();
setTimeout(() => {
  const canvas = document.querySelector("canvas");
  if (canvas) {
    canvas.style.backgroundColor = "black";
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100vw";
    canvas.style.height = "100vh";
    canvas.style.zIndex = "-1";
  }
}, 500);
</script>

<template>
  <div>
    <div></div>
    <router-view></router-view>
  </div>
</template>

<style>
body {
  color: white;
}
</style>
