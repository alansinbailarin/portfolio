<template>
  <article
    id="publish"
    class="break-words bg-white rounded-md border border-gray-200 shadow-md dark:shadow-lg p-3 dark:bg-gray-800 dark:border-none mb-4"
  >
    <div class="flex items-center space-x-4 mb-3">
      <img
        class="rounded-full w-10 flex-shrink-0"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
      <div class="flex-1 min-w-0">
        <div class="flex justify-between">
          <p class="text-sm font-semibold text-gray-700 dark:text-white">
            Alan Pacheco
          </p>
          <span
            class="py-1 px-3 rounded-md bg-green-100 text-green-600 text-xs font-semibold"
          >
            Nuevo
          </span>
        </div>
        <p class="text-sm text-gray-500 truncate dark:text-gray-400 -mt-1.5">
          Ingeniero de software
        </p>
      </div>
    </div>
    <div class="break-words text-justify">
      <a
        href="#"
        class="font-bold text-gray-800 dark:text-white hover:underline"
        >¿Piensas que la gente es como piensas?</a
      >
      <p class="text-gray-600 dark:text-gray-400">
        Más bien la gente piensa como piensa porque es pobre, y no tienen poder
        sobre ello. Esa idea de que los pobres son pobres porque quieren solo es
        paja capitalista para culpabilizar a otras personas de las fallas del
        mismo sistema que los genera.
      </p>
    </div>
    <div id="reactions" class="mt-3">
      <div class="inline-flex gap-4">
        <div
          class="rounded-full p-2 dark:bg-gray-700 dark:text-white bg-gray-200 text-gray-400 hover:text-red-500 dark:hover:text-red-500 cursor-pointer transition-all duration-300 ease-in-out"
        >
          <span class="sr-only">Favorites</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-heart-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
            />
          </svg>
        </div>
        <div
          class="rounded-full p-2 dark:bg-gray-700 dark:text-white bg-gray-200 text-gray-400 hover:text-blue-500 dark:hover:text-blue-500 cursor-pointer transition-all duration-300 ease-in-out"
        >
          <span class="sr-only">Comment</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chat-fill"
            viewBox="0 0 16 16"
          >
            <path
              d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"
            />
          </svg>
        </div>
        <div
          class="rounded-full p-2 dark:bg-gray-700 dark:text-white bg-gray-200 text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-500 cursor-pointer transition-all duration-300 ease-in-out"
        >
          <span class="sr-only">Share</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-arrow-return-left"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"
            />
          </svg>
        </div>
      </div>
    </div>
  </article>
</template>
<script lang="ts">
export default {
  name: "item-page",
};
</script>
