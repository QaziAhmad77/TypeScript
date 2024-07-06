"use strict";
const arr = [12, 24, 36, 48];
const arr1 = ["Ahmad", "Noman"];
const arr2 = [12, 24, 36, 48]; // array tople
console.log(arr);
console.log(arr1);
console.log(arr2);
// OR
const arr3 = ["Ahmad", 20];
// arr2[0] = null;
console.log(arr3);
const arr4 = [5, 3, 12, 5, 6];
const abc = arr4.reduce((acc, current) => {
    acc[current] = (acc[current] || 0) + 1;
    return acc;
}, {});
console.log(abc);
// const arr4: number[] = [5, 3, 12, 5, 6];
// const abc = arr4.reduce((acc: { [key: number]: number }, current: number) => {
//   acc[current] = (acc[current] || 0) + 1;
//   return acc;
// }, {} as { [key: number]: number });
// console.log(abc);
// Extracting and reformatting date strings:
const dates = ["2024-01-01", "2024-06-15"];
const formattedDates = dates.map((date) => {
    const [year, month, day] = date.split("-");
    return `${month}/${day}/${year}`;
});
console.log(formattedDates);
