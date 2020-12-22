import React, { useState, useEffect } from "react";
import { Post } from "../../components/Post/Post";
import { getPostIdFromPath } from "../../util/params";
import Axios from "axios";

import { useLocation } from "react-router-dom";

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
    <div>
      <Post post={post}></Post>
    </div>
  );
};
