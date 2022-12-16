import { combineReducers } from "redux";
import todosReducer from "./pages/todo/features/todosSlice";

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  todos: todosReducer,
});

export default rootReducer;
