// App.js
import React, { useEffect } from "react";
import grapesjs from "grapesjs";
import Temp1 from "../Templates/Template1";
import Temp1CSS from "../Templates/Template1/css/style";

function Editor() {
  useEffect(() => {
    const editor = grapesjs.init({
      container: "#gjs",
      components: Temp1,
      style: Temp1CSS,
      storageManager: false,
      plugins: ["grapesjs-tailwind"],
      blockManager: {
        blocks: [
          {
            id: "temp-1",
            label: "Template 1",
            content: Temp1,
          },
        ],
      },
    });

    // add the components to the editor
    // https://github.com/bradtraversy/saas-landing-page/tree/main
    // https://github.com/lashaNoz/Foods
    // https://github.com/lashaNoz/The-Road/tree/Final
    // https://github.com/lashaNoz/Architect-Website

    return () => {
      editor.destroy();
    };
  }, []);

  return <div id="gjs"></div>;
}

export default Editor;
