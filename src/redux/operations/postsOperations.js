import axios from "axios";
import { deletePost, setPosts, getPostID } from "../actions/postsAction";
import { loaderOn, loaderOff } from "../actions/loaderAction";
import { setError } from "../actions/errorAction";

axios.defaults.baseURL = "https://simple-blog-api.crew.red/posts";

export const getPostOperation = () => async (dispatch) => {
  try {
    dispatch(loaderOn());
    const result = await axios.get();
    dispatch(setPosts(result.data));
  } catch (error) {
    dispatch(setError("Something went wrong"));
  } finally {
    dispatch(loaderOff());
  }
};

export const getPostContentOperation = (id) => async (dispatch) => {
  try {
    dispatch(loaderOn());
    const result = await axios.get(`/${id}?_embed=comments`);
    dispatch(getPostID(result.data));
  } catch (error) {
    dispatch(setError("Something went wrong"));
  } finally {
    dispatch(loaderOff());
  }
};

export const postPostOperation = (post) => async (dispatch) => {
  try {
    dispatch(loaderOn());
    await axios.post("/", post);
  } catch (error) {
    dispatch(setError("Something went wrong"));
  } finally {
    dispatch(loaderOff());
  }
};

export const editPostOperation = (post, id) => async (dispatch) => {
  try {
    dispatch(loaderOn());
    await axios.put(`/${id}`, post);
  } catch (error) {
    dispatch(setError("Something went wrong"));
  } finally {
    dispatch(loaderOff());
  }
};

export const removePostOperation = (id) => async (dispatch) => {
  try {
    dispatch(loaderOn());
    await axios.delete(`/${id}`);
    dispatch(deletePost(id));
  } catch (error) {
    dispatch(setError("Something went wrong"));
  } finally {
    dispatch(loaderOff());
  }
};
