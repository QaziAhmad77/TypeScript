// Type Utility
// use as ease of access

type User1 = {
  name: string;
  email: string;
};

// Partial<Type>

// type User2 = {
//   name?: string; // not mandatory
//   email?: string;
// };

// instead of above
type User1Copy = Partial<User1>;

// Required<Type> - opposite of partial

interface User2 {
  name?: string;
  email?: string;
}

type User2Copy = Required<User2>;

// Readonly<Type>

type User3 = {
  name: string;
  email: string;
};

type User3Copy = Readonly<User3>;

// const user3: User3Copy = {
const user3: Readonly<User3> = {
  name: "Ahmad",
  email: "ahmad@gmail.com",
};

// user3.name = "Mubasher";

// Record <Keys,Types>
const user4 = {
  name: "Mubasher",
  email: "mubasher@gmail.com",
};

type User4Copy = Record<"name" | "email", string>;

// Pick<Type,Keys>
interface OrderInfo {
  readonly id: string;
  user: string;
  city: string;
  state: string;
  country: string;
  status: string;
}

type ShippingInfo = Pick<OrderInfo, "city" | "state" | "country">;

// Omit<Type,Keys> opposite of Pick
interface ShippingInfo1 {
  user: string;
  city: string;
  country: string;
}

type Random = Omit<ShippingInfo1, "country">;

// Exclude<Type,ExcludeUnions>
type Random1 = Exclude<string | number, number>;

// Extract<Type,Union>
type MyUnion = string | number | boolean;
type MyUnion1 = Extract<MyUnion, boolean>;

// NonNullable<Type>
type MyUnion2 = string | number | boolean | null | undefined;
type MyUnion3 = NonNullable<MyUnion>;

// Parameters<Type>
const myfunc = (a: number, b: string) => {
  console.log(a + b);
};
type ran = Parameters<typeof myfunc>;

// ConstructorParameters<Type>
class SampleClass {
  constructor(public s: string, public t: string) {}
}
type ran2 = ConstructorParameters<typeof SampleClass>;

// ReturnType<Type>
const myfunc1 = (a: number, b: number): number => {
  console.log(a + b);
  return a + b;
};
type funcType1 = ReturnType<typeof myfunc1>;
