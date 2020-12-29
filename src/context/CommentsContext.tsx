import React from "react";

interface CommentsContext {
  comments: any;
  getComments: any;
  commentsOpen: boolean;
  setCommentsOpen: any;
}

export const CommentsContext = React.createContext<CommentsContext>({
  comments: [],
  getComments: () => {},
  commentsOpen: false,
  setCommentsOpen: () => {},
});
