<script lang="ts" setup>
import { useTodoStore } from "@/todosStore";
let store = useTodoStore();
</script>
<template>
  <ul v-for="todo in store.todos" :key="todo">
    <li>{{ todo }}</li>
  </ul>
</template>
