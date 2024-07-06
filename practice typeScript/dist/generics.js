"use strict";
// Generics
const myFunc = (n) => {
    const text = n;
    return n;
};
const result = myFunc(20);
const result1 = myFunc("20");
const result2 = myFunc(true);
const myFunc1 = (n) => {
    console.log(n, "n");
    return n;
};
const person1 = {
    name: "John",
    age: 20,
};
const result3 = myFunc1(person1);
// Generic example
const myFunc2 = (n, o) => {
    return { n, o };
};
const ans = myFunc2(20, "LOL");
function getSearchProducts(products) {
    // return one element from the array
    const myIndex = 3;
    return products[myIndex];
}
const getSearchProducts1 = (products) => {
    return products[3];
};
// function anotherFunction<T, U extends T or number>(val1: T, val2: U): object {
function anotherFunction(val1, val2) {
    return { val1, val2 };
}
const res = anotherFunction(3, "4");
console.log(res, "res");
const persFun = (n) => {
    return n;
};
const Ahmad = {
    name: "Ahmad",
    age: 23,
};
const anss = persFun(Ahmad);
