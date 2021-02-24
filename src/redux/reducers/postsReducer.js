import { combineReducers } from "redux";
import {
  GET_POST,
  DELETE_ITEM,
  SET_POSTS,
} from "../constants/postConstant";

const initialState = [];

const posts = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ITEM:
      return state.filter((post) => post.id !== action.payload);
    case SET_POSTS:
      return action.payload;
    default:
      return state;
  }
};

const singlePost = (state = null, action) => {
  switch (action.type) {
    case GET_POST:
      return action.payload;
    case DELETE_ITEM:
      return null;
    default:
      return state;
  }
};

export default combineReducers({ posts, singlePost });
