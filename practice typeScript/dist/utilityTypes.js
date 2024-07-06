"use strict";
// Type Utility
// use as ease of access
// const user3: User3Copy = {
const user3 = {
    name: "Ahmad",
    email: "ahmad@gmail.com",
};
// user3.name = "Mubasher";
// Record <Keys,Types>
const user4 = {
    name: "Mubasher",
    email: "mubasher@gmail.com",
};
// Parameters<Type>
const myfunc = (a, b) => {
    console.log(a + b);
};
// ConstructorParameters<Type>
class SampleClass {
    constructor(s, t) {
        this.s = s;
        this.t = t;
    }
}
// ReturnType<Type>
const myfunc1 = (a, b) => {
    console.log(a + b);
    return a + b;
};
