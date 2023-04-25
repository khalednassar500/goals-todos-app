import { TOGGLE_VIEW, VIEW_TO_UPDATE } from "../actions/view";

export default function views(state = {}, action) {
  switch (action.type) {
    case TOGGLE_VIEW:
      return Object.assign({}, { value: !state.value });
    case VIEW_TO_UPDATE:
      return Object.assign({}, state, action.payload, { value: !state.value });
    default:
      return {};
  }
}
