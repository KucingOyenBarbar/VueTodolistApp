<template>
  <div class="row justify-content-start g-2">
    <div class="col">
      <div class="mb-3">
        <input
          v-model="searchValues"
          type="text"
          class="form-control"
          id="search"
          placeholder="Cari Kegiatan..."
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoSearchItem",
  props: ["searchValues"],
};
</script>

<style scoped>
input {
  height: 50px;
  border-radius: 0;
}

input:hover {
  border: 1px groove #4c0bce;
}
input:focus {
  border: 1px groove #4c0bce;
}
</style>
