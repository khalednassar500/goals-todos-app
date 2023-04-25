export const ADD_GOAL = "ADD_GOAL";
export const REMOVE_GOAL = "REMOVE_GOAL";
export const TOGGLE_GOAL = "TOGGLE_GOAL";
export const UPDATE_GOAL = "UPDATE_GOAL";

export const addGoal = (payload) => ({
  type: ADD_GOAL,
  payload,
});

export const removeGoal = (id) => ({
  type: REMOVE_GOAL,
  id,
});

export const toggleGoal = (id) => ({
  type: TOGGLE_GOAL,
  id,
});
export const updateGoal = (payload) => ({
  type: UPDATE_GOAL,
  payload,
});
