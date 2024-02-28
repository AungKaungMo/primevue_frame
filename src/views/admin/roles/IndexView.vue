<template>
   <div class="card container">
     <DataTable
       v-model:filters="filters"
       :value="roles"
       paginator
       :rows="10"
       :rowsPerPageOptions="[5, 10, 20, 50]"
       dataKey="id"
       filterDisplay="row"
       :loading="loading"
       :globalFilterFields="['name', 'email', 'created_at']"
     >
       <template #header>
         <div
           class="w-100 d-flex align-items-center justify-content-between mb-4"
         >
           <span class="p-input-icon-left">
             <i class="pi pi-search" />
             <InputText
               placeholder="Keyword Search"
               v-model="filters['global'].value"
             />
           </span>
           <!-- <button class=" btn btn-primary ">Add</button>
          -->
          <router-link :to="{name: 'roles-create'}">
           <Button label="Add" class="p-2 px-4 rounded" />
          </router-link>
          
         </div>
       </template>
       <template #empty><p class="text-center">No roles found.</p> </template>
       <template #loading> Loading roles data. Please wait. </template>
       <Column field="id" header="ID" sortable></Column>
       <Column field="name" header="Name" sortable> </Column>
       <Column field="created_at" sortable header="Created At"> </Column>
       <Column header="Actions">
         <template #body="slotProps">
          <router-link :to="`roles/${slotProps.data.id}`">
           <Button
             icon="pi pi-pencil"
             severity="secondary"
             class="p-2 px-2 rounded editBtn"
             outlined
             size="small"
           />
          </router-link>
         </template>
       </Column>
     </DataTable>
   </div>
 </template>
 
 <script setup>
 import { ref, onMounted } from "vue";
 import { FilterMatchMode } from "primevue/api";
 
 const roles = ref();
 const filters = ref({
   global: { value: null, matchMode: FilterMatchMode.CONTAINS },
 });
 
 const loading = ref(true);
 
 onMounted(() => {
   loading.value = false;
   roles.value = [
     {
       id: 1,
       name: "Admin",
       created_at: "2023-11-20",
     },
   ];
 });
 
 </script>
 
 <style scoped>
 .editBtn {
   transition: all 0.2s;
 }
 .editBtn:hover {
   color: white;
   background-color: #10b981;
 }
 </style>