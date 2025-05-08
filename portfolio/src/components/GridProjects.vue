<script setup>
import { defineProps, defineEmits } from "vue";
</script>

<template>
  <!--grid-->
  <div class="grid grid-rows-3 grid-cols-2 gap-2 p-6">
    <!--1st project-->
    <!--title ....-->
    <div class="items-center">
      <div class="text-[#65baf2]">{{ firstProject?.title }}</div>
      <div class="mt-6">
        {{ firstProject?.description }}
      </div>
      <div class="mt-10 bg-[#4040F0] text-[#fff] text-center py-2 rounded-2xl">
        <a target="_blank" :href="firstProject?.projectPath" class="list-none"
          >Click here to see the project</a
        >
      </div>
    </div>
    <!--project image-->
    <div class="">
      <img
        :src="firstProject?.projectImagePath"
        alt="project image 1st"
        class="w-[633px] h-[343px] object-cover"
      />
      <div class="mt-5">{{ firstProject?.underImageText }}</div>
    </div>

    <!--2nd project-->
    <!--project image-->
    <div class="">
      <img
        :src="secondProject?.projectImagePath"
        alt="project image 2nd"
        class="w-[633px] h-[343px] object-cover"
      />
      <div class="mt-5">{{ secondProject?.underImageText }}</div>
    </div>
    <!--title ....-->
    <div class="items-center">
      <div class="text-[#65baf2]">{{ secondProject?.title }}</div>
      <div class="mt-6">
        {{ secondProject?.description }}
      </div>
      <div class="mt-10 bg-[#4040F0] text-[#fff] text-center py-2 rounded-2xl">
        <a target="_blank" :href="secondProject?.projectPath" class="list-none"
          >Click here to see the project</a
        >
      </div>
    </div>

    <!--3rd project-->
    <!--title ....-->
    <div class="items-center">
      <div class="text-[#65baf2]">{{ thirdProject?.title }}</div>
      <div class="mt-6">{{ thirdProject?.description }}</div>
      <div class="mt-10 bg-[#4040F0] text-[#fff] text-center py-2 rounded-2xl">
        <a target="_blank" :href="thirdProject?.projectPath" class="list-none"
          >Click here to see the project</a
        >
      </div>
    </div>
    <!--project image-->
    <div class="">
      <img
        :src="thirdProject?.projectImagePath"
        alt="project image 3rd"
        class="w-[633px] h-[343px] object-cover"
      />
      <div class="mt-5">{{ thirdProject?.underImageText }}</div>
    </div>
  </div>
</template>
