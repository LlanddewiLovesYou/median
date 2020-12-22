import React from "react";
import { Post as PostType } from "../../types/Post";
import { ByLine } from "../ByLine/ByLine";
import ReactHtmlParser from "react-html-parser";
import "./Post.scss";

interface Props {
  post: any;
}

export const Post: React.FC<Props> = ({ post }) => {
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
