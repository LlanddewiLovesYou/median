import React, { useState, useEffect, useContext } from "react";
import { Comment } from "./Comment/Comment";
import "./CommentSection.scss";
import { CommentsContext } from "context/CommentsContext";
import { useLocation } from "react-router-dom";
import { getPostIdFromPath } from "../../util/params";
import { UserContext } from "context/UserContext";
import Axios from "axios";

interface Props {}

export const CommentSection: React.FC<Props> = () => {
  const { comments, getComments, commentsOpen, setCommentsOpen } = useContext(
    CommentsContext
  );
  const [text, setText] = useState("");
  const { loggedIn, currentUser } = useContext(UserContext);
  const path = useLocation().pathname;
  const postId = getPostIdFromPath(path);

  useEffect(() => {
    getComments(postId);
  }, [getComments, postId]);

  const closeComments = () => {
    setCommentsOpen(false);
  };

  const makeComment = async (e) => {
    // e.preventDefault();
    if (loggedIn && e.keyCode === 13) {
      const commentResponse = await Axios.post(
        `${process.env.REACT_APP_API_URL}/comments/${postId}`,
        {
          userId: currentUser._id,
          text,
        }
      );
      setText("");
      await getComments(postId);
    }
  };

  return (
    <div className={commentsOpen ? "comment-section enter" : "comment-section"}>
      <div className="header">
        <div>Responses {`(${comments.length})`}:</div>
        <img
          src="https://www.materialui.co/materialIcons/navigation/close_black_256x256.png"
          alt=""
          className="close"
          onClick={() => closeComments()}
        />
      </div>
      <input
        placeholder="What are your thoughts?"
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => makeComment(e)}
        value={text}
      />
      {comments && (
        <div className="comments">
          {comments.map((comment) => (
            <Comment comment={comment} />
          ))}
        </div>
      )}
    </div>
  );
};
