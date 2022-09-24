import { defineStore } from "pinia";
import { Ref, ref } from "vue";

export const useTodoStore = defineStore("todo", () => {
  const todos: Ref<string[]> = ref([]);
  function add(value: string) {
    todos.value.push(value);
  }
  return { todos, add };
});
