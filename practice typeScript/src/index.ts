// let a: number = 25;
let a = <number>25;
// let b: string = "25";
let b = <string>"25";
// let c: booloean = true;
let c = <boolean>true;
// let d: any = "yesss";
let d = <any>"yesss";
let e: string | number = "300";

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// Functions
// const func = (n: number, m: number): number => {
//   console.log(n, m);
//   //   return n * m;
//   //   return String(n * m);
//   return n * m;
// };

// console.log(func(3, 4));

type UserName = (n: number, m: number) => number;

const func: UserName = (n, m) => {
  console.log(n, m);
  //   return n * m;
  //   return String(n * m);
  return n * m;
};

console.log(func(4, 4));

