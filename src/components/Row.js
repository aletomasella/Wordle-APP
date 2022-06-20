import React, { useEffect, useState } from "react";

const Row = ({ numberOfRows, guess }) => {
  const [rows, SetRows] = useState([...Array(0)]);

  useEffect(() => {
    SetRows([...Array(numberOfRows)]);
  }, [numberOfRows]);

  return (
    <div className="flex justify-center items-center">
      {guess
        ? guess.map((letter, i) => {
            return (
              <div
                key={i}
                className={`w-[60px] h-[60px] border-2 border-solid border-orange-500 p-2 m-2 text-center font-bold bg-slate-400`}
                style={{ color: `${letter.color}` }}
              >
                {letter.key}
              </div>
            );
          })
        : rows.map((e, i) => {
            return (
              <div
                key={i}
                className="w-[60px] h-[60px] border-2 border-solid border-orange-500 p-2 m-2 text-center font-bold bg-slate-400"
              ></div>
            );
          })}
    </div>
  );
};

export default Row;
