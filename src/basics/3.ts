export const runTask3 = () => {
  let variable: string | number;

  variable = "Hello monkey";
  variable = 26;

  let status: "enable" | "disable";
  status = "disable";
  status = "enable";
  console.log(`Variable: ${variable}, Status: ${status}`);
};
