<template>
  <button :disabled="props.loading" class="primaryMainColor" type="button">
    <span
      v-if="props.loading"
      class="spinner-border spinner-border-sm me-1"
      role="status"
      aria-hidden="true"
    ></span>
    {{ text }}
  </button>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps(["loading", "btnText"]);

const text = computed(() => {
  return props.loading ? "Loading..." : props.btnText;
});
</script>
