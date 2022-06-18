import { useEffect, useState } from "react";
import { randomSelect } from "./utils";

function App() {
  const [solution, setSolution] = useState("");
  const [options, setOptions] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((res) => res.map((e) => e.name.common))
      .then((names) => setSolution(randomSelect(names)))
      .catch((err) => console.error(err));

    return setSolution("");
  }, []);

  return (
    <>
      <div className="text-4xl bg-[#012] h-full w-full flex min-h-screen text-orange-500 text-center justify-center items-center mx-auto">
        {solution}
      </div>
    </>
  );
}

export default App;
