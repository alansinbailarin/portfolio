<template>
  <main class="">
    <div class="relative px-6 lg:px-8 pt-12">
      <div class="mx-auto max-w-3xl md:max-w-5xl">
        <div>
          <div>
            <h1
              class="md:text-8xl text-4xl font-bold text-black dark:text-white tracking-tight text-center"
            >
              Hola, mi nombre es
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-600"
              >
                &lt;Alan /&gt;
              </span>
            </h1>
            <p
              class="mt-4 text-2xl leading-8 text-gray-600 dark:text-gray-300 text-center"
            >
              Ingeniero de software en proceso, apasionado por la tecnología y
              el desarrollo, de Tijuana para el mundo, actualmente me encuentro
              trabajando como desarrollador frontend en
              <a
                href="https://www.jelp.delivery"
                target="_blank"
                class="text-blue-500 font-medium underline"
                >Jelp delivery</a
              >, amante de los videojuegos, el capuccino, el codigo limpio y el
              diseño ux.
            </p>
            <div class="mt-8 flex gap-x-4 justify-center">
              <MessageModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
export default {
  name: "hero-page",
};
</script>
<script setup lang="ts">
import MessageModal from "./hero-components/MessageModal.vue";
</script>
