import React, { useState } from "react";
import { CreatePostForm } from "../../components/CreatePostForm/CreatePostForm";
import { Post } from "../../components/Post/Post";
import { PostPreviewContext } from "../../context/PostPreviewContext";
import "./CreatePostPage.scss";

interface Props {}

export const CreatePostPage: React.FC<Props> = () => {
  const [postPreview, setPostPreview] = useState(undefined);
  return (
    <div className="create-post-page">
      <PostPreviewContext.Provider value={{ setPostPreview }}>
        {postPreview && (
          <div className="preview">
            <span className="prev-text">PREVIEW</span>
            <Post post={postPreview} />
          </div>
        )}
        <CreatePostForm />
      </PostPreviewContext.Provider>
    </div>
  );
};
