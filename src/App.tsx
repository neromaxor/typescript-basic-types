import "./App.css";
import { runTask1 } from "./basics/1";
import person from "./basics/2";
import { runTask3 } from "./basics/3";
import { customError, calc, showMessage } from "./basics/4";
import { DayOfWeek, isWeekend } from "./basics/5";
import { page1, page2 } from "./basics/7";
import { mango, poly } from "./basics/6.ts";
import { fetchData } from "./generics/1.ts";
import { compare } from "./generics/2.ts";
import { merge } from "./generics/3.ts";
import { RoleDescription } from "./generics/5.ts";
import { formData } from "./generics/6.ts";

import { updateUserProfile, currentProfile } from "./generics/4";

function App() {
  // console.log(mango);
  // console.log(poly);
  // runTask3();
  // console.log(`Name: ${person[0]}, Age: ${person[1]}`);
  // runTask1();

  // showMessage("Hello from TypeScript!"); // Повідомлення в консоль
  // console.log("Сума: ", calc(10, 20)); // Обчислення суми

  // console.log(page1, page2);

  // const today = DayOfWeek.Saturday;
  // const weekendStatus = isWeekend(today)
  //   ? "Yes, it's a weekend!"
  //   : "No, it's a weekday.";
  // console.log(weekendStatus);

  // fetchData<{ name: string; age: number }>(
  //   "https://jsonplaceholder.typicode.com/users/1"
  // )
  //   .then((data) => console.log(data.name, data.age))
  //   .catch((error) => console.error(error));

  // const topObject = { name: "Top", color: "Red" };
  // const bottomObject = { position: 2, weight: 100 };

  // const result = compare(topObject, bottomObject);
  // console.log(result);

  // const objA = { name: "Alice", age: 25 };
  // const objB = { city: "Wonderland", profession: "Adventurer" };

  // const mergedObject = merge(objA, objB);
  // console.log(mergedObject);

  // const updatedProfile = updateUserProfile(currentProfile, {
  //   email: "john.newemail@example.com",
  //   password: "newpassword456",
  // });
  // console.log("Updated Profile:", updatedProfile);
  // console.log(RoleDescription);
  console.log(formData);
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
