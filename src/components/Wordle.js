import React, { useEffect } from "react";
import useWordle from "../hooks/useWordle";

const Wordle = ({ solution }) => {
  const { currentGuess, handleKey } = useWordle(solution);

  useEffect(() => {
    window.addEventListener("keyup", handleKey);

    return () => window.removeEventListener("keyup", handleKey);
  }, [handleKey]);

  return (
    <>
      <div className="flex flex-col h-[100px] w-full text-center items-center">
        <div>{currentGuess}</div>
      </div>
    </>
  );
};

export default Wordle;
