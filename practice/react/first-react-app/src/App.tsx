import { useState } from "react";
import Greeting from "./Greeting.tsx";
import "./App.css";
import FavoriteFood from "./Food.tsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello World!</h1>
      <p>A quote:</p>
      <Greeting />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <h2>My Favorite Food:</h2>
      <FavoriteFood />
    </>
  );
}

export default App;
