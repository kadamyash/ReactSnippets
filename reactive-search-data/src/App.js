import "./styles.css";
import Data from "./data.json";
import React, { useState } from "react";

export default function App() {
  const [query, setQuery] = useState(null);

  return (
    <div className="App">
      <div>
        <form>
          <br />
          <div style={{ fontSize: "1.5em" }}>Welcome to autocomplete</div>
          <br />
          <input
            type="text"
            className="input"
            placeholder="🔍  Search"
            onChange={(event) => setQuery(event.target.value)}
            id={query !== "" && query !== null ? "filled" : null}
          />
          <div
            className="found-panel"
            style={{
              display: query !== null && query !== "" ? "block" : "none"
            }}
          >
            {Data.filter((country, len) => len < 5).map((country) =>
              country.name.search(query) !== -1 && query !== "" ? (
                <div className="found">{country.name}</div>
              ) : null
            )}
          </div>
          <div
            style={{
              display: query !== null && query !== "" ? "none" : "block",
              marginTop: "5em"
            }}
          >
            Search for countries!
            <br />
            This is a code idea from{" "}
            <a href="https://github.com/yash11398" target="_blank">
              here.
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
