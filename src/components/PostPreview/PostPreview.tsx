import React from "react";
import { Post } from "../../types/Post";
import { Link } from "react-router-dom";
import "./PostPreview.scss";

interface Props {
  post: Post;
}

export const PostPreview: React.FC<Props> = ({ post }) => {
  return (
    <Link to={`/posts/${post.id}`} className="post-preview">
      <div>
        <div className="post-preview__author">
          <img
            src="https://recap-project.eu/wp-content/uploads/2017/02/default-user-300x300.jpg"
            alt=""
            className="post-preview__avatar"
          />
          {post.author}
        </div>
        <h1>{post.title}</h1>
        <h3>{post.subtitle}</h3>
        <div className="post-preview__meta-data">
          {post.updatedAt ? (
            <span>{new Date(post.updatedAt).toDateString()}</span>
          ) : null}
          <span className="post-preview__separator">•</span>
          {post.readTime ? <span>{post.readTime}m</span> : null}
        </div>
      </div>
      <img src={post.imageUrl} alt="" className="thumbnail" />
    </Link>
  );
};
