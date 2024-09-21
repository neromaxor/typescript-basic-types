export const runTask1 = () => {
  const age: number = 50;
  const username: string = "Max";
  const toggle: boolean = true;
  const empty: null = null;
  const callback = (a: number): number => {
    return 100 + a;
  };

  console.log(
    `Age: ${age}, Username: ${username}, Toggle: ${toggle}, Empty: ${empty}, Callback result: ${callback(
      10
    )}`
  );
};
