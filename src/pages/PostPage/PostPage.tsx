import React, { useState, useEffect } from "react";
import { Post } from "../../components/Post/Post";
import Axios from "axios";
import { useLocation } from "react-router-dom";
import { getPostIdFromPath } from "../../util/params";
import "./PostPage.scss";

interface Props {}

export const PostPage: React.FC<Props> = () => {
  const [post, setPost] = useState({
    title: "",
    subtitle: "",
    author: "",
    imageUrl: "",
    body: "",
  });
  const path = useLocation().pathname;
  const postId = getPostIdFromPath(path);

  useEffect(() => {
    const getPost = async () => {
      const requestedPost = await Axios.get(
        `${process.env.REACT_APP_API_URL}/posts/${postId}`
      );
      setPost(requestedPost.data[0]);
    };
    getPost();
  }, [postId, setPost]);

  return (
    <div className="post-page">
      {post ? (
        <Post post={post} />
      ) : (
        <img
          src="https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
          className="spinner"
        />
      )}
    </div>
  );
};
