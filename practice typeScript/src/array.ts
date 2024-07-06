const arr: number[] = [12, 24, 36, 48];
const arr1: string[] = ["Ahmad", "Noman"];
const arr2: [number, number, number] = [12, 24, 36, 48]; // array tople
console.log(arr);
console.log(arr1);
console.log(arr2);
// OR

const arr3: Array<string | number> = ["Ahmad", 20];
// arr2[0] = null;
console.log(arr3);

const arr4: number[] = [5, 3, 12, 5, 6];
// Define the type of the accumulator as an object with number keys and number values
type Accumulator = { [key: number]: number };
const abc = arr4.reduce<Accumulator>((acc, current) => {
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
const dates: string[] = ["2024-01-01", "2024-06-15"];
const formattedDates = dates.map((date) => {
  const [year, month, day] = date.split("-");
  return `${month}/${day}/${year}`;
});
console.log(formattedDates);
