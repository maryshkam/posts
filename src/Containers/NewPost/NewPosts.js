import React from "react";
import FormPost from "../../Components/FormPost/FormPost";
import styles from "./NewPost.module.css";

const NewPosts = () => {
  return (
    <div className={styles.wrapper}>
      <h1>New post</h1>
      <FormPost />
    </div>
  );
};

export default NewPosts;
