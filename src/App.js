import React, { useState } from "react";
import "./App.css";
import TextEditor from "./components/TextEditor/TextEditor";
import MobileView from "./components/MobileView/MobileView";

const App = () => {
  const [textMarkdown, setTextMarkdown] = useState("");
  console.log(
    "textMarkdown =>>>>>>>>>>>>>>>>>",
    textMarkdown,
    typeof textMarkdown
  );
  return (
    <div className="App-container">
      <div className="texteditor-container">
        <TextEditor setTextMarkdown={setTextMarkdown} />
      </div>
      <div className="mobile-container">
        <MobileView textMarkdown={textMarkdown} />
      </div>
    </div>
  );
};

export default App;
