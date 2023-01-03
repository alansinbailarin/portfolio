<template>
  <div>
    <TopLeftShadow />
    <div class="mb-4 text-center md:text-left">
      <p
        class="uppercase text-gray-800 dark:text-gray-100 font-semibold text-xl"
      >
        Mi trayectoria
      </p>
      <p
        class="font-bold md:text-4xl text-2xl uppercase mt-1 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-blue-400"
      >
        Personal
      </p>
    </div>

    <ol class="relative border-l border-gray-200 dark:border-gray-800">
      <li class="mb-10 ml-4" v-for="item in trajectory">
        <div
          class="absolute w-3 h-3 z-10 rounded-full mt-1.5 -left-1.5"
          :class="item.color"
        ></div>
        <div class="flex justify-between items-center">
          <time
            class="text-sm font-normal leading-none text-gray-400 dark:text-gray-500"
            >{{ item.date }}</time
          >
          <span
            v-if="item.isPublic === true"
            class="bg-green-100 dark:bg-green-200 text-green-500 font-semibold text-xs px-4 py-1 rounded-md"
            >Publico</span
          >
          <span
            v-else-if="item.isPublic === false"
            class="bg-red-100 dark:bg-red-200 text-red-500 font-semibold text-xs px-4 py-1 rounded-md"
            >Privado</span
          >
          <span
            v-else
            class="bg-blue-100 text-blue-500 dark:bg-blue-200 font-semibold text-xs px-4 py-1 rounded-md"
            >Personal</span
          >
        </div>
        <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-100">
          {{ item.title }}
        </h3>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          {{ item.description }}
        </p>
        <a
          :href="item.link"
          target="_blank"
          class="inline-flex items-center px-6 py-1.5 cursor-pointer rounded-md border border-gray-400 text-gray-600 font-bold hover:bg-gray-100 transition-all duration-200 ease-in-out dark:hover:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
          v-if="item.link != ''"
        >
          <p>Visitar</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="19"
            height="19"
            fill="currentColor"
            class="bi bi-link-45deg ml-2"
            viewBox="0 0 16 16"
          >
            <path
              d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1.002 1.002 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4.018 4.018 0 0 1-.128-1.287z"
            />
            <path
              d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243L6.586 4.672z"
            />
          </svg>
        </a>
      </li>
    </ol>
  </div>
</template>
<script lang="ts">
export default {
  name: "trajectory-component",
};
</script>
<script setup lang="ts">
import TopLeftShadow from "../shadows/TopLeft.vue";
const trajectory = [
  {
    date: "Junio 2018",
    title: "Tecnico bachiller en informatica",
    description:
      "Obtencion del titulo de tecnico bachiller en informatica en el colegio nacional de educación profesional tecnica en Tijuana.",
    link: "",
    color: "bg-red-600",
    isPublic: null,
  },
  {
    date: "Setptiembre 2019",
    title: "Ingreso a universidad",
    description:
      "En este punto, ingrese a la universidad a la carrera de ingenieria de software.",
    link: "",
    color: "bg-blue-600",
    isPublic: null,
  },
  {
    date: "Junio 2020",
    title: "Clinica Spa Cuerpo de Angel",
    description:
      "A mediados del año 2020 tuve mi primer trabajo como desarrollador, el cual fue hacer una pagina web para un doctor, esta desarrollada en wordpress.",
    link: "https://www.clinicaspacuerpodeangel.com",
    color: "bg-green-600",
    isPublic: true,
  },
  {
    date: "Septiembre - Diciembre 2021",
    title: "Practicas profesionales Tecnico Superior Universitario",
    description:
      "En el transcurso de estos meses, en mis practicas junto con un conjunto de compañeros, nos dedicamos a desarrollar un sistema de inventarios utilizando diferentes tecnologias, como Laravel, Android Studio con Java entre otras.",
    link: "",
    color: "bg-yellow-600",
    isPublic: false,
  },
  {
    date: "Diciembre 2021",
    title: "Titulación Tecnico Superior Universitario",
    description:
      "Al terminar mis prácticas profesionales, obtuve mi titulo de tecnico superior universitario.",
    link: "",
    color: "bg-indigo-600",
    isPublic: null,
  },
  {
    date: "Enero - Junio 2022",
    title: "Desarrollo de algunos proyectos",
    description:
      "En el transcurso de estos meses, estuve desarrollando algunos proyectos personales sin tanta importancia, consumiendo apis y perfeccionando mi diseño, tambien estudié un curso de diseño ux ui en coderhouse pero lo deje inconcluso.",
    link: "https://www.coderhouse.com.mx/categorias/diseno-ux-ui",
    color: "bg-purple-600",
    isPublic: null,
  },
  {
    date: "Junio 2022",
    title: "MixFee",
    description:
      "MixFee es una plataforma para que los recien egresados o personas que quieren obtener su primer trabajo, tambien para las personas mayores, que se les dificulta obtener trabajo, este proyecto lo desarrolle con varios amigos y a decir verdad ha sido el proyecto mas retador que he tenido, habiendo invertido mas de 160 horas personales en el desarrollo, este proyecto me entusiasma mucho y espero en algun momento sacarlo al publico.",
    link: "",
    color: "bg-teal-600",
    isPublic: null,
  },
  {
    date: "Julio - Noviembre 2022",
    title: "Software Developer Intern en Samsung SDS",
    description:
      "Empecé un internship en samsung, en donde aprendi un poco sobre Back-End con C# en donde participé en el desarrollo de una aplicacion de Digital ID para la entrada y salida de los colaboradores de la empresa y en donde puse en practica mis conocimientos en el diseño de interfaz de usuario.",
    link: "https://www.samsungsds.com/en/index.html",
    color: "bg-pink-600",
    isPublic: false,
  },
  {
    date: "Noviembre 2022 - Presente",
    title: "Front-End Developer Intern en Jelp Delivery",
    description:
      "En la corta estancia que he estado en Jelp Delivery, puedo decir que he aprendido bastante, ya que me he enfrentado a grandes cosas, me esto metiendo un poco mas en el Front-End utilizando diferentes tecnologias y a decir verdad, es una experiencia que me esta gustando bastante.",
    link: "https://www.jelp.delivery/",
    color: "bg-black",
    isPublic: false,
  },
];
</script>
