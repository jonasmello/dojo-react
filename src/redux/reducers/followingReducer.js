const initialState = [];
export function followingReducer(state = initialState, action) {
  if (action.type === "SET_FOLLOWING") {
    return action.following;
  }
  return state;
}
