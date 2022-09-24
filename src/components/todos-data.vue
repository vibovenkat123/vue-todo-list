<script lang="ts" setup>
import { useTodoStore } from "@/todosStore";
import TodoComponent from "./todo-component.vue";
let store = useTodoStore();
</script>
<template>
  <div class="overflow-auto p-5">
    <ul v-for="todo in store.todos" :key="todo">
      <TodoComponent :value="todo" />
    </ul>
  </div>
</template>
