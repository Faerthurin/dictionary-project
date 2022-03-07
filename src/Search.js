import React, { useState } from "react";

export default function Search() {
  const [word, setWord] = useState(null);

  function changeWord(event) {
    setWord(event.target.value);
  }

  function search(event) {
    event.preventDefault();
    alert(`searching ${word}`);
  }

  return (
    <div className="Search">
      <form onSubmit={search}>
        <input type="search" autoFocus="yes" onChange={changeWord} />
      </form>
    </div>
  );
}
