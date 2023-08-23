<template>
  <div>
    <div v-if="todos.length" class="vstack gap-2">
      <div class="card" v-for="(todo, index) in todos" :key="index">
        <div class="card-body">
          <div class="d-flex justify-content-end g-2 mb-3">
            <span
              v-if="todo.completed"
              class="badge rounded-pill text-bg-warning"
              >Ditandai Selesai</span
            >
            <span v-else class="badge rounded-pill text-bg-success">
              Aktif</span
            >
          </div>
          <div class="d-flex justify-content-between g-2 pt-3">
            <div>
              <h5
                v-if="todo.completed"
                class="card-title text-start text-white text-capitalize text-break fw-medium lh-sm text-decoration-line-through"
              >
                {{ displayTaskTodo(todo.task) }}
              </h5>
              <h5
                v-else
                class="card-title text-start text-white text-capitalize text-break fw-medium lh-sm"
              >
                {{ displayTaskTodo(todo.task) }}
              </h5>
              <span class="card-subtitle text-muted">
                {{ useFormatDate(todo.createdAt) }}
              </span>
            </div>

            <div>
              <div class="hstack gap-2">
                <button
                  @click="deleteTodo(index)"
                  title="Hapus Kegiatan"
                  type="button"
                  class="btn btn-danger btn-md rounded"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"
                    />
                  </svg>
                </button>
                <button
                  v-if="!todo.completed"
                  @click="completedTodo(todo.id)"
                  title="Tandai Sudah Selesai"
                  type="button"
                  class="btn btn-warning btn-md rounded"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 448 512"
                  >
                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
                    />
                  </svg>
                </button>
                <button
                  v-else
                  @click="unCompletedTodo(todo.id)"
                  title="Aktifkan Kegiatan"
                  type="button"
                  class="btn btn-warning btn-md rounded"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M125.7 160H176c17.7 0 32 14.3 32 32s-14.3 32-32 32H48c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32s32 14.3 32 32v51.2L97.6 97.6c87.5-87.5 229.3-87.5 316.8 0s87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3s-163.8-62.5-226.3 0L125.7 160z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <TodoListIsEmpty v-else message="Belum Ada Daftar Kegiatan" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import TodoListIsEmpty from "./TodoListIsEmpty.vue";
import { useFormatDate } from "../../../composable/useFormatDate";

const props = defineProps(["todos"]);
const emits = defineEmits(["deleteTodo"]);

const displayTaskTodo = ref((task) => {
  return task.length > 50 ? `${task.substring(0, 50)}...` : task;
});

const completedTodo = ref((todoId) => {
  const items = props.todos.find((item) => item.id === todoId);
  items.completed = true;
  items.updatedAt = new Date().toISOString();
});

const unCompletedTodo = ref((todoId) => {
  const items = props.todos.find((item) => item.id === todoId);
  items.completed = false;
  items.updatedAt = new Date().toISOString();
});

const deleteTodo = (index) => {
  emits("deleteTodo", index);
};
</script>

<style></style>
