const userRoutes = [
   {
      path: "/login",
      name: "login",
      component: () => import("../../views/auth/LoginView.vue"),
   },
   {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../../views/admin/notFound.vue"),
   },
];

export default userRoutes;
