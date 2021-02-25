import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ItemPost from "../ItemPost/ItemPost";
import { getPostContentOperation } from "../../redux/operations/postsOperations";
import styles from "./SingleItemPost.module.css";

const SingleItemPost = () => {
  const post = useSelector((store) => store.mainPosts.singlePost);
  const { postId } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPostContentOperation(postId));
  }, [dispatch,postId]);

  return (
    post && (
      <ul className={styles.wrapper}>
        <ItemPost {...post} />
      </ul>
    )
  );
};

export default SingleItemPost;
