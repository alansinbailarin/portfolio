<template>
  <div
    class="dark:bg-gray-700 p-3 rounded-md shadow-lg bg-white dark:border-none border border-gray-200"
  >
    <div class="md:grid grid-cols-2 gap-4">
      <div v-for="item in dataRepos" :key="dataRepos.id" class="mb-3">
        <div class="flex justify-between items-center">
          <a
            :href="item.html_url"
            target="_blank"
            class="text-gray-700 font-semibold dark:text-white text-sm hover:underline"
            >{{ item.name }}</a
          >
          <span
            class="text-green-600 dark:bg-green-200 bg-green-100 text-xs p-1 font-semibold rounded-md"
            v-if="item.private === false"
            >Publico</span
          >
          <span
            class="text-red-600 dark:bg-red-200 bg-red-100 text-xs p-1 font-semibold rounded-md"
            v-else
            >Privado</span
          >
        </div>
        <p class="text-sm text-gray-400 mt-1" v-if="item.description">
          {{ item.description }}
        </p>
        <p class="text-sm text-gray-400 mt-1" v-else>
          No hay una descripción aun.
        </p>
        <time class="mt-2 text-xs text-gray-400">{{ item.created_at }}</time>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "github-repos",
};
</script>
<script setup lang="ts">
import { ref } from "vue";
import type { githubRepos } from "@/types/githubRepos";

const dataRepos = ref<any>({} as any);

fetch("https://api.github.com/users/alansinbailarin/repos")
  .then((res) => res.json())
  .then((data) => {
    dataRepos.value = data;

    console.log(dataRepos.value);
  });
</script>
