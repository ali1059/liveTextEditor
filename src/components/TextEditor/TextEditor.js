import React, { useState } from "react";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import "./textEditor.css";

const TextEditor = ({ setTextMarkdown }) => {
  const [state, setState] = useState({
    editorState: EditorState.createEmpty(),
  });

  const onEditorStateChange = (editorState) => {
    setTextMarkdown(draftToHtml(convertToRaw(editorState.getCurrentContent())));

    setState({
      editorState,
    });
  };

  const { editorState } = state;

  return (
    <div>
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
      />
    </div>
  );
};

export default TextEditor;
