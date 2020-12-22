import React, { useState } from "react";
import { CreatePostForm } from "../../components/CreatePostForm/CreatePostForm";
import { Post } from "../../components/Post/Post";
import { PostPreviewContext } from "../../context/PostPreviewContext";
import "./CreatePostPage.scss";

interface Props {}

export const CreatePostPage: React.FC<Props> = () => {
  const [postPreview, setPostPreview] = useState({});
  return (
    <div>
      <PostPreviewContext.Provider value={{}}>
        <Post post={postPreview}></Post>
        <CreatePostForm />
      </PostPreviewContext.Provider>
    </div>
  );
};
