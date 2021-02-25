import React, { Component, useEffect } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import ListPosts from "../../Components/ListPosts/ListPosts";
import { getPostOperation } from "../../redux/operations/postsOperations";
import styles from "./Posts.module.css";

const Posts = () => {
  // static propTypes = {
  //   posts: PropTypes.array.isRequired,
  //   getPostOperation: PropTypes.func.isRequired
  // }

  const posts = useSelector((store) => store.mainPosts.posts);
  const dispatch = useDispatch();
  const getPost = () => {
    dispatch(getPostOperation());
  };

  useEffect(() => {
    getPost();
  }, []);

  // componentDidMount() {
  //   this.props.getPostOperation();
  // }

  return (
    <div className={styles.wrapper}>
      <h1>Posts</h1>
      {posts.length > 0 && <ListPosts posts={posts} />}
    </div>
  );
};

// const mapStateToProps = (store) => ({
//   posts: store.mainPosts.posts,
// });

// const mapDispatchToProps = {
//   getPostOperation,
// };

export default Posts;
// export default connect(mapStateToProps, mapDispatchToProps)(Posts);
