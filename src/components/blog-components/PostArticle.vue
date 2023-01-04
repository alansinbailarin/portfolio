<template>
  <div
    class="bg-white rounded-md border border-gray-200 shadow-md dark:shadow-lg p-4 dark:bg-gray-800 dark:border-none"
  >
    <div class="flex items-center space-x-4 mb-3">
      <img
        class="rounded-full w-10 flex-shrink-0"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt=""
      />
      <div class="flex-1 min-w-0">
        <div class="flex justify-between">
          <p
            class="text-sm font-semibold text-gray-700 truncate dark:text-white"
          >
            Alan Pacheco
          </p>
          <button
            type="button"
            class="hover:bg-gray-300 text-indigo-500 text-sm font-semibold rounded-md dark:hover:bg-gray-600 transition-all duration-300 ease-in-out"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>

        <p class="text-sm text-gray-500 truncate dark:text-gray-400">
          alan@gmail.com
        </p>
      </div>
    </div>
    <div>
      <button
        type="button"
        class="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-400 text-left dark:border-none dark:text-white rounded-full border border-gray-200 w-full p-2"
      >
        <p class="ml-2">¡Publica tu siguiente articulo!</p>
      </button>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "post-page",
};
</script>
