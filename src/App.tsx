import "./App.css";
import { runTask1 } from "./basics/1";
import person from "./basics/2";
import { runTask3 } from "./basics/3";
import { customError, calc, showMessage } from "./basics/4";
import { DayOfWeek, isWeekend } from "./basics/5";
import { page1, page2 } from "./basics/7";
import { mango, poly } from "./basics/6.ts";
import { fetchData } from "./generics/1.ts";

function App() {
  console.log(mango);
  console.log(poly);
  runTask3();
  console.log(`Name: ${person[0]}, Age: ${person[1]}`);
  runTask1();

  showMessage("Hello from TypeScript!"); // Повідомлення в консоль
  console.log("Сума: ", calc(10, 20)); // Обчислення суми

  console.log(page1, page2);

  const today = DayOfWeek.Saturday;
  const weekendStatus = isWeekend(today)
    ? "Yes, it's a weekend!"
    : "No, it's a weekday.";
  console.log(weekendStatus);

  fetchData<{ name: string; age: number }>(
    "https://jsonplaceholder.typicode.com/users/1"
  )
    .then((data) => console.log(data.name, data.age))
    .catch((error) => console.error(error));

  // customError();

  return (
    <div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
