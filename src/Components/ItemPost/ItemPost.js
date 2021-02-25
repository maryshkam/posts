import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { removePostOperation } from "../../redux/operations/postsOperations";
import Modal from "../Modal/Modal";
import styles from "./ItemPost.module.css";

const ItemPost = ({ id, title, body }) => {
  const [statusModal, setStatusModal] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const toogleModal = () => {
    setStatusModal(!statusModal);
  };

  const addHistory = () => {
    history.push(`/posts/${id}`);
  };

  const editHistory = () => {
    history.push(`/posts/${id}/editing`);
  };

  const removePost = () => {
    dispatch(removePostOperation(id));
  };

  return (
    <li className={styles.item}>
      <div onClick={addHistory} className={styles.card}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div className={styles.block}>
        <button className={styles.btn} type="button" onClick={toogleModal}>
          Delete
        </button>
        <button className={styles.btn} type="button" onClick={editHistory}>
          Edit
        </button>
      </div>
      {statusModal && (
        <Modal>
          <div className={styles["modal-block"]}>
            <p className={styles.message}>Do you want to remove Post?</p>
            <div className={styles.block}>
              <button className={styles.btn} onClick={removePost} type="button">
                Yes
              </button>
              <button
                className={styles.btn}
                onClick={toogleModal}
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
};

ItemPost.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  id: PropTypes.number,
};

export default ItemPost;
