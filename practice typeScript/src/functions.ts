// const func1 = (n: number, m: number):number => {
//   return n * m;
// };
// console.log(func1(10, 10));

// type funcType = (n: number, m: number) => number;
// const func1: funcType = (a, b) => {
//   return a * b;
// };
// console.log(func1(10, 10));

//function with default parameters
// type funcType = (n: number, m: number, l?: number) => number;
// const func1: funcType = (n, m, l) => {
//   if (typeof l === "undefined") return n * m;
//   return n * m * l;
// };
// console.log(func1(10, 10));

// function with default parameters
// type funcType = (n: number, m: number, l?: number) => number;
// const func1: funcType = (n, m, l = 10) => {
//   return n * m * l;
// };
// console.log(func1(10, 10));
// console.log(func1(10, 10, 20));

// Rest operater
type funcType = (...m: number[]) => number[];
const func1: funcType = (...m: number[]) => {
  return m;
};
console.log(func1(10, 10, 10, 12, 13, 14));

// function with objects
// const getData = (product: {
//   name: string;
//   stock: number;
//   price: number;
//   imageUrl: string;
// }): void => {
//   console.log(product);
// };

// interface Product {
//   name: string;
//   stock: number;
//   price: number;
//   imageUrl: string;
//   readonly id: string;
// }
// type GetDataType = (product: Product) => void;

// const getData: GetDataType = (product) => {
//   product.name = "Qazi";
//   product.id = "dafsfsdfasdfasdsd";
//   console.log(product);
// };

// const productOne: Product = {
//   name: "Ahmad",
//   stock: 10,
//   price: 100,
//   imageUrl:
//     "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
//   id: "dakfasdfaskdfasdkfsd",
// };
// getData(productOne);

// Never Type

// const error = new Error();
const errorHandler = (): never => {
  throw new Error(); // return never
  // return new Error(); // return error
};

type themeMode = "light" | "dark";
const mode: themeMode = "dark";


