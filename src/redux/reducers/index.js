import { combineReducers } from "redux";

import { userDataReducer } from "./userDataReducer";
import { followersReducer } from "./followersReducer";
import { followingReducer } from "./followingReducer";

export const Reducers = combineReducers({
  userData: userDataReducer,
  followers: followersReducer,
  following: followingReducer
});
