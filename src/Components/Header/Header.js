import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <NavLink className={styles.link} to="/posts">
        Posts
      </NavLink>
      <NavLink className={styles.link} to="/posts/new">
        Add new posts
      </NavLink>
    </header>
  );
};

export default Header;
