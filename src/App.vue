<template>
  <Navbar :brand="'Todo List'" />
  <TodoApp />
</template>

<script>
import Navbar from "./components/shared/Navbar.vue";
import TodoApp from "./components/features/TodoApp.vue";

export default {
  name: "App",
  components: {
    Navbar,
    TodoApp,
  },
};
</script>

<style scoped></style>
