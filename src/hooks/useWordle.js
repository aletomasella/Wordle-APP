const { useState } = require("react");

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

  const formatGuess = () => {
    const arraySolution = solution.toUpperCase().split("");
    const formattedGuess = currentGuess
      .toUpperCase()
      .split("")
      .map((letter) => {
        return { key: letter, color: "grey" };
      });

    formattedGuess.forEach((el, i) => {
      console.log(el);
      console.log(i);
      if (arraySolution[i] === el.key) {
        el.color = "green";
        return;
      }
      if (arraySolution.includes(el.key)) {
        el.color = "yellow";
      }
    });
    console.log(formattedGuess);
  };

  const addNewGuess = () => {
    setHistory((prev) => [...prev, currentGuess]);
    setGuesses((prev) => [...prev, currentGuess.split("")]);
    console.log(guesses);
    setCurrentGuess("");
  };

  const handleKey = ({ key }) => {
    if (key === "Enter") {
      if (turn > 5) {
        alert("You lost");
        return;
      }
      if (history.includes(currentGuess)) {
        alert("You already tried that word.");
        return;
      }
      if (currentGuess.length !== solution.length) {
        alert(`Word must be ${solution.length} long.`);
        return;
      }
      formatGuess();
    }
    // console.log(key);
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
