import React, { useState, useContext } from "react";
import { Button } from "../Button/Button";
import { getJWT } from "../../util/jwt";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { convertToRaw } from "draft-js";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import draftToHtml from "draftjs-to-html";
import htmlWordCount from "html-word-count";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./CreatePostForm.scss";
import { PostPreviewContext } from "context/PostPreviewContext";

interface Props {}

const createKebabId = (title) => {
  const arr = [];
  const words = title.split(" ");
  words.forEach((word, i) => {
    arr.push(word.toLowerCase());
    if (i !== words.length - 1) arr.push("-");
  });
  return arr.join("");
};

export const CreatePostForm: React.FC<Props> = (props) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const history = useHistory();
  const { setPostPreview } = useContext(PostPreviewContext);

  const convertRawToHTML = (editorState) => {
    const raw = convertToRaw(editorState.getCurrentContent());
    const html = draftToHtml(raw);
    return html;
  };

  const submit = async (e, editorState) => {
    e.preventDefault();
    const body = convertRawToHTML(editorState);
    const wordCount = htmlWordCount(body);
    const id = createKebabId(title);
    const post = {
      id,
      body,
      author: "Ian Del Duca",
      title,
      subtitle,
      imageUrl,
      wordCount,
    };

    await Axios.post(`${process.env.REACT_APP_API_URL}/posts`, post, {
      headers: { Authorization: `bearer ${getJWT()}` },
    });

    history.push("/posts");
  };

  const preview = (e) => {
    e.preventDefault();
    const body = convertRawToHTML(editorState);
    const post = {
      id: createKebabId(title),
      body,
      author: "Ian Del Duca",
      title,
      subtitle,
      imageUrl,
      readTime: "XXm",
      updatedAt: new Date(Date.now()),
    };
    setPostPreview(post);
  };

  return (
    <div>
      <form
        onSubmit={(e) => submit(e, editorState)}
        className="create-post-form"
      >
        <div className="title">Create a Blog Post</div>
        <div className="create-post-form__inputs">
          <label>
            Title:
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
          </label>
          <label>
            Subtitle:
            <input
              value={subtitle}
              onChange={(e) => setSubtitle(e.target.value)}
            ></input>
          </label>
          <label>
            Image URL:
            <input
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
            ></input>
          </label>
        </div>
        <label>
          Body:
          <div className="create-post-form__border">
            <Editor
              editorState={editorState}
              onEditorStateChange={(editorState) => setEditorState(editorState)}
            />
          </div>
        </label>
        <div className="buttons">
          <Button buttonType="transparent" onClick={(e) => preview(e)}>
            Preview
          </Button>
          <Button type="submit" buttonType="user">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};
