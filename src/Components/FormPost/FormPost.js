import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { compose } from "redux";

import {
  postPostOperation,
  getPostContentOperation,
  editPostOperation,
} from "../../redux/operations/postsOperations";
import styles from "./FormPost.module.css";

class FormPost extends Component {
  static propTypes = {
    postPostOperation: PropTypes.func.isRequired,
    getPostContentOperation: PropTypes.func.isRequired,
    editPostOperation: PropTypes.func.isRequired,
    match: PropTypes.shape().isRequired,
    posts: PropTypes.array.isRequired,
    post: PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  };

  static defaultProps = {
    post: null,
  };

  formInitialState = {
    title: "",
    body: "",
  };

  state = {
    ...this.formInitialState,
  };

  inputHandler = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  submitHandler = (e) => {
    const { title, body } = this.state;
    e.preventDefault();

    const singlePost = {
      title,
      body,
    };
    this.props.match.params.postId
      ? this.props.editPostOperation(singlePost, this.props.match.params.postId)
      : this.props.postPostOperation(singlePost);
    this.setState({ ...this.formInitialState });
  };

  async componentDidMount() {
    if (this.props.match.params.postId) {
      await this.props.getPostContentOperation(this.props.match.params.postId);
      this.setState({
        title: this.props.post?.title,
        body: this.props.post?.body,
      });
    }
  }

  render() {
    const { title, body } = this.state;
    return (
      <div className={styles.wrapper}>
        {this.props.match.params.postId && <h1>Edit post</h1>}
        <form
          onSubmit={this.submitHandler}
          className={styles.NewPostForm}
          autoComplete="off"
        >
          <input
            onChange={this.inputHandler}
            className={styles.NewPostForm__name}
            type="text"
            name="title"
            placeholder="New Post"
            value={title}
          />
          <textarea
            onChange={this.inputHandler}
            rows="10"
            cols="45"
            name="body"
            className={styles.NewPostForm__name}
            placeholder="Your post"
            value={body}
          ></textarea>

          <button className={styles.NewTodoForm__submit} type="submit">
            {this.props.match.params.postId ? "Edit Post" : "Add Post"}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  posts: store.mainPosts.posts,
  post: store.mainPosts.singlePost,
});

const mapDispatchToProps = {
  postPostOperation,
  getPostContentOperation,
  editPostOperation,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(FormPost);
