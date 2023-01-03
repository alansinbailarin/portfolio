<template>
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
    <div class="dark:bg-gray-900">
      <div class="md:grid grid-cols-2">
        <div class="md:hidden mb-6">
          <img
            src="https://i.ibb.co/ck1SGFJ/Group.png"
            class="object-center mx-auto"
          />
        </div>
        <div>
          <h1
            class="md:text-7xl text-4xl font-bold text-black dark:text-white tracking-tight text-center md:text-left"
          >
            Ups, parece que no hay nada que ver aqui
          </h1>
          <p
            class="mt-4 text-2xl leading-8 text-gray-600 dark:text-gray-300 text-center md:text-left"
          >
            Pero no te preocupes, puedes regresar a la pantalla de inicio
            haciendo click en el botón de abajo.
          </p>
          <div class="mt-8 flex gap-x-4 justify-center md:justify-start">
            <!-- Modal toggle -->
            <RouterLink
              to="/"
              class="inline-flex items-center text-white dark:text-black dark:bg-gray-100 dark:hover:bg-gray-200 shadow-lg bg-gray-900 hover:bg-gray-800 font-semibold rounded-lg text-base px-12 md:px-8 py-3 text-center transition duration-200 ease-in-out"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                class="bi bi-arrow-left-short mr-2"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                />
              </svg>
              Regresar al inicio
            </RouterLink>
          </div>
        </div>
        <div class="hidden md:block">
          <img
            src="https://i.ibb.co/ck1SGFJ/Group.png"
            class="object-center mx-auto"
          />
        </div>
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
