import React, { useState } from "react";
import Editor from "./DesignMode/editor";
import CustomButton from "./CornerButton/customButton";
import Dev from "./DevMode/Dev";

import { ReactComponent as Code } from "../assets/code.svg";
import { ReactComponent as Design } from "../assets/design.svg";

function App() {
  const [activeComponent, setActiveComponent] = useState("editor");

  const handleButtonClick = () => {
    setActiveComponent(activeComponent === "editor" ? "codepanels" : "editor");
  };

  return (
    <div className="App">
      <CustomButton
        onClick={handleButtonClick}
        icon={
          activeComponent === "editor" ? (
            <Code className="code" />
          ) : (
            <Design className="design" />
          )
        }
      />
      {activeComponent === "editor" ? <Editor /> : <Dev />}
      {/* <CodePlanels /> */}
    </div>
  );
}

export default App;
