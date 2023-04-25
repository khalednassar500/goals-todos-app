export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

export const removeTodo = (id) => ({
  type: REMOVE_TODO,
  id,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});
export const updateTodo = (payload) => ({
  type: UPDATE_TODO,
  payload,
});
