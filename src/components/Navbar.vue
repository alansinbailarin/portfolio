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
                  class="text-gray-400 hover:bg-violet-100 dark:hover:bg-gray-700 hover:text-violet-500 dark:hover:text-white font-semibold px-3 py-2 rounded-md text-sm transition duration-300 ease-out"
                  active-class="bg-violet-100 dark:bg-gray-700 text-violet-600 dark:text-white font-semibold hover:bg-indigo-200 hover:text-indigo-600 "
                  >{{ item.name }}</RouterLink
                >
              </div>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-4 flex items-center md:ml-6">
              <div class="mr-3">
                <a href="../assets/resume.pdf" download>Descarga mi CV</a>
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
          <div class="-mr-2 flex md:hidden">
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-md p-2 text-gray-500 dark:hover:bg-gray-700 transition-all duration-300 ease-in-out hover:bg-gray-100"
              aria-controls="mobile-menu"
              :aria-expanded="open"
              @click="open = !open"
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
      <div v-if="open" class="md:hidden" id="mobile-menu">
        <div class="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          <RouterLink
            v-for="item in menu"
            :to="item.link"
            class="text-gray-400 block font-semibold hover:bg-violet-100 dark:hover:bg-gray-700 dark:hover:text-white hover:text-violet-500 px-3 py-2 rounded-md text-base transition duration-300 ease-out"
            aria-current="page"
            active-class="bg-violet-100 dark:bg-gray-700 text-violet-600 dark:text-white hover:bg-violet-200 hover:text-violet-600"
            >{{ item.name }}</RouterLink
          >
        </div>
        <div class="border-t border-gray-100 dark:border-gray-700 pt-4 pb-3">
          <div class="flex items-center px-5" v-bind="user">
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
