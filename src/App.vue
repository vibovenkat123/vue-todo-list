<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div
      class="flex flex-col justify-center items-center border-2 border-gray-500 h-3/4 w-1/3"
    >
      <TodosData />
      <DataInput />
    </div>
  </div>
</template>

<script lang="ts" setup>
import DataInput from "./components/data-input.vue";
import TodosData from "./components/todos-data.vue";
</script>
