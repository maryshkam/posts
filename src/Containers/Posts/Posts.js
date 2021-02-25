import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ListPosts from "../../Components/ListPosts/ListPosts";
import { getPostOperation } from "../../redux/operations/postsOperations";
import styles from "./Posts.module.css";

const Posts = () => {
  const posts = useSelector((store) => store.mainPosts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostOperation());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <h1>Posts</h1>
      {posts.length > 0 && <ListPosts posts={posts} />}
    </div>
  );
};

export default Posts;
