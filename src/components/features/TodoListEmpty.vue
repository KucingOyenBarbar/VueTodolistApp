<template>
  <div class="d-flex justify-content-center g-2 mx-auto">
    <p class="text-start text-white-50 text-capitalize fst-normal fs-6">
      {{ message }}
    </p>
  </div>
</template>

<script>
export default {
  name: "TodoListEmpty",
  props: ["message"],
};
</script>

<style></style>
