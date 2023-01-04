<template>
  <div
    class="dark:bg-gray-700 p-3 rounded-md shadow-lg bg-white dark:border-none border border-gray-200"
    v-if="dataProfile"
  >
    <div class="flex items-center space-x-4 mb-3">
      <img
        class="rounded-full w-10 flex-shrink-0"
        :src="dataProfile.avatar_url"
        alt=""
      />
      <div class="flex-1 min-w-0">
        <div class="flex justify-between">
          <a
            :href="dataProfile.html_url"
            class="text-sm font-semibold text-gray-700 dark:text-white hover:underline"
          >
            {{ dataProfile.name }}
          </a>
          <span
            v-if="dataProfile.hireable"
            class="py-1 px-3 rounded-md bg-blue-100 dark:bg-blue-200 text-blue-600 text-xs font-semibold"
          >
            Disponible
          </span>
          <span
            v-else
            class="py-1 px-3 rounded-md bg-red-100 dark:bg-blue-200 text-red-600 text-xs font-semibold"
          >
            No disponible
          </span>
        </div>
        <p class="text-sm text-gray-500 truncate dark:text-gray-400 -mt-1.5">
          @{{ dataProfile.login }}
        </p>
      </div>
    </div>
    <div class="mt-2">
      <p class="text-sm text-blue-600 font-semibold mb-2">
        {{ dataProfile.company }}
      </p>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        {{ dataProfile.bio }}
      </p>
      <p class="text-sm text-gray-400">
        Repositorios:
        <span class="">{{ dataProfile.public_repos }}</span>
      </p>
      <p class="text-sm text-gray-400">
        Seguidores: <span>{{ dataProfile.followers }}</span>
      </p>
      <p class="text-sm text-gray-400 font-thin mt-2">
        {{ dataProfile.location }}
      </p>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "github-profile",
};
</script>
<script setup lang="ts">
import { ref } from "vue";
import type { githubProfile } from "@/types/githubProfile";

const dataProfile = ref<githubProfile>({} as githubProfile);

fetch("https://api.github.com/users/alansinbailarin")
  .then((res) => res.json())
  .then((data) => {
    dataProfile.value = data;
  });
</script>
