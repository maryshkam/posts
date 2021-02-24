import { combineReducers } from "redux";
import posts from "./postsReducer";
import loader from "./loaderReducer";
import error from "./errorReducer";

const rootReducer = combineReducers({
  mainPosts: posts,
  loader,
  error,
});

export default rootReducer;
