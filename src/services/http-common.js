import axios from "axios";
import { useAuthStore } from "../stores/modules/auth";
import router from "../router";
import { useToast } from "vue-toastification";

const http = axios.create();
const toast = useToast();

http.interceptors.request.use(
   function (config) {
      const store = useAuthStore();

      config.baseURL = import.meta.env.VITE_APP_BASE_URL;
      config.headers.Authorization = "Bearer " + store.access_token;
      config.headers["Content-Type"] = "application/json";
      return config;
   },
   function error(error) {
      return Promise.reject(error.response);
   }
);

http.interceptors.response.use(
   (response) => {
      return response;
   },
   (err) => {
      if (err.response) {
         //Forbidden and Unthorized
         if (403 === err.response?.status || 401 === err.response?.status) {
            const authStore = useAuthStore();
            authStore.$reset();
            toast.error(
               "Something want wrong with your account! Please login again."
            );

            router.push({ name: "login" });
         }
         //Not Found
         if (404 === err.response?.status) {
            router.push({ name: "not-found" });
         }
         return Promise.reject(err.response);
      }
      return Promise.reject({ data: { message: err.message } });
   }
);
export const Http = http;

const httpPyawMae = axios.create();
httpPyawMae.interceptors.request.use(
   function (config) {
      config.baseURL = import.meta.env.VITE_APP_BASE_URL_PYAWMAE;
      config.headers["Content-Type"] = "application/json";
      return config;
   },
   function error() {
      return Promise.reject(error);
   }
);
export const HttpPyawMae = httpPyawMae;
