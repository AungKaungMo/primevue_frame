import Master from "../../components/layouts/Master.vue";
import configPermission from "../../configs/permissions";
import userRoutes from "./user-role-permission/user.routes";
import categoryRoutes from "./category-store/category.routes";

const adminRoutes = [
  {
    path: "/admin",
    name: "admin-index",
    component: Master,
    meta: {
      requiresAuth: true,
      requirePermissions: true,
      permissions: [
        ...configPermission.USER,
        ...configPermission.ROLE,
        ...configPermission.PERMISSION,
        ...configPermission.CATEGORY,
      ],
    },
    children: [...userRoutes, ...categoryRoutes],
  },
];

export default adminRoutes;
