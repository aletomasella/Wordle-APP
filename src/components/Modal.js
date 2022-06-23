import React from "react";

const Modal = ({ solution, turn, isCorrect, errors }) => {
  const handleClick = () => {
    window.location.reload();
  };

  return (
    <>
      <div className="modal" style={{ color: "black" }}>
        {isCorrect && (
          <div>
            <h1>You Win!</h1>
            <p className="solution text-orange-400 m-4">
              Solution : {solution}
            </p>
            <p>You found the solution in {turn} guesses.</p>
            <button
              className="rounded mt-5 p-2 border-2 border-[#012] bg-[#012] text-orange-400"
              onClick={handleClick}
            >
              Play!
            </button>
          </div>
        )}
        {!isCorrect && !errors ? (
          <div>
            <h1>You Lost!</h1>
            <p className="solution text-orange-400 m-4">
              Solution : {solution}
            </p>
            <p>Better luck next time!</p>
            <button
              className="rounded mt-5 p-2 border-2 border-[#012] bg-[#012] text-orange-400"
              onClick={handleClick}
            >
              Play!
            </button>
          </div>
        ) : null}
        {errors && (
          <div>
            <h1>{errors}</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Modal;
