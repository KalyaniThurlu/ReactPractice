// let num = [1, 2, 3, 4, 56];
// let rst = num.reduce((a, b) => {
//   return a + b;
// }, 0);
// console.log(rst);

// let exNum = [1, 2, 3];
// let rsr1 = exNum.reduce((accu, num) => {
//   return accu * num;
// }, 0);
// console.log(rsr1);

// let names = ["latha", "suma", "priya", "rama"];
// let exNames = names.forEach((v) => {
//   console.log(v);
// });

let names = ["latha", "suma", "rama"];

console.log(names.includes("latha"));

let num1 = [1, 2, 3, 4];
let exNum1 = num1.some((c) => {
  return c > 3;
});
console.log(exNum1);
let numbers = [6, 7, 8, 9, 10];
let exNumbers = numbers.every((v) => {
  return v <= 11;
});
console.log(exNumbers);

let num = [1, 2, 3];

console.log(num?.[2]);

//=== array destructuring====

// let num = [1, 2, 3, 4, 5];
// const [first, second] = num;
// console.log(first);
// console.log(second);

// let nums = [1, 2, 3, 4, 5];

// const [one, , three] = nums;

// console.log(one);
// console.log(three);

// let color = ["blue", "pink"];
// let [a, b = "red", c = "block"] = color;

// console.log(a);
// console.log(c);

// let nextedArray = [
//   [1, 2],
//   [3, 4],
// ];
// let [[e, f], [h, j]] = nextedArray;
// console.log(e);
// console.log(f);
// console.log(h);
// console.log(j);

// function getScores() {
//   return [90, 85, 80];
// }

// let [math, science, english] = getScores();

// console.log(math, science, english);
// //== object destructuring
// const obj = {
//   id: 2,
//   name: "suma",
// };
// const { id, name } = obj;
// console.log(id);
// console.log(name);

// const exObj = {
//   id1: 3,
//   exName: "rama",
//   salary: 10000,
// };
// const { id1, salary, exName = "sumana" } = exObj;
// console.log(exName);

// const people = {
//   id2: 102,
//   details: {
//     city: "hyderabad",
//   },
// };

// const {
//   id2,
//   details: { city },
// } = people;
// console.log(city);


