import React, { useEffect, useState } from "react";
import { Keyletters } from "../utils";

const Keypad = ({ usedKeys }) => {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    setLetters(Keyletters);
  }, []);

  return (
    <>
      <div className="flex flex-wrap mt-[50px] max-w-[400px] text-center items-center justify-center text-gray-600 keypad">
        {letters &&
          letters.map((l) => {
            const color = usedKeys[l.key];
            return (
              <div
                className={`inline-block m-2 min-h-[50px] min-w-[40px] bg-[#eee] rounded-md ${color}`}
                key={l.key}
              >
                {l.key}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Keypad;
