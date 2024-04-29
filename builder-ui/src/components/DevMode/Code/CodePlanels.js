// Example react component
import React, { useState } from "react";
import CodeEditor from "./CodeEditor";

function CodePlanels() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  return (
    <>
      <div className="pane top-pane">
        <CodeEditor
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <CodeEditor
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <CodeEditor
          language="js"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          frameBorder="0"
          title="output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </>
  );
}

export default CodePlanels;
