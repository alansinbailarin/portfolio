<template>
  <div role="status" class="max-w-md animate-pulse">
    <div class="flex items-center justify-between">
      <div>
        <div
          class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"
        ></div>
        <div
          class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-600 mb-2.5"
        ></div>
        <div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-600"></div>
      </div>
      <div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-12"></div>
    </div>
    <span class="sr-only">Loading...</span>
  </div>
</template>
<script lang="ts">
export default {
  name: "repos-skeleton",
};
</script>
