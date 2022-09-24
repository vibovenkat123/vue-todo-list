<script lang="ts" setup>
import { ref } from "vue";
import { useTodoStore } from "@/todosStore";
let store = useTodoStore();
let editted = ref("");
let isEditting = ref(true);
console.log(store.todos.length);
const props = defineProps({
  value: String,
});
function deleteSelf() {
  store.remove(props.value);
}
function edit() {
  store.edit(props.value, editted.value);
}
</script>
<template>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
  />
  <li class="max-w-lg">
    <div
      class="flex items-center justify-between mt-5 border-gray-300 border-2 p-2 rounded-xl"
    >
      <div
        class="text-white bg-gray-400 rounded-md mr-5 border-2 border-gray-400 hover:text-gray-400 hover:bg-white"
      >
        <button @click="deleteSelf" class="w-10 text-2xl">-</button>
      </div>
      <div class="mr-5 text-2xl break-words">
        {{ props.value }}
      </div>
      <div class="mr-1">
        <button
          @click="isEditting = !isEditting"
          class="hover:bg-white hover:text-slate-700 hover:border-slate-700 hover:border-2 flex justify-center items-center bg-slate-700 rounded-md text-white w-10 h-8"
        >
          <span class="material-symbols-outlined"> edit </span>
        </button>
      </div>
      <input
        type="text"
        placeholder="Enter New"
        v-model="editted"
        :class="{ hidden: isEditting }"
        class="ml-2 mr-2 border-2 p-1 rounded-md border-gray-600"
      />
      <button
        @click="edit"
        :class="{ hidden: isEditting }"
        class="bg-gray-600 text-white rounded-md p-1"
      >
        Finish edit
      </button>
    </div>
  </li>
</template>
<style scoped>
.hidden {
  display: none;
}
</style>
