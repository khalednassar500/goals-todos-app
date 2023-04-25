import { combineReducers } from "redux";
import todos from "./todos";
import goals from "./goals";
import views from "./view";

export default combineReducers({ todos, goals, views });
