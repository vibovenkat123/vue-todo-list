import { defineStore } from "pinia";
import { Ref, ref, watch } from "vue";
export const useTodoStore = defineStore("todo", () => {
  const todos: Ref<string[]> = ref([]);
  watch(
    todos,
    (todosVal) => {
      localStorage.setItem("todos", JSON.stringify(todosVal));
    },
    { deep: true }
  );
  if (localStorage.getItem("todos")) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    todos.value = JSON.parse(localStorage.getItem("todos")!);
  }
  function add(value: string) {
    todos.value.push(value);
    if (todos.value.length !== new Set(todos.value).size) {
      alert("Don't enter same todos");
      todos.value.pop();
    }
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
    if (todos.value.length !== new Set(todos.value).size) {
      alert("Don't enter same todos");
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      todos.value[toEdit] = value!;
    }
  }
  return { todos, add, remove, edit };
});
