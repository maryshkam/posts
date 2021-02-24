import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ListPosts from "../../Components/ListPosts/ListPosts";
import { getPostOperation } from "../../redux/operations/postsOperations";
import styles from "./Posts.module.css";

class Posts extends Component {
static propTypes = {
  posts: PropTypes.array.isRequired,
  getPostOperation: PropTypes.func.isRequired
}
  
  componentDidMount() {
    this.props.getPostOperation();
  }

  render() {
    const { posts } = this.props;
    return (
      <div className={styles.wrapper}>
        <h1>Posts</h1>
        {posts.length > 0 && <ListPosts posts={posts} />}
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  posts: store.mainPosts.posts,
});

const mapDispatchToProps = {
  getPostOperation,
};



export default connect(mapStateToProps, mapDispatchToProps)(Posts);
