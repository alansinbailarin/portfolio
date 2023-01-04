<script setup lang="ts">
import Navbar from "../src/components/Navbar.vue";
import BannerComponent from "./components/Banner.vue";
import { RouterView } from "vue-router";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div id="app" class="bg-white dark:bg-gray-900">
    <!-- <BannerComponent /> -->
    <Navbar />
    <RouterView />
    <Footer />
  </div>
</template>
