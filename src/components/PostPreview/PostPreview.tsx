import React from "react";
import { Post } from "../../types/Post";
import "./PostPreview.scss";

interface Props {
  post: Post;
}

export const PostPreview: React.FC<Props> = ({ post }) => {
  return (
    <div className="post-preview">
      <div>
        <div className="post-preview__author">
          <span className="post-preview__placeholder">ID</span>
          {post.author}
        </div>
        <h1>{post.title}</h1>
        <h3>{post.subtitle}</h3>
        <div className="post-preview__meta-data">
          {post.lastEdited ? (
            <span>{post.lastEdited.toDateString()}</span>
          ) : null}
          <span className="post-preview__separator">•</span>
          {post.readTime ? <span>{post.readTime}</span> : null}
        </div>
      </div>
      <img
        src="https://image.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-260nw-1037719192.jpg"
        alt=""
      />
    </div>
  );
};
