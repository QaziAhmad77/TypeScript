// const obj: {
//   height: number;
//   weight: number;
// } = {
//   height: 3434,
//   weight: 34,
// };
// console.log(obj);

// interface Obj {
//   height: number;
//   weight: number;
//   gender?: boolean;
// }

// type Obj = {
//   height: number;
//   weight: number;
//   gender?: boolean;
// };

// const obj: Obj = {
//   height: 3434,
//   weight: 34,
//   gender: true,
// };
// console.log(obj);

// const obj2: Obj = {
//   height: 10,
//   weight: 34,
// };
// console.log(obj2);

// 3.
interface ObjType {
  height: number;
  weight: number;
  gender?: boolean;
}

const obj: ObjType = {
  height: 3434,
  weight: 34,
  gender: true,
};

type FuncType = (n: number, m: number) => number;
interface NewObj extends ObjType {
  age: number;
  //   func?: (n: number, m: number) => number;
  //   func?: FuncType;
  func: FuncType;
}

console.log(obj);

const obj2: NewObj = {
  height: 10,
  weight: 34,
  age: 50,
  func: (n, m) => {
    console.log(n * m);
    return n * m;
  },
};
console.log(obj2);
console.log(obj2.func(6, 6), "Hello");

interface person {
  name: string;
  email: string;
}

const myObj: person = {
  name: "Ahmad",
  email: "john@example.com",
};

// let key = "name";
// const key = "name";
// console.log(myObj[key]);

// let key = "name";
// console.log(key as keyof person);

let key = "name";
console.log(key as keyof typeof myObj);
