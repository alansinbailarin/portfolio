<template>
  <div class="">
    <div class="md:grid grid-cols-2 gap-4">
      <div
        v-for="item in dataRepos"
        :key="dataRepos.id"
        class="mb-3 relative dark:bg-gray-700 p-3 rounded-md shadow-lg bg-white dark:border-none border border-gray-200"
      >
        <ReposSkeleton v-if="loading" />
        <div v-else>
          <div class="flex justify-between items-center">
            <a
              :href="item.html_url"
              target="_blank"
              class="text-gray-700 font-semibold dark:text-white text-sm hover:underline"
              >{{ item.name }}</a
            >
            <span
              class="text-green-600 dark:bg-green-200 bg-green-100 text-xs py-1 px-2 font-semibold rounded-md"
              >{{ item.visibility }}</span
            >
          </div>
          <div class="mb-6">
            <p class="text-sm text-gray-400 mt-2" v-if="item.description">
              {{ item.description }}
            </p>
            <p class="text-sm text-gray-400 mt-1" v-else>
              No hay una descripción aun.
            </p>
          </div>
          <div
            class="inline-flex items-center dark:text-white text-gray-600 text-sm absolute bottom-3"
          >
            <span class="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                />
              </svg>
            </span>
            <p class="ml-1 mt-0.5">{{ item.stargazers_count }}</p>
          </div>
        </div>
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
import { ref, onMounted } from "vue";
import ReposSkeleton from "./skeleton/ReposSkeleton.vue";

const loading = ref<boolean>(false);
const dataRepos = ref<any>({} as any);

onMounted(async () => {
  loading.value = true;
  try {
    const res = await fetch(
      "https://api.github.com/users/alansinbailarin/repos"
    );
    dataRepos.value = await res.json();
  } catch (error) {
    console.log(error);
  } finally {
    setTimeout(() => {
      loading.value = false;
    }, 600);
  }
});
</script>
