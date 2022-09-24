import { useTodoStore } from "./todosStore";
export default {
  setup() {
    const store = useTodoStore();
    return {
      store,
    };
  },
};
