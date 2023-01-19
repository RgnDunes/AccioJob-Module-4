import { INITIAL_STORE_DATA } from "./reduxStore";
import { ADD_BOOK, UPDATE_BOOK_DATA, DELETE_BOOK } from "./reduxActions";

export const reduxReducer = (state = INITIAL_STORE_DATA, action) => {
  console.log("ACTION : ", action);
  switch (action.type) {
    case ADD_BOOK:
      //   const newBook = {};
      //   newBook.id = action.payload.id;
      //   newBook.name = action.payload.name;
      //   newBook.author = action.payload.author;
      //   newBook.page = action.payload.page;
      //   newBook.price = action.payload.price;
      //   newBook.currency = action.payload.currency;

      return {
        ...state,
        noOfBooks: state.noOfBooks + 1,
        bookList: [...state.bookList, action.payload],
      };

    case DELETE_BOOK:
      const newBookList = state.bookList.filter(
        (book) => book.id !== action.payload.id
      );
      return {
        ...state,
        noOfBooks: state.noOfBooks - 1,
        bookList: [...newBookList],
      };

    case UPDATE_BOOK_DATA:
      const updatedBookList = state.bookList.map((book) => {
        if (book.id === action.payload.id) {
          Object.keys(action.payload.modifications).map((key) => {
            book[key] = action.payload.modifications[key];
          });
        }

        return book;
      });

      return { ...state, bookList: [...updatedBookList] };

    default:
      return state;
  }
};

// action = {
//   type: "ADD_BOOK",
//   payload: {
//     id: "",
//     name: "",
//     author: "",
//     page: "",
//     price: "",
//     currency: "",
//   },
// };

// action = {
//   type: "DELETE_BOOK",
//   payload: {
//     id: "",
//   },
// };

// action = {
//   type: "UPDATE_BOOK_DATA",
//   payload: {
//     id: "",
//     modifications: {
//       currency: "Rupees",
//       page: 200,
//     },
//   },
// };
