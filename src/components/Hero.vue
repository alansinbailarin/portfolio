<!-- This example requires Tailwind CSS v3.0+ -->
<template>
  <main>
    <div class="relative px-6 lg:px-8 pt-14">
      <div class="mx-auto max-w-3xl">
        <div>
          <div>
            <h1
              class="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl"
            >
              Hola, mi nombre es
              <span
                class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-pink-600"
              >
                Alan
              </span>
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-600 sm:text-center">
              Ingeniero de software en proceso, apasionado por la tecnología y
              el desarrollo, actualmente me encuentro trabajando como
              desarrollador frontend en
              <a
                href="https://www.jelp.delivery"
                target="_blank"
                class="text-blue-600 font-semibold underline"
                >Jelp delivery</a
              >, amante de los videojuegos, el capuccino, el codigo limpio y el
              diseño ux.
            </p>
            <div class="mt-8 flex gap-x-4 sm:justify-center">
              <!-- Modal toggle -->
              <button
                class="inline-flex items-center text-white bg-gray-900 hover:bg-gray-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition duration-200 ease-in-out"
                type="button"
                data-modal-toggle="authentication-modal"
              >
                Dejame un mensaje
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  class="bi bi-arrow-right-short ml-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </button>
              <MessageModal />
            </div>
          </div>
          <div
            class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <svg
              class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]"
              viewBox="0 0 1155 678"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)"
                fill-opacity=".3"
                d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
              />
              <defs>
                <linearGradient
                  id="ecb5b0c9-546c-4772-8c71-4d3f06d544bc"
                  x1="1155.49"
                  x2="-78.208"
                  y1=".177"
                  y2="474.645"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#9089FC"></stop>
                  <stop offset="1" stop-color="#FF80B5"></stop>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script lang="ts">
export default {
  name: "hero-page",
};
</script>
<script setup lang="ts">
import MessageModal from "./hero-components/MessageModal.vue";
</script>
