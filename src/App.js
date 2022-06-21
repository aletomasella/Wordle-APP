import { useEffect, useState } from "react";
import { randomSelect } from "./utils";
import axios from "axios";
import Wordle from "./components/Wordle";

function App() {
  const [solution, setSolution] = useState(null);
  const [options, setOptions] = useState(null);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => res.data)
      .then((res) => res.map((e) => e.name.common))
      .then((names) =>
        names.filter((name) => !name.includes(" ") && name.length <= 7)
      )
      .then((filterNames) => setSolution(randomSelect(filterNames)))
      .catch((err) => console.error(err));

    return () => setSolution(null);
  }, []);

  return (
    <>
      {solution && (
        <div className="text-4xl bg-[#012] h-full w-full flex flex-col min-h-screen text-orange-500 text-centerssdasd items-center mx-auto justify-center">
          <Wordle solution={solution} />
        </div>
      )}
    </>
  );
}

export default App;
