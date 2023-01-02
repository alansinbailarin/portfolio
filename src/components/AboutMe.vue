<template>
  <div class="relative px-6 lg:px-8 pt-16">
    <div class="mx-auto">
      <div class="md:hidden">
        <p
          class="text-center text-xl uppercase text-gray-800 dark:text-gray-100 font-semibold"
        >
          Dejame contarte un poco
        </p>
        <p
          class="text-center font-bold md:text-4xl text-2xl uppercase mt-1 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600"
        >
          Sobre mí
        </p>
      </div>

      <div
        class="md:grid md:grid-cols-2 items-center text-center md:text-left mt-10 gap-4 text-2xl font-semibold"
      >
        <div class="">
          <img
            class="rounded-lg w-auto md:w-80 object-center mx-auto md:mb-0 mb-6"
            src="../assets/profile-photo.jpg"
            alt=""
          />
        </div>
        <div>
          <div class="hidden md:block">
            <p
              class="uppercase text-gray-800 dark:text-gray-100 font-semibold text-xl"
            >
              Dejame contarte un poco
            </p>
            <p
              class="mb-3 font-bold md:text-4xl text-2xl uppercase mt-1 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600"
            >
              Sobre mí
            </p>
          </div>
          <p
            class="text-base font-normal text-gray-600 dark:text-gray-400 text-justify mb-6 md:mb-3"
          >
            Como te lo mencioné arriba, mi nombre es Alan, tengo 24 años de
            edad, actualmente curso la carrera de ingenieria de software, aún
            que me he enfocado un poco mas al Frontend, tambien tengo
            conocimiento en Backend, mi tecnologia favorita es JavaScript, por
            su versatilidad, me considero una persona que le encanta trabajar en
            equipo, que si tiene dudas investiga y si no encuentra la respuesta
            pregunta. Soy amante del café, de la musica y de los videojuegos,
            soy alguien que le interesa aprender diariamente y alguien que
            intenta superar los obstaculos que se le pongan enfrente.
          </p>
          <div
            class="inline-flex items-center text-sm px-6 py-1.5 cursor-pointer rounded-md border border-gray-400 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 text-gray-600 font-bold hover:bg-gray-100 transition-all duration-200 ease-in-out"
          >
            <RouterLink to="/blog" class="">Checa mi blog</RouterLink>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="19"
              height="19"
              fill="currentColor"
              class="bi bi-code ml-2"
              viewBox="0 0 16 16"
            >
              <path
                d="M5.854 4.854a.5.5 0 1 0-.708-.708l-3.5 3.5a.5.5 0 0 0 0 .708l3.5 3.5a.5.5 0 0 0 .708-.708L2.707 8l3.147-3.146zm4.292 0a.5.5 0 0 1 .708-.708l3.5 3.5a.5.5 0 0 1 0 .708l-3.5 3.5a.5.5 0 0 1-.708-.708L13.293 8l-3.147-3.146z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { RouterLink } from "vue-router";
export default {
  name: "aboutme-component",
};
</script>
