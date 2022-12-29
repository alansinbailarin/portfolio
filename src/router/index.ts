import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/Home.vue";
import ProjectsPage from "../views/Projects.vue";
import BlogPage from "../views/Blog.vue";
import NotFound from "../views/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass:
    "bg-indigo-100 text-indigo-600 font-semibold hover:bg-indigo-200 hover:text-indigo-600 transition duration-300 ease-out",
  routes: [
    // Regular routes
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/projects",
      name: "projects",
      component: ProjectsPage,
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogPage,
    },
    // Not found route
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: NotFound,
    },
  ],
});

export default router;
