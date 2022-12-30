<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div
      class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16"
    >
      <div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
        <div class="relative">
          <div class="absolute">
            <div class="">
              <h1
                class="mb-4 text-5xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-5xl dark:text-white"
              >
                Ups, parece que no hay nada que ver por aca
              </h1>
              <p class="my-2 text-gray-800">
                No te preocupes, puedes volver a la pagina principal si no
                encontraste lo que estabas buscando!
              </p>
              <RouterLink
                to="/"
                class="sm:w-full lg:w-auto my-2 bg-indigo-600 text-white font-normal py-3 px-6 rounded inline-flex items-center hover:bg-indigo-700 transition duration-200 ease-in-out"
              >
                <svg
                  class="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  ></path>
                </svg>
                Regresar al inicio
              </RouterLink>
            </div>
          </div>
          <div>
            <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
          </div>
        </div>
      </div>
      <div>
        <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { RouterLink } from "vue-router";
export default {
  name: "not-found",
};
</script>
