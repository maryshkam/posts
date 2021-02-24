import {
  GET_POST,
  DELETE_ITEM,
  SET_POSTS,
} from "../constants/postConstant";

export const deletePost = (id) => ({
  type: DELETE_ITEM,
  payload: id,
});

export const setPosts = (posts) => ({
  type: SET_POSTS,
  payload: posts,
});

export const getPostID = (post) => ({
  type: GET_POST,
  payload: post,
});
