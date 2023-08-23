<template>
  <div class="container position-relative py-5 pt-5 mt-5">
    <div class="row justify-content-center g-2 py-5">
      <div class="col-12 col-lg-6 col-md-12">
        <HeadingTitle title="Semua Daftar Kegiatan" />
        <TodoAddFormInput @saveTodos="addTodoHandler" />
        <TodoSearchItem
          title="Cari Daftar Kegiatan..."
          @inputValues="handleSearchValues"
        />

        <TodoList
          @delete-todo="deleteTodo"
          :todos="
            todos
              .filter((item) => {
                return item.task
                  .toLowerCase()
                  .includes(searchValues.toLowerCase());
              })
              .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
          "
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { nanoid } from "nanoid";
import { initialData } from "@/utils/data/initialData";
import HeadingTitle from "@/components/shared/HeadingTitle.vue";
import TodoAddFormInput from "@/components/features/todos/TodoAddFormInput.vue";
import TodoSearchItem from "@/components/features/todos/TodoSearchItem.vue";
import TodoList from "@/components/features/todos/TodoList.vue";

const todos = reactive(initialData);
const searchValues = ref("");
const task = ref("");

const addTodoHandler = (value) => {
  if (Boolean(value)) {
    const newTodos = {
      id: nanoid(16),
      task: value,
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: null,
    };
    todos.push(newTodos);
  }
  return null;
};

const handleSearchValues = (value) => {
  searchValues.value = value;
};

const deleteTodo = (value) => {
  return todos?.splice(value, 1);
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
