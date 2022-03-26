import React, { useState } from "react";
import axios from "axios";

import Result from "./Result";

import "./Search.css";

export default function Search() {
  const [word, setWord] = useState(null);
  let [meaning, setMeaning] = useState();

  let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

  function changeWord(event) {
    setWord(event.target.value);
  }

  function handleResponse(response) {
    setMeaning(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    axios.get(apiUrl).then(handleResponse);
  }

  return (
    <div className="Search">
      <form onSubmit={search}>
        <input type="search" autoFocus="yes" onChange={changeWord} id="bar" />
      </form>
      <Result definition={meaning} />
    </div>
  );
}
