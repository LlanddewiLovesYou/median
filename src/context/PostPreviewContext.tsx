import React from "react";

interface PostPreviewContext {
  setPostPreview?: any;
}

export const PostPreviewContext = React.createContext<PostPreviewContext>({
  setPostPreview: () => {},
});
