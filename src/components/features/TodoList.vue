<template>
  <div class="row justify-content-start g-2 py-3">
    <div class="col">
      <div v-if="todos.length" class="vstack gap-2">
        <TodoItem
          v-for="(todo, index) in todos"
          :key="index"
          :todo="todo"
          :deleteTodo="deleteTodo"
          :completedTodo="completedTodo"
          :unCompletedTodo="unCompletedTodo"
        />
      </div>
      <TodoListEmpty v-else message="Belum Ada Daftar Kegiatan." />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import TodoListEmpty from "./TodoListEmpty.vue";
import TodoItem from "./TodoItem.vue";

export default {
  name: "TodoList",
  props: ["todos"],
  components: { TodoListEmpty, TodoItem },
  setup(props) {
    const { todos } = props;

    const completedTodo = ref((todoId) => {
      const items = todos.find((item) => item.id === todoId);
      items.completed = true;
    });

    const unCompletedTodo = ref((todoId) => {
      const items = todos.find((item) => item.id === todoId);
      items.completed = false;
    });

    const deleteTodo = ref((index) => {
      // return todos.find((item) => item.id === todoId);
      return todos.splice(index, 1);
    });

    return {
      todos,
      completedTodo,
      unCompletedTodo,
      deleteTodo,
    };
  },
};
</script>

<style></style>
