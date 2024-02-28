<template>
   <div class="container">
     <div class="d-flex align-items-center">
       <router-link :to="{name: 'roles'}">
         <span class="pi pi-arrow-left text-black"></span>
       </router-link>
       <h3 class="my-3 ms-4">Add Form</h3>
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
                   placeholder="Enter Name"
                   :class="{ 'p-invalid': nameErrorMessage }"
                 />
                 <small
                   class="p-error"
                   v-if="nameErrorMessage"
                   id="name-error"
                   >{{ nameErrorMessage || "&nbsp" }}</small
                 >
               </div>
 
               <div class="mb-4">
                 <label for="role">Permissions</label>
                 <MultiSelect
                   id="permission"
                   :options="nodes"
                   optionLabel="name"
                   placeholder="Assign Permissions"
                   class="w-100"
                   v-model="permission"
                   :class="{ 'p-invalid': permissionErrorMessage }"
                 />
                 <small
                   class="p-error"
                   v-if="permissionErrorMessage"
                   id="permission-error"
                   >{{ permissionErrorMessage || "&nbsp" }}</small
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
 import { ref } from "vue";
 import { useField, useForm } from "vee-validate";
 const { handleSubmit, resetForm } = useForm();
 
 const { value: name, errorMessage: nameErrorMessage } = useField(
   "name",
   (value) => validateField(value, "Name")
 );
 const { value: permission, errorMessage: permissionErrorMessage } = useField(
   "permission",
   (value) => validateField(value, "Permission")
 );
 
 const isLoading = ref(false);
 const nodes = ref([
   { id: 1, name: "user-list" },
   { id: 2, name: "user-list-create" },
   { id: 3, name: "user-list-edit" },
 ]);
 
 const validateField = (value, field) => {
   if (!value) {
     return `${field} is required.`;
   }
   return true;
 };
 const handleForm = handleSubmit(async (values) => {
   console.log(values, "valeu");
 });
 // handleSubmit = async(values) => {
 //   console.lo
 // }
 </script>
 