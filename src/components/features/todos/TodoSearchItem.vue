<template>
  <div class="row justify-content-start g-2">
    <div class="col">
      <div class="mb-3">
        <input
          v-model="inputValue"
          @input="updateInputValue"
          type="text"
          class="form-control"
          id="search"
          :placeholder="title"
          :aria-label="title"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
// Define emits
export default {
  name: "TodoSearchItem",
  emits: ["inputValues"],
  props: ["title"],
  setup(_, { emit }) {
    const inputValue = ref("");

    const updateInputValue = (event) => {
      inputValue.value = event.target.value;
      emit("inputValues", inputValue.value);
    };

    return { updateInputValue, inputValue };
  },
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
