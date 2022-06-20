import React, { useState } from "react";
import Row from "./Row";

const Grid = ({ currentGuess, guesses, turn, solutionLength }) => {
  const [numberOfGuesses, setNumberOfGuesses] = useState([...Array(6)]);
  return (
    <>
      <div>
        {guesses.map((g, i) => {
          return <Row key={i} numberOfRows={solutionLength} guess={g} />;
        })}
      </div>
    </>
  );
};

export default Grid;
