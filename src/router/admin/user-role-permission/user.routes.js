const userRoutes = [
  {
    path: "users",
    name: "users",
    component: () => import("../../../views/admin/users/IndexView.vue"),
    meta: {
      requirePermissions: true,
      permissions: [],
    },
  },
  {
    path: "users/create",
    name: "users-create",
    component: () => import("../../../views/admin/users/CreateView.vue"),
    meta: {
      requirePermissions: true,
      permissions: [],
    },
  },
  {
    path: "users/:id",
    name: "users-edit",
    component: () => import("../../../views/admin/users/EditView.vue"),
    meta: {
      requirePermissions: true,
      permissions: [],
    },
  },
  {
    path: "roles",
    name: "roles",
    component: () => import("../../../views/admin/roles/IndexView.vue"),
    meta: {
      requirePermissions: true,
      permissions: [],
    },
  },
  {
    path: "roles/create",
    name: "roles-create",
    component: () => import("../../../views/admin/roles/CreateView.vue"),
    meta: {
      requirePermissions: true,
      permissions: [],
    },
  },
  {
    path: "roles/:id",
    name: "roles-edit",
    component: () => import("../../../views/admin/roles/EditView.vue"),
    meta: {
      requirePermissions: true,
      permissions: [],
    },
  },
  {
    path: "permissions",
    name: "permissions",
    component: () => import("../../../views/admin/permissions/IndexView.vue"),
    meta: {
      requirePermissions: true,
      permissions: [],
    },
  },
  {
    path: "permissions/create",
    name: "permissions-create",
    component: () => import("../../../views/admin/permissions/CreateView.vue"),
    meta: {
      requirePermissions: true,
      permissions: [],
    },
  },
  {
    path: "permissions/:id",
    name: "permissions-edit",
    component: () => import("../../../views/admin/permissions/EditView.vue"),
    meta: {
      requirePermissions: true,
      permissions: [],
    },
  },
];

export default userRoutes;
