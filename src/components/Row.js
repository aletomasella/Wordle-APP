import React, { useEffect, useState } from "react";

const Row = ({ numberOfRows, guess, currentGuess }) => {
  const [rows, SetRows] = useState([...Array(0)]);

  useEffect(() => {
    SetRows([...Array(numberOfRows)]);
  }, [numberOfRows]);

  if (guess) {
    return (
      <div className="flex justify-center items-center text-black">
        {guess.map((letter, i) => {
          return (
            <div
              key={i}
              className={`w-[60px] h-[60px] border-2 border-solid p-2 m-2 text-center font-bold bg-slate-100 rounded ${letter.color} border-gray-500`}
            >
              {letter.key}
            </div>
          );
        })}
      </div>
    );
  }

  if (currentGuess) {
    const lettersGuess = currentGuess.split("");
    return (
      <div className="flex justify-center items-center text-black">
        {lettersGuess.map((letter, i) => {
          return (
            <div
              key={i}
              className="w-[60px] h-[60px] border-2 border-solid border-gray-500 p-2 m-2 text-center font-bold bg-slate-100 rounded"
            >
              {letter}
            </div>
          );
        })}
        {[...Array(numberOfRows - lettersGuess.length)].map((e, i) => {
          return (
            <div
              key={i}
              className="w-[60px] h-[60px] border-2 border-solid border-gray-500 p-2 m-2 text-center font-bold bg-slate-100 rounded"
            ></div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center text-black">
      {rows.map((e, i) => {
        return (
          <div
            key={i}
            className="w-[60px] h-[60px] border-2 border-solid border-gray-500 p-2 m-2 text-center font-bold bg-slate-100 rounded"
          ></div>
        );
      })}
    </div>
  );
};

export default Row;
