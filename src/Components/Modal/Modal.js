import React from "react";
import styles from "./Modal.module.css";

const Modal = () => {
  return <div className={styles.modal}>{this.props.children}</div>;
};

export default Modal;
