"use strict";
// type Assertion
// const btn = document.getElementById("btn")!;
// const btn = <HTMLElement>document.getElementById("btn");
const btn = document.getElementById("btn");
const img = document.getElementById("myimg");
// img.src = "http://";
const myForm = document.getElementById("myForm");
const myinput = document.querySelector("form > input");
console.log(myinput.value, "Value");
myForm.onsubmit = (e) => {
    e.preventDefault();
    let value = Number(myinput.value);
    let h2 = document.createElement("h2");
    let body = document.querySelector("body");
    h2.innerHTML = String(value + 20);
    h2.style.marginRight = "20px";
    // Check if the div with id 'flex-container' already exists
    let div = document.getElementById("flex-container");
    // If the div does not exist, create it and append it to the body
    if (!div) {
        div = document.createElement("div");
        div.id = "flex-container";
        div.style.display = "flex";
        div.style.flexWrap = "wrap";
        body.appendChild(div);
    }
    // Append the h2 element to the div
    div.appendChild(h2);
};
// btn?.onclick;
console.log(btn, "this is btn");
