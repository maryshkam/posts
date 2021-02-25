import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { removePostOperation } from "../../redux/operations/postsOperations";
import Modal from "../Modal/Modal";
import styles from "./ItemPost.module.css";

class ItemPost extends Component {
  static propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    removePost: PropTypes.func.isRequired,
    history: PropTypes.shape().isRequired,
  };

  state = {
    statusModal: false,
  };

  toogleModal = () => {
    this.setState({
      statusModal: !this.state.statusModal,
    });
  };

  addHistory = () => {
    this.props.history.push(`/posts/${this.props.id}`);
  };

  editHistory = () => {
    this.props.history.push(`/posts/${this.props.id}/editing`);
  };

  render() {
    const { title, body } = this.props;
    return (
      <li className={styles.item}>
        <div onClick={this.addHistory} className={styles.card}>
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
        <div className={styles.block}>
          <button
            className={styles.btn}
            type="button"
            onClick={this.toogleModal}
          >
            Delete
          </button>
          <button
            className={styles.btn}
            type="button"
            onClick={this.editHistory}
          >
            Edit
          </button>
        </div>
        {this.state.statusModal && (
          <Modal>
            <div className={styles["modal-block"]}>
              <p className={styles.message}>Do you want to remove Post?</p>
              <div className={styles.block}>
                <button
                  className={styles.btn}
                  onClick={this.props.removePost}
                  type="button"
                >
                  Yes
                </button>
                <button
                  className={styles.btn}
                  onClick={this.toogleModal}
                  type="button"
                >
                  No
                </button>
              </div>
            </div>
          </Modal>
        )}
      </li>
    );
  }
}

const mapDispatchToProps = (dispatch, { id }) => ({
  removePost: () => dispatch(removePostOperation(id)),
});

export default compose(connect(null, mapDispatchToProps), withRouter)(ItemPost);
