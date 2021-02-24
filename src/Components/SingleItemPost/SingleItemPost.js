import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { compose } from "redux";
import ItemPost from "../ItemPost/ItemPost";
import { getPostContentOperation } from "../../redux/operations/postsOperations";
import styles from "./SingleItemPost.module.css";

class SingleItemPost extends Component {
  static propTypes = {
    getPostContentOperation: PropTypes.func.isRequired,
    post: PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }),
  };
  static defaultProps = {
    post: null,
  };

  componentDidMount() {
    this.props.getPostContentOperation(this.props.match.params.postId);
  }

  render() {
    return (
      <ul className={styles.wrapper}>
        {this.props.post && <ItemPost {...this.props.post} />}
      </ul>
    );
  }
}

const mapStateToProps = (store) => ({
  post: store.mainPosts.singlePost,
});

const mapDispatchToProps = {
  getPostContentOperation,
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withRouter
)(SingleItemPost);
