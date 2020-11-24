import React, { useContext } from "react";
import { PostsContext } from "../../context/postsContext";
import { PostPreview } from "../../components/PostPreview/PostPreview";
import "./PostIndexPage.scss";

export const PostIndexPage = () => {
  const posts = useContext(PostsContext);
  return (
    <div className="post-index-page">
      {posts.map((post) => {
        return <PostPreview post={post} />;
      })}
    </div>
  );
};
