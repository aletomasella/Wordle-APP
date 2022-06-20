import React, { useEffect, useState } from "react";
import { Keyletters } from "../utils";

const Keypad = () => {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    setLetters(Keyletters);
  }, []);

  return (
    <>
      <div className="flex flex-wrap mt-[50px] max-w-[400px] text-center items-center justify-center text-gray-600">
        {letters &&
          letters.map((l) => {
            return (
              <div
                className="inline-block m-2 min-h-[50px] min-w-[40px] bg-[#eee] rounded-md"
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
