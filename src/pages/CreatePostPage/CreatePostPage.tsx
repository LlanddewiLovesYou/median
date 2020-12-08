import React from "react";
import { CreatePostForm } from "../../components/CreatePostForm/CreatePostForm";
import "./CreatePostPage.scss";

interface Props {}

export const CreatePostPage: React.FC<Props> = () => {
  return (
    <div>
      <CreatePostForm />
    </div>
  );
};
