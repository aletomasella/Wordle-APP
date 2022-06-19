const { useState } = require("react");

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

  const formatGuess = () => {};

  const addNewGuess = () => {};

  const handleKey = ({ key }) => {
    console.log(key);
    if (key === "Backspace") {
      setCurrentGuess((prev) => prev.slice(0, -1));
      return;
    }

    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < solution.length) {
        setCurrentGuess((prev) => prev + key);
      }
    }
  };

  return { turn, currentGuess, guesses, isCorrect, handleKey };
};

export default useWordle;
