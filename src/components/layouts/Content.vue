<script setup>
import { ref } from "vue";
const dateTime = ref(null);

const callDate = () => {
  dateTime.value = new Date();
};

setInterval(() => {
  callDate();
}, 1000);
</script>

<template>
  <div class="main-content">
    <div class="page-content">
      <RouterView />
    </div>
    <!-- End Page-content -->

    <footer class="footer">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-6">
            {{ dateTime }}
          </div>
          <div class="col-sm-6">
            <div class="text-sm-end d-none d-sm-block">
              Created by by <span class="text-primary fw-bold">Jelly</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
