<template>
  <div class="container position-relative py-5 pt-5 mt-5">
    <div class="row justify-content-center g-2 py-5">
      <div class="col-12 col-lg-6 col-md-12">
        <!-- Todo: Add Heading Title  -->
        <HeadingTitle title="Semua Daftar Kegiatan" />
        <!-- Todo: Add Input Form -->
        <TodoAdd :todos="todos" />
        <!-- Todo: Add Search Item -->
        <div class="row justify-content-start g-2">
          <div class="col">
            <div class="mb-3">
              <input
                v-model="searchValues"
                type="text"
                class="form-control"
                id="search"
                placeholder="Cari Kegiatan..."
                aria-label="Cari Kegiatan..."
              />
            </div>
          </div>
        </div>
        <!-- Todo: Add Todolist Item -->
        <TodoList
          :todos="
            todos
              .filter((todo) =>
                todo.task.toLowerCase().includes(searchValues.toLowerCase())
              )
              .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
          "
        />

        {{ JSON.stringify(items) }}
      </div>
    </div>
  </div>
</template>

<script>
import { onUpdated, reactive, ref } from "vue";
import { initialData } from "@/utils/data/initialData";
import HeadingTitle from "../shared/HeadingTitle.vue";
import TodoAdd from "./TodoAdd.vue";
import TodoList from "./TodoList.vue";
export default {
  name: "TodoApp",
  components: { HeadingTitle, TodoAdd, TodoList },
  setup() {
    const todos = reactive(initialData);
    const searchValues = ref("");
    let items = null;

    onUpdated(() => {
      if (searchValues.value) {
        items = todos?.filter((todo) => {
          return todo.task
            .toLowerCase()
            .includes(searchValues.value.toLowerCase());
        });

        // return items
        console.log({ items });
      }
    });

    return { todos, searchValues, items };
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
