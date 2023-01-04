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
              <!-- Modal toggle -->
              <button
                class="inline-flex items-center text-white dark:text-black dark:bg-gray-100 dark:hover:bg-gray-200 shadow-lg bg-gray-900 hover:bg-gray-800 font-semibold rounded-lg text-base px-12 md:px-8 py-3 text-center transition duration-200 ease-in-out"
                type="button"
                data-modal-toggle="authentication-modal"
              >
                Dejame un mensaje
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  fill="currentColor"
                  class="bi bi-arrow-right-short ml-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </button>
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
