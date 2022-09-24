<script lang="ts" setup>
import { useTodoStore } from "@/todosStore";
let store = useTodoStore();
const props = defineProps({
  value: String,
});
function deleteSelf() {
  store.remove(props.value);
}
</script>
<template>
  <li>
    <div class="flex items-center">
      <div class="mr-5">
        {{ props.value }}
      </div>
      <div class="bg-red-500 text-white">
        <button @click="deleteSelf">X</button>
      </div>
    </div>
  </li>
</template>
