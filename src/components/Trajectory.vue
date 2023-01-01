<template>
  <div class="relative px-6 lg:px-8 pt-16">
    <div class="mx-auto">
      <div class="md:grid grid-cols-2 items-center">
        <TrajectoryComponent />
        <ImagesComponent class="hidden md:block" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "trajectory-component",
};
</script>
<script setup lang="ts">
import TrajectoryComponent from "@/components/trajectory-components/TrajectoryComponent.vue";
import ImagesComponent from "@/components/trajectory-components/ImagesComponent.vue";
</script>
