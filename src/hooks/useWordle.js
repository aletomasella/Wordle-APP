const { useState } = require("react");

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);
  const [usedKeys, setUsedKeys] = useState({});
  const [errors, setErrors] = useState("");

  const handleErrors = (error) => {
    setErrors(error);
  };

  const formatGuess = () => {
    const arraySolution = solution.split("");
    const formattedGuess = currentGuess
      .toUpperCase()
      .split("")
      .map((letter) => {
        return { key: letter, color: "grey" };
      });

    formattedGuess.forEach((el, i) => {
      if (arraySolution[i] === el.key) {
        el.color = "green";
        return;
      }
      if (arraySolution.includes(el.key)) {
        el.color = "yellow";
      }
    });
    return formattedGuess;
  };

  const addNewGuess = (formattedGuess) => {
    if (currentGuess === solution) {
      setIsCorrect(true);
    }
    setHistory((prev) => [...prev, currentGuess]);
    setGuesses((prev) => {
      prev[turn] = formattedGuess;
      return prev;
    });
    setTurn((prev) => prev + 1);
    setUsedKeys((prev) => {
      const newKeys = { ...prev };
      formattedGuess.forEach((l) => {
        const currentColor = newKeys[l.key];
        if (l.color === "green") {
          newKeys[l.key] = "green";
          return;
        }
        if (l.color === "yellow" && currentColor !== "green") {
          newKeys[l.key] = "yellow";
          return;
        }
        if (
          l.color === "grey" &&
          currentColor !== "green" &&
          currentColor !== "yellow"
        ) {
          newKeys[l.key] = "grey";
          return;
        }
      });
      return { ...newKeys };
    });
    setCurrentGuess("");
  };

  const handleKey = ({ key }) => {
    if (key === "Enter") {
      if (turn > 5) {
        console.log("Game Over");
        return;
      }
      if (history.includes(currentGuess)) {
        handleErrors("You already tried that word.");
        return;
      }
      if (currentGuess.length !== solution.length) {
        handleErrors(`Word must be ${solution.length} letters long.`);
        return;
      }
      const formatted = formatGuess();
      addNewGuess(formatted);
    }
    // console.log(key);
    if (key === "Backspace") {
      setCurrentGuess((prev) => prev.slice(0, -1));
      return;
    }

    if (/^[A-Za-z]$/.test(key)) {
      if (currentGuess.length < solution.length) {
        setCurrentGuess((prev) => prev + key.toUpperCase());
      }
    }
  };

  return {
    turn,
    currentGuess,
    guesses,
    isCorrect,
    handleKey,
    usedKeys,
    errors,
    handleErrors,
  };
};

export default useWordle;
