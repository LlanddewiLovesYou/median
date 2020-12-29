import React, { useContext, useEffect } from "react";
import { PostsContext } from "../../context/PostsContext";
import { PostPreview } from "../../components/PostPreview/PostPreview";
import "./PostIndexPage.scss";

export const PostIndexPage = () => {
  const { posts, getPosts } = useContext(PostsContext);

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  return (
    <div className="post-index-page">
      {posts.map((post) => {
        return (
          <div className="preview">
            <PostPreview post={post} />
          </div>
        );
      })}
    </div>
  );
};
