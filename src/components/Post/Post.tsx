import React, { useContext, useEffect, useState } from "react";
import { Post as PostType } from "../../types/Post";
import { ByLine } from "../ByLine/ByLine";
import { Button } from "../Button/Button";
import ReactHtmlParser from "react-html-parser";
import "./Post.scss";
import { UserContext } from "context/UserContext";
import { isUserAdmin } from "util/permissions";
import { getJWT } from "../../util/jwt";
import Axios from "axios";

interface Props {
  post: any;
}

export const Post: React.FC<Props> = ({ post }) => {
  const { currentUser } = useContext(UserContext);
  const [claps, setClaps] = useState(0);
  const isAdmin = isUserAdmin(currentUser);
  const jwt = getJWT();

  useEffect(() => {
    setClaps(post.claps);
  }, [post]);

  const deletePost = async (e) => {
    e.preventDefault();
    await Axios.delete(`${process.env.REACT_APP_API_URL}/posts/${post.id}`, {
      headers: { authorization: `bearer ${jwt}` },
    });
  };

  const clap = async (e) => {
    e.preventDefault();
    setClaps(claps + 1);
    await Axios.post(`${process.env.REACT_APP_API_URL}/claps/${post.id}`);
  };

  return (
    <div className="post">
      <h1>{post.title}</h1>
      <h3 className="">{post.subtitle}</h3>
      {post.author && <ByLine post={post as PostType} />}
      <img src={post.imageUrl} alt="" />
      <div>{ReactHtmlParser(post.body)}</div>
      <div className="claps" onClick={(e) => clap(e)}>
        <img src="https://topmediumstories.com/clap.png" alt="" />
        <span>{claps}</span>
      </div>
      {isAdmin && (
        <Button buttonType="delete" onClick={(e) => deletePost(e)}>
          Delete Post
        </Button>
      )}
    </div>
  );
};
