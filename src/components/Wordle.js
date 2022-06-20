import React, { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";

const Wordle = ({ solution }) => {
  const { currentGuess, handleKey, guesses, isCorrect, turn } =
    useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKey);

    return () => window.removeEventListener("keyup", handleKey);
  }, [handleKey]);

  useEffect(() => {
    console.log(guesses, turn, isCorrect);
  }, [guesses, turn, isCorrect]);

  return (
    <>
      <div className="flex flex-col h-[100px] w-full text-center items-center">
        <h1>The solution is : {solution}</h1>
        <div>{currentGuess}</div>
        <Grid
          currentGuess={currentGuess}
          guesses={guesses}
          turn={turn}
          solutionLength={solution.length}
        />
      </div>
    </>
  );
};

export default Wordle;
