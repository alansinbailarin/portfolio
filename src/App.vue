<script setup lang="ts">
import Navbar from "../src/components/Navbar.vue";
import BannerComponent from "./components/Banner.vue";
import { RouterView } from "vue-router";
import FooterComponent from "../src/components/Footer.vue";
</script>

<template>
  <div id="app" class="dark:bg-gray-900">
    <BannerComponent />
    <Navbar />
    <RouterView />
  </div>
</template>
