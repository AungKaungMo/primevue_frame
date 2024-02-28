import { computed } from "vue";
import { useAuthStore } from "@/stores/modules/auth";
import { useToast } from "vue-toastification";
import { useRouter } from "vue-router";

import { Http } from "@/services/http-common";

const isDeveloper = computed(() => {
   const store = useAuthStore();
   return store.roles.includes("Developer");
});

export function hasPermissions(permissions) {
   const store = useAuthStore();
   if (!store.permissions.length) {
      return false;
   }
   const permissionArray = permissions.filter((permission) => {
      return store.permissions.includes(permission);
   });
   return permissionArray.length > 0 || isDeveloper.value;
}

export function hasRoles(roles) {
   const store = useAuthStore();
   if (!store.roles.length) {
      return false;
   }
   const roleArray = roles.filter((role) => {
      return store.roles.includes(role);
   });
   return roleArray.length > 0 || isDeveloper.value;
}

export function hasRole(role) {
   const store = useAuthStore();
   if (!store.roles.length) {
      return false;
   }
   return store.roles.includes(role);
}

export function checkToken() {
   const authStore = useAuthStore();

   if (authStore.getToken != "") {
      Http.post("admin/auth/check-token").then((res) => {
         authStore.user.id = res.data.user.id;
         authStore.user.name = res.data.user.name;
         authStore.user.email = res.data.user.email;
         authStore.roles = res.data.user.roles;
         authStore.permissions = res.data.user.permissions;
      });
   }
}
