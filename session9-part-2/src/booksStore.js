import { create } from "zustand";

const booksStore = create((set) => ({
  books: [
    {
      name: "Arms and the Man",
      author: "George Bernard Shaw",
    },
    {
      name: "Merchant of Venice",
      author: "William Shakespeare",
    },
  ],
}));

export { booksStore };
