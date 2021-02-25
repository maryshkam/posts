import React from "react";
import PropTypes from "prop-types";
import ItemPost from "../ItemPost/ItemPost";
import styles from "./ListPosts.module.css";

const ListPosts = ({ posts }) => {
  return (
    posts.length > 0 && (
      <ul className={styles.list}>
        {posts.map((el) => (
          <ItemPost key={el.id} {...el} />
        ))}
      </ul>
    )
  );
};

ListPosts.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default ListPosts;
