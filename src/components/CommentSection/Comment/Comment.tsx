import React from "react";
import { Comment as CommentType } from "../../../types/Comment";
import "./Comment.scss";

interface Props {
  comment: CommentType;
}

export const Comment: React.FC<Props> = ({ comment }) => {
  return (
    <div className="comment">
      <div className="username">
        <img
          src="https://recap-project.eu/wp-content/uploads/2017/02/default-user-300x300.jpg"
          alt=""
          className="avatar"
        />
        <div>
          {comment.user.userName}{" "}
          <div>{new Date(comment.updatedAt).toDateString()}</div>
        </div>
      </div>
      <div className="text">{comment.text}</div>
    </div>
  );
};
