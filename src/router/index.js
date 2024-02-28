import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import adminRoutes from "./admin/index.routes";
import authRoutes from "./auth/auth.routes";

const baseRoutes = [
   {
      path: "/",
      name: "home",
      redirect: { name: "admin-index" },
   },
   ...adminRoutes,
];
const routes = [...baseRoutes, ...authRoutes];

const router = createRouter({
   history: createWebHistory(import.meta.env.BASE_URL),
   routes,
});

export default router;
