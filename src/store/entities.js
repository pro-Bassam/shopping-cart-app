import { combineReducers } from "redux";
import cartReducr from "./Cart";
// import userReducer from "./users";

export default combineReducers({
  cart: cartReducr,
  // users: userReducer,
});
