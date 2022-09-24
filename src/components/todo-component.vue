<script lang="ts" setup>
import { ref } from "vue";
import { useTodoStore } from "@/todosStore";
let store = useTodoStore();
let editted = ref("");
let isEditting = ref(true);
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
  <li>
    <div class="flex items-center">
      <div class="mr-5">
        {{ props.value }}
      </div>
      <div class="bg-red-500 text-white mr-5">
        <button @click="deleteSelf">X</button>
      </div>
      <div class="bg-gray-500 text-white mr-1">
        <button @click="isEditting = !isEditting">Edit</button>
      </div>
      <input
        type="text"
        placeholder="Enter New"
        v-model="editted"
        :class="{ hidden: isEditting }"
      />
      <button @click="edit" :class="{ hidden: isEditting }">Finish edit</button>
    </div>
  </li>
</template>
<style scoped>
.hidden {
  display: none;
}
</style>
