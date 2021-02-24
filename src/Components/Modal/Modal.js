import React, { Component } from "react";
import styles from "./Modal.module.css";

class Modal extends Component {
  render() {
    return <div className={styles.modal}>{this.props.children}</div>;
  }
}

export default Modal;
