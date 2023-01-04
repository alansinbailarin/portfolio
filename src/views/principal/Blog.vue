<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-10">
    <div class="md:grid grid-cols-3 grid-flow-row-dense gap-4">
      <PostPage class="md:hidden mb-4" />
      <div class="col-span-2">
        <ItemPage />
      </div>
      <PostPage class="hidden md:block h-32" />
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "blog-page",
};
</script>
<script setup lang="ts">
import PostPage from "@/components/blog-components/PostArticle.vue";
import ItemPage from "@/components/blog-components/ItemArticle.vue";
</script>
