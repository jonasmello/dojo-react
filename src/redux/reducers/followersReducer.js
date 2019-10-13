const initialState = [];
export function followersReducer(state = initialState, action) {
  if (action.type === "SET_FOLLOWERS") {
    return action.followers;
  }
  return state;
}
