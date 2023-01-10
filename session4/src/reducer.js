// Add item in Todo List
// action -> type
// action -> id
// action -> text

// Remove Todo Item
// action -> type
// action -> id

// Mark an item as completed
// action -> type
// action -> id

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";

const reducer = (state, action) => {
  console.log(state);
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        id: action.id,
        text: action.text,
        completed: false,
      };

      return [...state, newTodo];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case COMPLETE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, completed: true };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

export default reducer;
