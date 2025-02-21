function nums() {
  let num = [1, 2, 3, 4, 5];
  console.log(num);
}
nums();

const num1 = [6, 7, 8, 9, 10];
console.log(num1);

function defaultParam(name = "default") {
  let exname = `hello${name}`;
  console.log(exname);
}

defaultParam("latha");
const Exarrow = () => {
  return "wellcome";
};
console.log(Exarrow());
let num2 = [1, 2, 3, 4, 5];
let num3 = [6, 7, 8, 9, 10];
let result = [...num2, ...num3];
console.log(result);

let [a, ...rest] = [2, 3, 4, 5, 6, 7, 8, 9];
console.log(a);
console.log(rest);
let obj = {
  name: "latha",
  id: 2,
  price: 2000,
  age: 30,
};
const { name, id, price, age } = obj;
console.log(name);

function extempletlitarates(name) {}

function greet(name1, callback) {
  console.log("hello" + name1);
  callback();
}
function sayBoy() {
  console.log("goodboy");
}
greet("latha", sayBoy);

function multiplay(factor) {
  return function (number) {
    return factor * number;
  };
}
let duble = multiplay(2);
let triple = multiplay(2);
console.log(duble(3));
console.log(triple(2));

function withParam(a, b) {
  return a + b;
}
let results = withParam(2, 3);
console.log(results);

function withOutParam() {
  return "hello";
}
console.log(withOutParam());

function withReturn() {
  return "wellcome";
}
console.log(withReturn());

function withOutReturn() {
  console.log("this is Regular Function");
}
withOutReturn();

const exArrowfun = (c, d) => {
  return c * d;
};
let rst = exArrowfun(2, 3);
console.log(rst);

function findMissingNum(arr, n) {
  let totelNum = (n * (n + 1)) / 2;
  let expectedNum = arr.reduce((sum, num) => sum + num, 0);
  return totelNum - expectedNum;
}
let arr = [1, 2, 4, 5];
let n = 5;
console.log(findMissingNum(arr, n));

function exReverserd(str) {
  let results = "";
  for (let i = str.length - 1; i >= 0; i--) {
    results += str[i];
  }
  return results;
}
console.log(exReverserd("hello"));

let numbers = [1, 2, 3, 4, 5, 1, 3, 2];
function findDuplicateNums(numbers) {
  return numbers.filter((num, index) => numbers.indexOf(num) !== index);
}
console.log(findDuplicateNums(numbers));

function exCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}
let incresed = exCounter(1);
console.log(incresed());
console.log(incresed());
console.log(incresed());
console.log(incresed());

function applyFunction(arr1, fn) {
  return arr1.map(fn);
}
function plusOne(n) {
  return n + 1;
}
let arr1 = [4, 5, 6];
console.log(applyFunction(arr1, plusOne));




function greaterThan10(arr2, fn) {
  return arr2.filter(fn);
}
function filteredArr(n) {
  return n > 10;
}
let arr2 = [3, 4, 5, 6, 12, 13, 34, 56];
console.log(greaterThan10(arr2, filteredArr));
