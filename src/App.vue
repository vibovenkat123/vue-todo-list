<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <div
      class="flex flex-col justify-center items-center border-2 border-gray-500 h-screen w-screen 2xl:w-1/3 2xl:h-3/4 lg:w-1/2 lg:h-4/5"
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
