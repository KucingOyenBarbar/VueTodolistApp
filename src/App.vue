<template>
  <Navbar :brand="'Todo List'" />
  <TodoIndex />
</template>

<script setup>
import Navbar from "./components/shared/Navbar.vue";
import TodoIndex from "./views/Index.vue";
</script>
