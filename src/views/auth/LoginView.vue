<template>
  <div class="account-pages my-5 pt-sm-5 overflow-hidden" style="height: 89vh">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="text-center">
            <!-- <a href="index.html" class="mb-5 d-block auth-logo">
               <img
                 src="@/assets/images/panda.png"
                 alt=""
                 height="30"
                 class="logo logo-light"
               />
               <img
                 src="@/assets/images/panda.png"
                 alt=""
                 height="30"
                 class="logo logo-dark"
               />
             </a> -->
          </div>
        </div>
      </div>

      <div class="mt-3 row p-5 shadow-lg rounded-3">
        <div class="col-md-6 col-12 mt-5">
          <div>
            <h2 class="fw-bold mb-0">E Market</h2>
            <p>Market Place Management</p>
          </div>
          <div class="py-5 mt-2">
            <form @submit="handleLogin">
              <div class="mb-3">
                <label class="form-label w-100 text-start" for="email"
                  >Email</label
                >
                <InputText
                  type="text"
                  v-model="email"
                  class="w-100"
                  :class="{ 'p-invalid': emailErrorMessage }"
                  aria-describedby="email-error"
                />
                <br />
                <small
                  class="p-error w-100"
                  v-if="emailErrorMessage"
                  id="email-error"
                  >{{ emailErrorMessage || "&nbsp" }}</small
                >
              </div>

              <div class="mb-3">
                <label class="form-label w-100 text-start" for="password"
                  >Password</label
                >
                <Password
                  type="text"
                  v-model="password"
                  class="w-100"
                  :feedback="false"
                  :class="{ 'p-invalid': passwordErrorMessage }"
                  aria-describedby="password-error"
                />
                <br />
                <small
                  class="p-error w-100"
                  v-if="passwordErrorMessage"
                  id="password-error"
                  >{{ passwordErrorMessage || "&nbsp" }}</small
                >
              </div>

              <br />
              <div class="mt-1 text-center w-100">
                <loadingButton
                  :loading="isLoading"
                  :btnText="'SignIn'"
                  @click="handleLogin"
                />
                <!-- <Button
                  class="py-2 px-4 rounded"
                  label="SignIn"
                  type="submit"
                /> -->
                <!-- <LoadingButton :loading="isLoading" :btnText="'SignIn'" @click="submit" /> -->
              </div>
            </form>
          </div>
        </div>
        <div class="col-md-6 d-md-block d-none">
          <div>
            <img
              src="../../assets/images/3947690.jpg"
              style="width: 100%; height: 100%"
            />
          </div>
        </div>
      </div>
      <!-------->
      <!-- end row -->
    </div>
    <!-- end container -->
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/modules/auth";
import loadingButton from "../../components/shared/loadingButton.vue";

import { useToast } from "vue-toastification";
import { useField, useForm } from "vee-validate";
const { handleSubmit, resetForm } = useForm();

const authStore = useAuthStore();
const router = useRouter();
const toast = useToast();
const isLoading = ref(false);

const { value: email, errorMessage: emailErrorMessage } = useField(
  "email",
  (value) => validateField(value, "Email")
);
const { value: password, errorMessage: passwordErrorMessage } = useField(
  "password",
  (value) => validateField(value, "Password")
);

const handleLogin = handleSubmit(async (values) => {
  isLoading.value = true;
  await authStore
    .login(values.email, values.password)
    .then((res) => {
      if (
        res.data.user.permissions.length == 0 ||
        res.data.user.roles.length == 0
      ) {
        toast.error("You don't have any permissions to access!");
      } else {
        console.log(res.data, "res data");
        toast.error("Something went wrong");
      }
      router.push({ name: "admin-index" });
    })
    .catch((err) => {
      // if (err.status == 404 || err.status == 422) {
      toast.error(err.data.message);
      return;
      // }
    });

  isLoading.value = false;
});

const validateField = (value, fieldName) => {
  if (!value) {
    return `${fieldName} is required.`;
  }
  if (fieldName == "Email" && !value.includes("@")) {
    return `Invalid email`;
  }
  return true;
};

onMounted(() => {
  document.body.classList.add("authentication-bg");
});

onUnmounted(() => {
  document.body.classList.remove("authentication-bg");
});
</script>
<style scoped>
input.p-inputtext.p-component.p-password-input {
  width: 100% !important;
}
</style>
