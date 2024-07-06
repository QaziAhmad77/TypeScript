"use strict";
// const obj: {
//   height: number;
//   weight: number;
// } = {
//   height: 3434,
//   weight: 34,
// };
// console.log(obj);
const obj = {
    height: 3434,
    weight: 34,
    gender: true,
};
console.log(obj);
const obj2 = {
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
const myObj = {
    name: "Ahmad",
    email: "john@example.com",
};
// let key = "name";
// const key = "name";
// console.log(myObj[key]);
// let key = "name";
// console.log(key as keyof person);
let key = "name";
console.log(key);
