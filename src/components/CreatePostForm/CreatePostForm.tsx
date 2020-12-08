import React, { useState } from "react";
import { Button } from "../Button/Button";
import { Editor } from "react-draft-wysiwyg";
import { EditorState } from "draft-js";
import { convertToRaw } from "draft-js";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import draftToHtml from "draftjs-to-html";
import htmlWordCount from "html-word-count";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./CreatePostForm.scss";

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

    await Axios.post("http://localhost:5000/posts", post);

    history.push("/posts");
  };

  return (
    <form onSubmit={(e) => submit(e, editorState)} className="create-post-form">
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
      <Button type="submit">Submit</Button>
    </form>
  );
};
