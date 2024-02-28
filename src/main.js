import { createApp } from "vue";
import { createPinia } from "pinia";
import piniaPersist from "pinia-plugin-persist";
import VueProgressBar from "@aacassandra/vue3-progressbar";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import loadingButton from "./components/shared/loadingButton.vue";

import App from "./App.vue";
import router from "./router";
import { useAuthStore } from "./stores/modules/auth";
import { hasPermissions } from "./composables/checkAuthorize";
import { primevueComponents } from "./services/prime-compo";
import "./assets/main.css";
import "primevue/resources/themes/lara-light-green/theme.css";
import "primeicons/primeicons.css";

router.beforeEach((to) => {
  window.scrollTo(0, 0);

  const authStore = useAuthStore();

  if (to.meta.requiresAuth && authStore.getToken == "") {
    return {
      path: "/login",
    };
  }

  if (to.meta.requiresVisitor && authStore.getToken != "") return "/admin";

  if (to.meta.requirePermissions) {
    if (authStore.permissions.length == 0 || authStore.roles.length == 0) {
      authStore.$reset();
      return {
        path: "/login",
      };
    }

    if (!hasPermissions(to.meta.permissions)) {
      return {
        path: "/page-not-found",
      };
    }
  }
});

const app = createApp(App);

//Components
app.component("LoadingButton", loadingButton);

app.use(createPinia().use(piniaPersist));
app.use(router);
app.use(VueProgressBar, {
  color: "rgb(143, 255, 199)",
  failedColor: "red",
});
const options = {
  position: "top-right",
  timeout: 2951,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  showCloseButtonOnHover: true,
  closeButton: "button",
};
primevueComponents(app);
app.use(Toast, options);

app.mount("#app");
