const initialState = {};
export function userDataReducer(state = initialState, action) {
  if (action.type === "SET_USER_DATA") {
    return action.userData;
  }
  return state;
}
