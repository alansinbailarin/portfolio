<template>
  <div class="">
    <nav class="bg-white shadow-sm dark:bg-gray-800">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img
                class="h-8 w-8"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
              />
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4 tracking-wide">
                <RouterLink
                  v-for="item in menu"
                  :to="item.link"
                  class="text-gray-400 hover:bg-indigo-100 dark:hover:bg-gray-700 hover:text-indigo-500 dark:hover:text-white font-semibold px-3 py-2 rounded-md text-sm transition duration-300 ease-out"
                  active-class="bg-indigo-100 dark:bg-gray-700 text-indigo-600 dark:text-white font-semibold hover:text-indigo-600 "
                  >{{ item.name }}</RouterLink
                >
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <button
                class="mr-3 p-2 hover:bg-gray-200 rounded-md transition-all duration-300 ease-in-out dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-yellow-400 text-gray-700 dark:text-white"
                @click="changeDarkMode"
              >
                <div v-if="toggleDarkMode">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    fill="currentColor"
                    class="bi bi-sun-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
                    />
                  </svg>
                </div>
                <div v-else>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    class="bi bi-moon-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
                    />
                  </svg>
                </div>
              </button>
              <div class="mr-3">
                <a
                  class="inline-flex items-center text-sm px-6 py-2 cursor-pointer rounded-md font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 ease-in-out"
                  href="https://drive.google.com/file/d/1YBD4fqAtcH7vOHlMopAvqK--AH2kd_P2/view?usp=sharing"
                  target="_blank"
                  >Descarga mi CV</a
                >
              </div>
              <div class="relative ml-3" v-if="userLogged">
                <div class="wrapper">
                  <button
                    type="button"
                    class="flex max-w-xs items-center rounded-full"
                    id="user-menu-button"
                    :aria-expanded="open"
                    @click="open = !open"
                  >
                    <span class="sr-only">Open user menu</span>
                    <img
                      class="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>
                <div
                  v-if="open"
                  class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-700 py-1 shadow-lg"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabindex="-1"
                >
                  <RouterLink
                    v-for="item in userMenu"
                    :to="item.link"
                    class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300"
                    role="menuitem"
                    tabindex="-1"
                    id="user-menu-item-0"
                    >{{ item.name }}</RouterLink
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="inline-flex gap-4 items-center md:hidden">
            <div>
              <button
                @click="changeDarkMode"
                class="p-2 hover:bg-gray-200 rounded-md transition-all duration-300 ease-in-out dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-yellow-400 text-gray-700 dark:text-white"
              >
                <div v-if="toggleDarkMode">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    fill="currentColor"
                    class="bi bi-sun-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"
                    />
                  </svg>
                </div>
                <div v-else>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    class="bi bi-moon-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"
                    />
                  </svg>
                </div>
              </button>
            </div>
            <div>
              <a
                class="inline-flex items-center text-sm px-6 py-2 cursor-pointer rounded-md font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-200 ease-in-out"
                href="https://drive.google.com/file/d/1YBD4fqAtcH7vOHlMopAvqK--AH2kd_P2/view?usp=sharing"
                target="_blank"
                >Descarga mi CV</a
              >
            </div>
            <div>
              <button
                type="button"
                aria-controls="mobile-menu"
                :aria-expanded="open"
                @click="open = !open"
                class="rounded-md p-2 text-gray-500 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out hover:bg-gray-100"
              >
                <svg
                  class="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  class="hidden h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div v-if="open" class="md:hidden" id="mobile-menu">
        <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          <RouterLink
            v-for="item in menu"
            :to="item.link"
            class="text-gray-400 block font-semibold hover:bg-indigo-100 dark:hover:bg-gray-700 dark:hover:text-white hover:text-indigo-500 px-3 py-2 rounded-md text-base transition duration-300 ease-out"
            aria-current="page"
            active-class="bg-indigo-100 dark:bg-gray-700 text-indigo-600 dark:text-white hover:text-indigo-600"
            >{{ item.name }}</RouterLink
          >
        </div>
        <div class="border-t border-gray-100 dark:border-gray-700 pt-4 pb-3">
          <div class="flex items-center px-5" v-bind="user" v-if="userLogged">
            <div class="flex-shrink-0">
              <img
                class="h-10 w-10 rounded-full"
                :src="user.image"
                :alt="user.name"
              />
            </div>
            <div class="ml-3">
              <div
                class="text-base leading-none text-gray-600 dark:text-gray-100 font-semibold mb-1"
              >
                {{ user.name }}
              </div>
              <div class="text-sm font-medium leading-none text-gray-400">
                {{ user.email }}
              </div>
            </div>
          </div>
          <div v-for="item in userMenu" class="mt-3 space-y-1 px-2">
            <RouterLink
              :to="item.link"
              class="block rounded-md px-3 py-2 text-base font-semibold text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white hover:text-gray-600"
              active-class="bg-gray-50 text-gray-600 dark:text-white dark:bg-gray-700 font-semibold hover:bg-gray-50 hover:text-gray-600 transition duration-300 ease-out"
              >{{ item.name }}</RouterLink
            >
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script lang="ts">
export default {
  name: "navbar-page",
};
</script>
<script setup lang="ts">
import { ref } from "vue";
import { RouterLink } from "vue-router";

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark");
} else {
  document.documentElement.classList.remove("dark");
}
// const toggleDarkMode = ref(document.documentElement.className === "dark");
const toggleDarkMode = ref(document.documentElement.className.includes("dark"));
const changeDarkMode = () => {
  toggleDarkMode.value = document.documentElement.classList.toggle("dark");
  toggleDarkMode.value
    ? (localStorage.theme = "dark")
    : (localStorage.theme = "light");
};

const open = ref(false);
const userLogged = ref(false);

const menu = [
  {
    name: "Inicio",
    link: "/",
  },
  {
    name: "Proyectos",
    link: "/projects",
  },
  {
    name: "Blog",
    link: "/blog",
  },
];
const userMenu = [
  {
    name: "Mi perfil",
    link: "/profile",
  },
  {
    name: "Configuración",
    link: "/settings",
  },
  {
    name: "Cerrar sesión",
    link: "/",
  },
];

const user = {
  name: "Alan Pacheco",
  email: "alan@gmail.com",
  image:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
</script>
