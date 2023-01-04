<template>
  <div
    class="dark:bg-gray-700 p-3 rounded-md shadow-lg bg-white dark:border-none border border-gray-200"
  >
    a
  </div>
</template>
<script lang="ts">
export default {
  name: "github-repos",
};
</script>
<script setup lang="ts">
import { onMounted, ref, nextTick } from "vue";
import { getRepos } from "@/api/githubApi";

const dataRepos = ref({});

const getUserRepos = () => {
  nextTick(async () => {
    const dataRepos = await getRepos();
  });
};

onMounted(() => {
  getUserRepos();
});
</script>
