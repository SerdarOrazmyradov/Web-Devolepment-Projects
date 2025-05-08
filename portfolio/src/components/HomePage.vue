<script setup>
import Footer from "./Footer.vue";
import GridProjects from "./GridProjects.vue";
import NavBar from "./NavBar.vue";
</script>

<template>
  <div class="mt-10">
    <!--1st parent item -->
    <!--navbar-->
    <NavBar />

    <!--2nd parent item-->
    <div class="flex justify-center gap-10 mt-[20vh] ">
      <img
        src="../assets/images/Serdar.jpg"
        alt="my img"
        class="w-[30vh] h-[50vh] rounded-2xl"
      />
      <div class="flex flex-col justify-center">
        <div class="text-2xl">Hello I’m Serdar</div>
        <div class="text-xl mt-4">I’m Web developer</div>
      </div>
    </div>
    <!--Featured Projects-->
    <div class="justify-center flex text-2xl text-[#476EE1] my-[20vh]">
      Featured Projects
    </div>
    <!--grid-->
    <div class="grid grid-rows-3 grid-cols-2 gap-2 p-6">
      <!--1st project-->
      <!--title ....-->
      <div class="items-center">
        <div class="text-[#65baf2]">Personal Blog Design</div>
        <div class="mt-6">
          We can add, delete, and edit posts in this project!
        </div>
        <div
          class="mt-10 bg-[#4040F0] text-[#fff] text-center py-2 rounded-2xl"
        >
          <a target="_blank" href="http://localhost:3000/" class="list-none"
            >Click here to see the project</a
          >
        </div>
      </div>
      <!--project image-->
      <div class="">
        <img
          src="../assets/images/first-project.png"
          alt="project image 1st"
          class="w-[633px] h-[343px] object-cover rounded-2xl"
        />
        <div class="mt-5">Blog Website</div>
      </div>

      <!--2nd project-->
      <!--project image-->
      <div class="">
        <img
          src="../assets/images/second-project.png"
          alt="project image 2nd"
          class="w-[633px] h-[343px] object-cover rounded-2xl"
        />
        <div class="mt-5">Capstone Project One-Quiz game</div>
      </div>
      <!--title ....-->
      <div class="items-center">
        <div class="text-[#65baf2]">Personal Quiz game</div>
        <div class="mt-6">
          I think this quiz game will be a fun way to pass the time and help you
          learn Latin numbers! And this game created only use HTML5
        </div>
        <div
          class="mt-10 bg-[#4040F0] text-[#fff] text-center py-2 rounded-2xl"
        >
          <a target="_blank" href="http://localhost:3000/" class="list-none"
            >Click here to see the project</a
          >
        </div>
      </div>

      <!--3rd project-->
      <!--title ....-->
      <div class="items-center">
        <div class="text-[#65baf2]">Personal Book Notes</div>
        <div class="mt-6">
          This project helps us to make short notes after we finish reading the
          book. It is also possible to enter the times we started and finished
          reading! backend &fronted&postgreSQL
        </div>
        <div
          class="mt-10 bg-[#4040F0] text-[#fff] text-center py-2 rounded-2xl"
        >
          <a target="_blank" href="http://localhost:3000/" class="list-none"
            >Click here to see the project</a
          >
        </div>
      </div>
      <!--project image-->
      <div class="">
        <img
          src="../assets/images/third-project.png"
          alt="project image 3rd"
          class="w-[633px] h-[343px] object-cover rounded-2xl"
        />
        <div class="mt-5">Capstone Project - Book Notes</div>
      </div>
    </div>
    <!--footer-->
    <Footer />
  </div>
</template>
