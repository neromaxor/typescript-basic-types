import "./App.css";
import { runTask1 } from "./basics/1";
import person from "./basics/2";
import { runTask3 } from "./basics/3";

function App() {
  runTask3();
  console.log(`Name: ${person[0]}, Age: ${person[1]}`);
  runTask1();
  return (
    <div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
