<script lang="ts" setup>
import { useTodoStore } from "../todosStore";
import { ref } from "vue";
let currentInputTodo = ref("");
const store = useTodoStore();
function submit() {
  if (currentInputTodo.value.length > 100) {
    alert("To much characters");
    return false;
  }
  store.add(currentInputTodo.value);
  currentInputTodo.value = "";
}
</script>
<template>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
  />
  <div class="flex flex-col items-center mt-5 mb-5">
    <input
      type="text"
      v-model="currentInputTodo"
      class="bg-white text-black border-gray-400 border-2 rounded-xl p-2"
    />
    <button
      @click="submit"
      class="bg-slate-800 mt-5 text-white w-1/3 h-12 rounded-xl hover:bg-white hover:border-slate-800 hover:border-2 hover:text-slate-800"
    >
      <span class="material-symbols-outlined mt-1"> add </span>
    </button>
  </div>
</template>
