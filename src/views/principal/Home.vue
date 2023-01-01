<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:mt-10 mt-2">
    <HeroSection />
    <AboutMeSection />
    <MyStackComponent />
    <TrajectoryComponent />
    <CanHelpYouComponent />
  </div>
</template>
<script lang="ts">
export default {
  name: "home-page",
};
</script>
<script setup lang="ts">
import HeroSection from "@/components/Hero.vue";
import AboutMeSection from "@/components/AboutMe.vue";
import MyStackComponent from "@/components/MyStack.vue";
import TrajectoryComponent from "@/components/Trajectory.vue";
import CanHelpYouComponent from "@/components/CanHelpYou.vue";
</script>
