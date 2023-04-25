import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
} from "../actions/todos";

export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.id);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id !== action.id
          ? todo
          : Object.assign({}, todo, { complete: !todo.complete })
      );
    case UPDATE_TODO:
      return state.map((todo) =>
        todo.id !== action.payload.id ? todo : action.payload
      );
    default:
      return state;
  }
}
