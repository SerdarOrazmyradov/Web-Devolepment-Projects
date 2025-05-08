<script setup>
import Footer from "./Footer.vue";
import NavBar from "./NavBar.vue";
</script>

<template>
  <div>
    <NavBar />
    <div class="text-center mb-[30px]">
      <h1 class="text-[#41a06c] font-bold">Serdar Orazmyradow</h1>
      <p>Frontend Developer</p>
      <div>
        <span>📞 +993 61 358756</span>
        <span class="ml-4">✉️ mathematicaismylife@gmail.com</span>
      </div>
    </div>
    <div class="grid grid-cols-2 px-6">
      <div>
        <h2 class="border-b-[2px] border-[#3498db] pb-[5px] text-[#2980b9]">
          Experience
        </h2>
        <div class="mb-[20px]">
          <h3>Web Developer | Setir HJ</h3>
          <p class="text-[#7f8c8d] italic">01/02/2025-05/05/2025</p>
          <ul>
            <!-- <li>
            HTML, CSS we JavaScript ulanyp web sahypalar döredik,Bootcamp
            geçirildi!
          </li>
          <li>10-dan gowrak proýektde işlendi</li> -->
          </ul>
        </div>
        <div class="mb-[20px]">
          <h3>Android Developer | Salam HJ</h3>
          <p class="text-[#7f8c8d] italic">10/01/2024-06/01/2025</p>
          <ul>
            <!-- <li></li>
          <li></li> -->
          </ul>
        </div>
      </div>
      <div>
        <h2 class="border-b-[2px] border-[#3498db] pb-[5px] text-[#2980b9]">
          Education
        </h2>
        <div class="mb-[20px]">
          <h3>Magtymguly adyndaky Türkmen Döwlet Uniwersiteti</h3>
          <p class="text-[#7f8c8d] italic">2022-2027</p>
        </div>
      </div>
      <div>
        <h2 class="border-b-[2px] border-[#3498db] pb-[5px] text-[#2980b9]">
          Skills
        </h2>
        <div>
          <h3>Frontend</h3>
          <ul class="flex gap-[10px] flex-wrap list-none p-0">
            <li class="bg-[#6561ef] py-[5px] px-[10px]">HTML/CSS</li>
            <li class="bg-[#6561ef] py-[5px] px-[10px]">JavaScript</li>
            <li class="bg-[#6561ef] py-[5px] px-[10px]">Bootstrap</li>
            <li class="bg-[#6561ef] py-[5px] px-[10px]">jQuery</li>
            <li class="bg-[#6561ef] py-[5px] px-[10px]">Node.js</li>
            <li class="bg-[#6561ef] py-[5px] px-[10px]">Express.js</li>
            <li class="bg-[#6561ef] py-[5px] px-[10px]">EJS</li>
            <li class="bg-[#6561ef] py-[5px] px-[10px]">
              Git, Github and Version Control
            </li>
            <li class="bg-[#6561ef] py-[5px] px-[10px]">APIs</li>
            <li class="bg-[#6561ef] py-[5px] px-[10px]">SQL</li>
            <li class="bg-[#6561ef] py-[5px] px-[10px]">PostgreSQL</li>
            <li class="bg-[#6561ef] py-[5px] px-[10px]">Vue</li>
          </ul>
          <h3>Android</h3>
          <ul class="flex gap-[10px] flex-wrap list-none p-0">
            <li class="bg-[#6561ef] py-[5px] px-[10px]">Java</li>
            <li class="bg-[#6561ef] py-[5px] px-[10px]">Basics of OOP</li>
            <li class="bg-[#6561ef] py-[5px] px-[10px]">Services</li>
            <li class="bg-[#6561ef] py-[5px] px-[10px]">Content Provider</li>
            <li class="bg-[#6561ef] py-[5px] px-[10px]">Intent</li>
            <li class="bg-[#6561ef] py-[5px] px-[10px]">Activity Lifecycle</li>
            <li class="bg-[#6561ef] py-[5px] px-[10px]">Fragments</li>
            <li class="bg-[#6561ef] py-[5px] px-[10px]">BottomSheet</li>
            <li class="bg-[#6561ef] py-[5px] px-[10px]">EditText</li>
            <li class="bg-[#6561ef] py-[5px] px-[10px]">RecyclerView</li>
            <li class="bg-[#6561ef] py-[5px] px-[10px]">Shared Preferences</li>
            <li class="bg-[#6561ef] py-[5px] px-[10px]">File System</li>
            <li class="bg-[#6561ef] py-[5px] px-[10px]">MVVM</li>
            <li class="bg-[#6561ef] py-[5px] px-[10px]">RxJava</li>
            <li class="bg-[#6561ef] py-[5px] px-[10px]">Threads</li>
            <li class="bg-[#6561ef] py-[5px] px-[10px]">OkHttp</li>
            <li class="bg-[#6561ef] py-[5px] px-[10px]">Google Playstore</li>
            <li class="bg-[#6561ef] py-[5px] px-[10px]">
              Firebase Distribution
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2 class="border-b-[2px] border-[#3498db] pb-[5px] text-[#2980b9]">
          Languages
        </h2>
        <ul class="columns-2 list-none">
          <li>Türkmen - Native</li>
          <li>Iňlis - Elementary</li>
          <li>Rus - Elementary</li>
        </ul>
      </div>
      <div>
        <h2 class="border-b-[2px] border-[#3498db] pb-[5px] text-[#2980b9]">
          Featured Projects
        </h2>
      </div>
    </div>
  </div>
  <Footer />
</template>
