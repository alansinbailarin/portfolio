<template>
  <div v-if="bannerVisibility" class="bg-indigo-600">
    <div class="mx-auto max-w-7xl py-1.5 px-1.5 sm:px-6 lg:px-8">
      <div class="flex flex-wrap items-center justify-between">
        <div class="flex w-0 flex-1 items-center">
          <span class="flex rounded-lg bg-indigo-800 p-2">
            <!-- Heroicon name: outline/megaphone -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="white"
              class="bi bi-balloon"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M8 9.984C10.403 9.506 12 7.48 12 5a4 4 0 0 0-8 0c0 2.48 1.597 4.506 4 4.984ZM13 5c0 2.837-1.789 5.227-4.52 5.901l.244.487a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.244-.487C4.789 10.227 3 7.837 3 5a5 5 0 0 1 10 0Zm-6.938-.495a2.003 2.003 0 0 1 1.443-1.443C7.773 2.994 8 2.776 8 2.5c0-.276-.226-.504-.498-.459a3.003 3.003 0 0 0-2.46 2.461c-.046.272.182.498.458.498s.494-.227.562-.495Z"
              />
            </svg>
          </span>
          <p class="ml-3 truncate font-medium text-white" v-bind="message">
            <span class="md:hidden">{{ message.mobileMessage }}</span>
            <span class="hidden md:inline">{{ message.desktopMessage }}</span>
          </p>
        </div>
        <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
          <button
            @click="bannerVisibility = false"
            type="button"
            class="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2 transition-all duration-300 ease-in-out"
          >
            <span class="sr-only">Dismiss</span>
            <!-- Heroicon name: outline/x-mark -->
            <svg
              class="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
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
</template>
<script lang="ts">
export default {
  name: "banner-component",
};
</script>

<script setup lang="ts">
import { ref } from "vue";

const bannerVisibility = ref(true);

const message = {
  mobileMessage: "¡Feliz año nuevo 2023!",
  desktopMessage: "¡Feliz año nuevo 2023!",
};
</script>
