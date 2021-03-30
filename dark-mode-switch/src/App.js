import React, { useState } from "react";
import "./styles.css";

// check out styles.css....how children of App/App-dark are automatically affected while excluding special UI cases with !important property of css and also the same can be applied to external frameworks using the state and the ternary operators for each component/group of various components....

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  console.log("Dark Mode is enabled? ", darkMode);

  return (
    <div className={darkMode ? "App-dark" : "App"}>
      <h1>Title of this page</h1>
      <h2>Random content</h2>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️" : "🌙"} Click this!
      </button>
      <div>
        <br />
        <button>🎨 Every button is themed.</button>
        <br />
        <br />
        <button className="special">🎄 SPECIAL BUTTON.</button>
      </div>
      <a
        id="anchor"
        href="https://github.com/kadamyash/ReactSnippets"
        target="_blank"
      >
        Author
      </a>
    </div>
  );
}
