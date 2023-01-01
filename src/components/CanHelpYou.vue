<template>
  <div class="relative px-6 lg:px-8 p-10 mt-14 bg-slate-900 rounded-md">
    <div class="mx-auto">
      <div class="mb-8">
        <p class="text-center uppercase text-white font-semibold text-xl">
          ¿Te puedo
        </p>
        <p
          class="text-center font-bold md:text-4xl text-2xl uppercase mt-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-pink-200"
        >
          ayudar?
        </p>
      </div>
      <div class="md:grid grid-cols-3 gap-4">
        <div
          class="bg-slate-800 p-6 rounded-md text-white mb-6 md:mb-0 shadow-lg"
        >
          <div class="mb-3">
            <span
              class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                class="bi bi-code-slash"
                viewBox="0 0 16 16"
              >
                <path
                  d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"
                />
              </svg>
            </span>
          </div>
          <h1>Front-End</h1>
          <p class="text-slate-400 text-sm font-normal">
            Tengo conocimiento en diferentes tecnologias para el desarrollo
            front, creo que esto más especializado en esta área debido a que me
            he desarrollado un poco mas aqui, uso tecnologias como Html, Css,
            JavaScript, TypeScript, Vue 3, Blade, Tailwind y Bootstrap entre
            otras.
          </p>
        </div>
        <div
          class="bg-slate-800 p-6 rounded-md text-white mb-6 md:mb-0 shadow-lg"
        >
          <div class="mb-3">
            <span
              class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-back"
                viewBox="0 0 16 16"
              >
                <path
                  d="M0 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-2H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2z"
                />
              </svg>
            </span>
          </div>
          <h1>Back-End</h1>
          <p class="text-slate-400 text-sm font-normal">
            En el Back-End es donde tengo un poco menos de experiencia, habiendo
            trabajado con Laravel, Php y MySql, C# y Asp.Net Core a la par de
            Sql Server desarrollando Api's y aprendiendo POO, tambien tengo un
            poco de conocimiento de Java y ando tratando de aprender Node.js.
          </p>
        </div>
        <div
          class="bg-slate-800 p-6 rounded-md text-white mb-6 md:mb-0 shadow-lg"
        >
          <div class="mb-3">
            <span
              class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="currentColor"
                class="bi bi-palette"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"
                />
                <path
                  d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"
                />
              </svg>
            </span>
          </div>
          <h1>Diseño Ux/Ui</h1>
          <p class="text-slate-400 text-sm font-normal">
            Este lado me apasiona bastante, he tenido la oportunidad de trabajar
            un poco aca, he trabajado en mis inicios con Proto.io y mas
            actualmente con Figma.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
  name: "can-help-you-component",
};
</script>
