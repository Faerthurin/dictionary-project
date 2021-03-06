import React from "react";

import Synonym from "./Synonym";

import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <p>
              {definition.definition}
              <br />
              <em>{definition.example}</em>
            </p>
            <Synonym synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
