<template>
  <div class="row justify-content-start g-2 py-3">
    <div class="col">
      <h3 class="text-start text-white text-capitalize fst-medium">
        {{ title }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoHeadingTitle",
  props: ["title"],
};
</script>

<style></style>
