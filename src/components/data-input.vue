<script lang="ts" setup>
import { useTodoStore } from "../todosStore";
import { ref } from "vue";
let currentInputTodo = ref("");
const store = useTodoStore();
function submit() {
  store.add(currentInputTodo.value);
  currentInputTodo.value = "";
}
</script>
<template>
  <input type="text" v-model="currentInputTodo" class="bg-black text-white" />
  <button @click="submit">submit</button>
</template>
