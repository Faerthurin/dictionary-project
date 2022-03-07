import React from "react";
import Search from "./Search";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <h1>Dictionary</h1>
      <Search />
      <footer>
        <small>
          <a href="/"> Source code on github </a>
        </small>
      </footer>
    </div>
  );
}
