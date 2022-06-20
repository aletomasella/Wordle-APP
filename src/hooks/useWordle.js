const { useState } = require("react");

const useWordle = (solution) => {
  const [turn, setTurn] = useState(0);
  const [currentGuess, setCurrentGuess] = useState("");
  const [guesses, setGuesses] = useState([...Array(6)]);
  const [history, setHistory] = useState([]);
  const [isCorrect, setIsCorrect] = useState(false);

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

      if (window.confirm("You won, wanna play again?")) {
        window.location.reload();
      }
    }
    setHistory((prev) => [...prev, currentGuess]);
    setGuesses((prev) => {
      prev[turn] = formattedGuess;
      return prev;
    });
    setTurn((prev) => prev + 1);
    setCurrentGuess("");
  };

  const handleKey = ({ key }) => {
    if (key === "Enter") {
      if (turn > 5) {
        if (
          window.confirm(
            `You lost, the solution was ${solution} wanna play again?`
          )
        ) {
          window.location.reload();
        }
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

  return { turn, currentGuess, guesses, isCorrect, handleKey };
};

export default useWordle;
