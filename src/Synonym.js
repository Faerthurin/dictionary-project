import React from "react";

import "./Synonym.css";

export default function Synonym(props) {
  if (props.synonyms) {
    return (
      <ul className="synonyms">
        {props.synonyms.map(function (synonym, index) {
          return <ol key={index}>{synonym}</ol>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
