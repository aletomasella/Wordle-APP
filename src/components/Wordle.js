import React, { useEffect, useState } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "./Grid";
import Keypad from "./Keypad";
import Modal from "./Modal";

const Wordle = ({ solution }) => {
  const { currentGuess, handleKey, guesses, isCorrect, turn, usedKeys } =
    useWordle(solution);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.addEventListener("keyup", handleKey);

    if (isCorrect) {
      window.removeEventListener("keyup", handleKey);
      setTimeout(() => {
        setShowModal(!showModal);
      }, 2000);
    }

    if (turn > 5) {
      window.removeEventListener("keyup", handleKey);
      setTimeout(() => {
        setShowModal(!showModal);
      }, 2000);
    }

    return () => window.removeEventListener("keyup", handleKey);
  }, [handleKey, isCorrect, turn]);

  return (
    <>
      <div className="flex flex-col h-100vh w-full text-center items-center justify-center">
        {/* <h1>The solution is : {solution}</h1> */}
        {/* <div>Current guess is : {currentGuess}</div> */}
        <h1 className="mb-10 text-6xl">Wordle Clone </h1>
        <Grid
          currentGuess={currentGuess}
          guesses={guesses}
          turn={turn}
          solutionLength={solution.length}
        />
        <Keypad usedKeys={usedKeys} />
        {showModal && (
          <Modal isCorrect={isCorrect} turn={turn} solution={solution} />
        )}
      </div>
    </>
  );
};

export default Wordle;
