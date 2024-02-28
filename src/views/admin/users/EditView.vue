<template>
    <div class="container">
      <div class="d-flex align-items-center">
        <router-link :to="{name: 'users'}">
          <span class="pi pi-arrow-left text-black"></span>
        </router-link>
        <h3 class="my-3 ms-4">Edit Form</h3>
      </div>
      <div class="card">
        <div class="card-body">
          <div class="row justify-content-center">
            <div class="col-xl-5 me-5">
              <form @submit="handleForm">
                <div class="mb-3">
                  <label for="name">Name</label>
                  <InputText
                    id="name"
                    type="text"
                    v-model="name"
                    :class="{ 'p-invalid': nameErrorMessage }"
                  />
                  <small
                    class="p-error"
                    v-if="nameErrorMessage"
                    id="name-error"
                    >{{ nameErrorMessage || "&nbsp" }}</small
                  >
                </div>
  
                <div class="mb-3">
                  <label for="email">Email</label>
                  <InputText
                    id="email"
                    type="text"
                    v-model="email"
                    :class="{ 'p-invalid': emailErrorMessage }"
                  />
                  <small
                    class="p-error"
                    v-if="emailErrorMessage"
                    id="email-error"
                    >{{ emailErrorMessage || "&nbsp" }}</small
                  >
                </div>
  
                <div class="mb-3">
                  <label for="password">Password</label>
                  <Password
                    id="password"
                    class="w-100"
                    v-model="password"
                    toggleMask
                    :feedback="false"
                    :class="{ 'p-invalid': passwordErrorMessage }"
                  />
                  <small
                    class="p-error"
                    v-if="passwordErrorMessage"
                    id="password-error"
                    >{{ passwordErrorMessage || "&nbsp" }}</small
                  >
                </div>
  
                <div class="mb-4">
                  <label for="role">Roles</label>
                  <MultiSelect
                    id="role"
                    :options="nodes"
                    optionLabel="name"
                    placeholder="Assign Role"
                    class="w-100"
                    v-model="role"
                    :class="{ 'p-invalid': roleErrorMessage }"
                  />
                  <small
                    class="p-error"
                    v-if="roleErrorMessage"
                    id="role-error"
                    >{{ roleErrorMessage || "&nbsp" }}</small
                  >
                </div>
  
                <div class="mb-3 text-center">
                  <Button
                    :loading="isLoading"
                    label="Submit"
                    class="py-2 px-3 rounded"
                    type="submit"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from "vue";
  import { useField, useForm } from "vee-validate";
  const { handleSubmit, resetForm } = useForm();
  
  const { value: name, errorMessage: nameErrorMessage } = useField(
    "name",
    (value) => validateField(value, "Name")
  );
  const { value: email, errorMessage: emailErrorMessage } = useField(
    "email",
    (value) => validateField(value, "Email")
  );
  const { value: password, errorMessage: passwordErrorMessage } = useField(
    "password",
    (value) => validateField(value, "Password")
  );
  const { value: role, errorMessage: roleErrorMessage } = useField(
    "role",
    (value) => validateField(value, "Role")
  );
  
  const isLoading = ref(false);
  const nodes = ref([
    { id: 1, name: "Admin" },
    { id: 2, name: "Super Admin" },
  ]);
  
  const validateField = (value, field) => {
    if (!value) {
      return `${field} is required.`;
    }
    if (field == "Email" && !value.includes("@")) {
      return `Invalid email.`;
    }
    return true;
  };
  const handleForm = handleSubmit(async (values) => {
    console.log(values, "valeu");
  });
  onMounted(() => {
    name.value = "AUnG AUGN",
    email.value = "HELA@gmail.com",
    password.value = "ps2i1",
    role.value = [
        {id: 1, name: 'Admin'}
    ]
  })
  </script>
