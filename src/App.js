import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { FaAngleRight } from "react-icons/fa";

import "./App.css";
import TextEditor from "./components/TextEditor/TextEditor";
import DesktopMobileView from "./components/DesktopMobileView/DesktopMobileView";
import MobileView from "./components/MobileView/MobileView";

const App = () => {
  const [textMarkdown, setTextMarkdown] = useState("");
  const [title, setTitle] = useState("Text");
  const isMobile = useMediaQuery({ query: "(max-width:768px)" });

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="App-container">
      <div className="texteditor-container">
        <input
          type="text"
          onChange={handleChange}
          value={title}
          className="title-text"
        />
        <TextEditor setTextMarkdown={setTextMarkdown} />
        <button className="submit-btn" type="submit">
          <div className="button-wrapper">
            Publish <FaAngleRight style={{ paddingLeft: "1rem" }} />
          </div>
        </button>
      </div>
      <div className="mobile-container">
        {isMobile ? (
          <MobileView title={title} textMarkdown={textMarkdown} />
        ) : (
          <DesktopMobileView title={title} textMarkdown={textMarkdown} />
        )}
      </div>
    </div>
  );
};

export default App;
