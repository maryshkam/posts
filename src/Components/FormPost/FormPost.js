import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import {
  postPostOperation,
  getPostContentOperation,
  editPostOperation,
} from "../../redux/operations/postsOperations";
import styles from "./FormPost.module.css";

const formInitialState = {
  title: "",
  body: "",
};

const FormPost = () => {
  const [{ title, body }, setForm] = useState({ ...formInitialState });
  const { postId } = useParams();
  const post = useSelector((store) => store.mainPosts.singlePost);

  const dispatch = useDispatch();

  const postPost = (post) => {
    return dispatch(postPostOperation(post));
  };

  const editPost = (post, id) => {
    dispatch(editPostOperation(post, id));
  };

  // const getPost =  (id) => {
  //    dispatch(getPostContentOperation(id));
  // };

  const inputHandler = ({ target }) => {
    const { value, name } = target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const singlePost = {
      title,
      body,
    };
    postId ? editPost(singlePost, postId) : postPost(singlePost);
    setForm({ ...formInitialState });
  };

  useEffect(() => {
    if (postId) {
      dispatch(getPostContentOperation(postId));
    }
  }, [dispatch, postId]);

  useEffect(() => {
    post &&
      setForm({
        title: post.title,
        body: post.body,
      });
  }, [post]);

  return (
    <div className={styles.wrapper}>
      {postId && <h1>Edit post</h1>}
      <form
        onSubmit={submitHandler}
        className={styles.NewPostForm}
        autoComplete="off"
      >
        <input
          onChange={inputHandler}
          className={styles.NewPostForm__name}
          type="text"
          name="title"
          placeholder="New Post"
          value={title}
        />
        <textarea
          onChange={inputHandler}
          rows="10"
          cols="45"
          name="body"
          className={styles.NewPostForm__name}
          placeholder="Your post"
          value={body}
        ></textarea>

        <button className={styles.NewTodoForm__submit} type="submit">
          {postId ? "Edit Post" : "Add Post"}
        </button>
      </form>
    </div>
  );
};

export default FormPost;
