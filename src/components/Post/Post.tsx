import React, { useEffect, useState } from "react";
import { Post as PostType } from "../../types/Post";
import { ByLine } from "../ByLine/ByLine";

import { getPostIdFromPath } from "../../util/params";

import { useLocation } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import Axios from "axios";
import "./Post.scss";

interface Props {}

export const Post: React.FC<Props> = () => {
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
    <div className="post">
      <h1>{post.title}</h1>
      <h3 className="">{post.subtitle}</h3>
      {post.author && <ByLine post={post as PostType} />}
      <img src={post.imageUrl} alt="" />
      <div>{ReactHtmlParser(post.body)}</div>
    </div>
  );
};
