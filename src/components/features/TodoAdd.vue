<template>
  <div class="row justify-content-start g-2 py-3">
    <div class="col">
      <form @submit.prevent="saveTodos">
        <div class="input-group mb-3">
          <input
            v-model="task"
            type="text"
            class="form-control text-start text-white fst-medium fs-5 px-0 mx-0"
            placeholder="Tuliskan Kegiatan..."
            aria-label="Tuliskan Kegiatan..."
            aria-describedby="basic-addon2"
          />
          <button type="submit" class="btn btn-primary btn-md rounded-0 fs-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              font-size="28"
              width="70"
              height="1em"
              color="white"
              viewBox="0 0 512 512"
            >
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M288 109.3V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V109.3l-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352H192c0 35.3 28.7 64 64 64s64-28.7 64-64H448c35.3 0 64 28.7 64 64v32c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V416c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import { ref } from "vue";

export default {
  name: "TodoAdd",
  props: ["todos"],
  setup(props) {
    const { todos } = props;
    const task = ref("");

    const saveTodos = ref(() => {
      if (Boolean(task.value.length)) {
        const newTodos = {
          id: nanoid(16),
          task: task.value,
          completed: false,
          createdAt: new Date().toISOString(),
          updatedAt: null,
        };

        todos.push(newTodos);

        task.value = null;
      }

      return null;
    });

    return { todos, task, saveTodos };
  },
};
</script>

<style scoped>
input {
  height: 60px;
  border-radius: 0;
  border-top: 0;
  border-left: 0;
  transition: ease 500ms;
}

input:focus {
  border: 1px groove #4c0bce;
}
</style>
