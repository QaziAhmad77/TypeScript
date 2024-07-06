// Generics

const myFunc = <T>(n: T): T => {
  const text: T = n;
  return n;
};
const result = myFunc(20);
const result1 = myFunc("20");
const result2 = myFunc(true);

// 2
type Person = {
  name: string;
  age: number;
};
const myFunc1 = <T>(n: T): T => {
  console.log(n, "n");
  return n;
};
const person1: Person = {
  name: "John",
  age: 20,
};

const result3 = myFunc1(person1);

// Generic example
const myFunc2 = <Text, U>(n: Text, o: U) => {
  return { n, o };
};

const ans = myFunc2<number, string>(20, "LOL");

function getSearchProducts<T>(products: T[]): T {
  // return one element from the array
  const myIndex = 3;
  return products[myIndex];
}

const getSearchProducts1 = <T>(products: T[]): T => {
  return products[3];
};

// function anotherFunction<T, U extends T or number>(val1: T, val2: U): object {
function anotherFunction<T, U>(val1: T, val2: U): object {
  return { val1, val2 };
}

const res = anotherFunction(3, "4");
console.log(res, "res");

type pers = {
  name: string;
  age: number;
};
const persFun = <T>(n: T): T => {
  return n;
};
const Ahmad: pers = {
  name: "Ahmad",
  age: 23,
};

const anss = persFun<pers>(Ahmad);
