const categoryRoutes = [
  {
    path: "main-category",
    name: "main-category",
    component: () =>
      import(
        "../../../views/admin/category-management/main-category/IndexView.vue"
      ),
    meta: {
      requirePermissions: true,
      permissions: [""],
    },
  },
  {
    path: "main-category/create",
    name: "main-category-create",
    component: () =>
      import(
        "../../../views/admin/category-management/main-category/CreateView.vue"
      ),
    meta: {
      requirePermissions: true,
      permissions: [""],
    },
  },
  {
    path: "main-category/:id",
    name: "main-category-edit",
    component: () =>
      import(
        "../../../views/admin/category-management/main-category/EditView.vue"
      ),
    meta: {
      requirePermissions: true,
      permissions: [""],
    },
  },
  {
    path: "sub-category",
    name: "sub-category",
    component: () =>
      import(
        "../../../views/admin/category-management/sub-category/IndexView.vue"
      ),
    meta: {
      requirePermissions: true,
      permissions: [""],
    },
  },
];

export default categoryRoutes;
