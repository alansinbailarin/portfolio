<template>
  <div class="relative px-6 lg:px-8 pt-16">
    <div class="mx-auto">
      <div class="md:hidden">
        <p class="text-center text-xl uppercase text-gray-800 font-semibold">
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
            <p class="uppercase text-gray-800 font-semibold text-xl">
              Dejame contarte un poco
            </p>
            <p
              class="mb-3 font-bold md:text-4xl text-2xl uppercase mt-1 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-600"
            >
              Sobre mí
            </p>
          </div>
          <p
            class="text-base font-normal text-gray-600 text-justify mb-6 md:mb-3"
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
            class="inline-flex items-center border border-gray-300 text-gray-700 px-6 py-2 rounded-md"
          >
            <RouterLink to="/blog" class="text-base font-normal"
              >Checa mi blog</RouterLink
            >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              class="bi bi-menu-up ml-2"
              viewBox="0 0 16 16"
            >
              <path
                d="M7.646 15.854a.5.5 0 0 0 .708 0L10.207 14H14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3.793l1.853 1.854zM1 9V6h14v3H1zm14 1v2a1 1 0 0 1-1 1h-3.793a1 1 0 0 0-.707.293l-1.5 1.5-1.5-1.5A1 1 0 0 0 5.793 13H2a1 1 0 0 1-1-1v-2h14zm0-5H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v2zM2 11.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 0-1h-8a.5.5 0 0 0-.5.5zm0-4a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0-.5.5zm0-4a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5z"
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
