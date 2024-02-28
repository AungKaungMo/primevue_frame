<template>
   <!-- Begin page -->
   <div id="layout-wrapper">
      <vue-progress-bar></vue-progress-bar>
      <TopBar />

      <!-- ========== Left Sidebar Start ========== -->
      <LeftSidebar />
      <!-- Left Sidebar End -->



      <!-- ============================================================== -->
      <!-- Start right Content here -->
      <!-- ============================================================== -->
      <Content />
      <!-- end main content-->

   </div>
   <!-- END layout-wrapper -->

</template>

<script setup>
import { onMounted } from 'vue';

import TopBar from './TopBar.vue';
import LeftSidebar from './LeftSidebar.vue';
import Content from './Content.vue';

onMounted(() => {
   $("#side-menu").metisMenu();
})
</script>