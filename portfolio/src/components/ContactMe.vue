<script setup>
import Footer from "./Footer.vue";
import NavBar from "./NavBar.vue";
</script>

<template>
  <div>
    <NavBar />
    <div>
      <div class="flex justify-center gap-10">
        <div>
          <div class="text-3xl my-3">contact me</div>
          <div>Do you speak English? It's Ok.</div>
          <div>I speak English too.</div>
          <div class="flex flex-row gap-6">
             <a class="my-3 flex gap-3" href=""
            ><img src="../assets/images/facebook.png" alt="facebook logo"
          /></a>
          <a class="my-3 flex gap-3" href=""
            ><img src="../assets/images/instagram.png" alt="instagram logo"
          /></a>
          <a target="blank" class="my-3 flex gap-3" href="https://t.me/SerdarOrazmyradow"
            ><img src="../assets/images/telegram.png" alt="telegram logo" 
          /></a>
          </div>
         
          
        </div>
        <div class="my-3">
          <img
            src="../assets/images/Serdar2.jpg"
            class="rounded-2xl w-50 h-70"
            alt="my image"
          />
        </div>
      </div>
    </div>
  </div>
</template>
