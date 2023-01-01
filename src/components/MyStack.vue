<template>
  <div class="relative px-6 lg:px-8 pt-16">
    <div class="mx-auto">
      <div class="">
        <p class="text-center uppercase text-gray-800 font-semibold text-xl">
          Mis técnologias
        </p>
        <p
          class="text-center font-bold md:text-4xl text-2xl uppercase mt-1 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400"
        >
          favoritas
        </p>
      </div>
      <div
        class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6 items-center text-center"
      >
        <div class="bg-white border border-gray-200 rounded-md shadow-md p-4">
          <img
            src="../assets/img/html5.png"
            alt=""
            class="w-8 items-center mx-auto"
          />
          <p class="uppercase mt-2 font-semibold">Html5</p>
        </div>
        <div class="bg-white border border-gray-200 rounded-md shadow-md p-4">
          <img
            src="../assets/img/css3.png"
            alt=""
            class="w-8 items-center mx-auto"
          />
          <p class="uppercase mt-2 font-semibold">Css3</p>
        </div>
        <div class="bg-white border border-gray-200 rounded-md shadow-md p-4">
          <img
            src="../assets/img/js.png"
            alt=""
            class="w-16 items-center mx-auto"
          />
          <p class="uppercase mt-2 font-semibold">Javascript</p>
        </div>
        <div class="bg-white border border-gray-200 rounded-md shadow-md p-4">
          <img
            src="../assets/img/ts.png"
            alt=""
            class="w-8 items-center mx-auto"
          />
          <p class="uppercase mt-2 font-semibold">Typescript</p>
        </div>
        <div class="bg-white border border-gray-200 rounded-md shadow-md p-4">
          <img
            src="../assets/img/vue3.png"
            alt=""
            class="w-8 items-center mx-auto"
          />
          <p class="uppercase mt-2 font-semibold">Vue3</p>
        </div>
        <div class="bg-white border border-gray-200 rounded-md shadow-md p-4">
          <img
            src="../assets/img/csharp.png"
            alt=""
            class="w-8 items-center mx-auto"
          />
          <p class="uppercase mt-2 font-semibold">C#</p>
        </div>
        <div class="bg-white border border-gray-200 rounded-md shadow-md p-4">
          <img
            src="../assets/img/aspnetcore.png"
            alt=""
            class="w-8 items-center mx-auto"
          />
          <p class="uppercase mt-2 font-semibold">Asp.net core</p>
        </div>
        <div class="bg-white border border-gray-200 rounded-md shadow-md p-4">
          <img
            src="../assets/img/laravel.png"
            alt=""
            class="w-8 items-center mx-auto"
          />
          <p class="uppercase mt-2 font-semibold">Laravel</p>
        </div>
        <div class="bg-white border border-gray-200 rounded-md shadow-md p-4">
          <img
            src="../assets/img/mysql.png"
            alt=""
            class="w-8 items-center mx-auto"
          />
          <p class="uppercase mt-2 font-semibold">MySql</p>
        </div>
        <div class="bg-white border border-gray-200 rounded-md shadow-md p-4">
          <img
            src="../assets/img/sql.png"
            alt=""
            class="w-8 items-center mx-auto"
          />
          <p class="uppercase mt-2 font-semibold">Sql Server</p>
        </div>
        <div class="bg-white border border-gray-200 rounded-md shadow-md p-4">
          <img
            src="../assets/img/git.png"
            alt=""
            class="w-8 items-center mx-auto"
          />
          <p class="uppercase mt-2 font-semibold">Git</p>
        </div>
        <div class="bg-white border border-gray-200 rounded-md shadow-md p-4">
          <img
            src="../assets/img/figma.png"
            alt=""
            class="w-5 items-center mx-auto"
          />
          <p class="uppercase mt-2 font-semibold">Figma</p>
        </div>
        <div class="bg-white border border-gray-200 rounded-md shadow-md p-4">
          <img
            src="../assets/img/tailwind.png"
            alt=""
            class="w-8 items-center mx-auto"
          />
          <p class="uppercase mt-2 font-semibold">Tailwind</p>
        </div>
        <div class="bg-white border border-gray-200 rounded-md shadow-md p-4">
          <img
            src="../assets/img/bootstrap.png"
            alt=""
            class="w-10 items-center mx-auto"
          />
          <p class="uppercase mt-2 font-semibold">Bootstrap</p>
        </div>
        <div
          class="bg-white border border-gray-200 rounded-md shadow-md p-4 hidden md:block"
        >
          <img
            src="../assets/img/postman.png"
            alt=""
            class="w-8 items-center mx-auto"
          />
          <p class="uppercase mt-2 font-semibold">Postman</p>
        </div>
      </div>
      <div
        class="bg-white border border-gray-200 rounded-md shadow-md p-4 md:hidden mt-4 text-center"
      >
        <img
          src="../assets/img/postman.png"
          alt=""
          class="w-8 items-center mx-auto"
        />
        <p class="uppercase mt-2 font-semibold">Postman</p>
      </div>
      <LowRightShadow />
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "mystack-component",
};
</script>
<script setup lang="ts">
import LowRightShadow from "@/components/shadows/LowRight.vue";
import TopLeftShadow from "@/components/shadows/TopLeft.vue";
</script>
