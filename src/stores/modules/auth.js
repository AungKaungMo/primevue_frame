import { defineStore } from "pinia";
import { Http } from "../../services/http-common";

export const useAuthStore = defineStore("auth", {
   state: () => ({
      access_token: "",
      roles: {},
      permissions: {},
      user: {
         id: null,
         name: "",
         email: "",
      },
   }),
   getters: {
      getToken(state) {
         return state.access_token;
      },
      getName(state) {
         return state.user.name;
      },
      getUserId(state) {
         return state.user.id;
      },
   },
   actions: {
      login(email, password) {
         return new Promise((resolve, reject) => {
            const bodyParameter = {
               email: email,
               password: password,
            };

            Http.post("admin/auth/login", bodyParameter)
               .then((res) => {
                  this.access_token = res.data.token;
                  this.user.id = res.data.user.id;
                  this.user.name = res.data.user.name;
                  this.user.email = res.data.user.email;
                  this.roles = res.data.user.roles;
                  this.permissions = res.data.user.permissions;
                  resolve(res);
               })
               .catch((error) => {
                  reject(error);
               });
         });
      },

      logout() {
         return new Promise((resolve, reject) => {
            this.access_token = "";
            this.user.name = "";
            this.user.email = "";
            this.roles = {};
            this.permissions = {};
            resolve("Successfully Logout");
         });
      },
   },
   //Save custom data through page refresh
   persist: {
      enabled: true,
      strategies: [
         {
            storage: localStorage,
            paths: ["user", "access_token", "roles", "permissions"],
         },
      ],
   },
});
