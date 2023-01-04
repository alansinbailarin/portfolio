<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
    <div class="md:grid grid-cols-3 gap-4">
      <GithubProfile class="mb-4 md:mb-0 h-auto" />
      <GithubRepos class="col-span-2" />
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "projects-page",
};
</script>
<script setup lang="ts">
import GithubProfile from "@/components/projects/GithubProfile.vue";
import GithubRepos from "@/components/projects/GithubRepos.vue";
</script>
