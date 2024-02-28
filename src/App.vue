<template>
  <RouterView />
</template>

<script setup>
import { onMounted } from "vue";
import { checkToken } from "@/composables/checkAuthorize";

onMounted(() => {
  checkToken();
});
</script>
<style>
body {
  overflow: hidden;
}
</style>
