import { defineStore } from "pinia";
import { Ref, ref } from "vue";

export const useTodoStore = defineStore("todo", () => {
  const todos: Ref<string[]> = ref([]);
  function add(value: string) {
    todos.value.push(value);
  }
  function remove(value?: string | undefined) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const toRemove = todos.value.indexOf(value!);
    todos.value.splice(toRemove, 1);
  }
  function edit(value: string | undefined, newValue: string) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const toEdit = todos.value.indexOf(value!);
    todos.value[toEdit] = newValue;
  }
  return { todos, add, remove, edit };
});
