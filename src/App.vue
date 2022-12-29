<script setup lang="ts">
import Navbar from "../src/components/Navbar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div id="app">
    <Navbar />
    <RouterView />
    <!-- <HomePage /> -->
  </div>
</template>
