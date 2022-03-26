import React from "react";

export default function Synonym(props) {
  if (props.synonyms) {
    return (
      <ul className="Synonyms">
        {props.synonyms.map(function (synonym, index) {
          return <ol key={index}>{synonym}</ol>;
        })}
      </ul>
    );
  } else {
    return null;
  }
}
