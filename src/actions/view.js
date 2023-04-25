export const TOGGLE_VIEW = "TOGGLE_VIEW";
export const VIEW_TO_UPDATE = "VIEW_TO_UPDATE";

export const toggleView = () => ({
  type: TOGGLE_VIEW,
});

export const viewToUpdate = (payload) => ({
  type: VIEW_TO_UPDATE,
  payload,
});
