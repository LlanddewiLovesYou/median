import React from "react";
import { Post } from "types/Post";
import "./ByLine.scss";

interface Props {
  post: Post;
}

export const ByLine: React.FC<Props> = ({ post }) => {
  const { updatedAt, readTime, author } = post;
  return (
    <div className="by-line">
      <img
        src="https://recap-project.eu/wp-content/uploads/2017/02/default-user-300x300.jpg"
        alt=""
        className="by-line__avatar"
      />
      {/* <span className="by-line__placeholder">ID</span> */}
      <div className="by-line__data">
        <div>{author}</div>
        <div className="by-line__data-secondline">
          <div>{new Date(updatedAt).toDateString()}</div>
          <span className="by-line__separator">•</span>
          <div>{readTime} min</div>
        </div>
      </div>
    </div>
  );
};
