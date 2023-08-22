<template>
  <div class="d-flex justify-content-center g-2 mx-auto pt-3">
    <p class="text-start text-white-50 text-capitalize fst-normal fs-6">
      {{ message }}
    </p>
  </div>
</template>

<script setup>
const props = defineProps(["message"]);
</script>

<style></style>
