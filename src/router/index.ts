import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/principal/Home.vue";
import ProjectsPage from "../views/principal/Projects.vue";
import BlogPage from "../views/principal/Blog.vue";
import NotFound from "../views/principal/NotFound.vue";
import ProfilePage from "../views/Profile.vue";
import SettingsPage from "../views/Settings.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
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
    {
      path: "/profile",
      name: "profile",
      component: ProfilePage,
    },
    {
      path: "/settings",
      name: "settings",
      component: SettingsPage,
    },
  ],
});

export default router;
