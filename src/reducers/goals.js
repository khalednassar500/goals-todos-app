import {
  ADD_GOAL,
  REMOVE_GOAL,
  TOGGLE_GOAL,
  UPDATE_GOAL,
} from "../actions/goals";

export default function goals(state = [], action) {
  switch (action.type) {
    case ADD_GOAL:
      return [...state, action.payload];
    case REMOVE_GOAL:
      return state.filter((goal) => goal.id !== action.id);
    case TOGGLE_GOAL:
      return state.map((goal) =>
        goal.id !== action.id
          ? goal
          : Object.assign({}, goal, { complete: !goal.complete })
      );
    case UPDATE_GOAL:
      return state.map((goal) =>
        goal.id !== action.payload.id ? goal : action.payload
      );
    default:
      return state;
  }
}
