import React from "react";

import Meaning from "./Meaning";
import Phonetic from "./Phonetic";

import "./Result.css";

export default function Result(props) {
  if (props.definition) {
    return (
      <div className="Result">
        <div className="word">
          <h2>{props.definition.word}</h2>
          <div className="phone">
            {props.definition.phonetics.map(function (phonetic, index) {
              return (
                <div key={index}>
                  <Phonetic phonetic={phonetic} />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          {props.definition.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
