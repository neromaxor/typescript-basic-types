type LocationUser = {
  city: string;
  country: string;
};

type UserMango = {
  name: string;
  age: number;
  email: string;
  address?: LocationUser;
};

const mango: UserMango = {
  name: "Mango",
  age: 30,
  email: "john@example.com",
  address: {
    city: "New York",
    country: "USA",
  },
};

const poly: UserMango = {
  name: "Poly",
  age: 30,
  email: "john@example.com",
};

export { mango, poly };
