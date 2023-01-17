import { create } from "zustand";

const useStore = create((set) => ({
  todos: ["item1", "item2"],
  setTodos: (value) =>
    set((state) => {
      return { todos: [...state.todos, value] };
    }),
}));

export default useStore;
