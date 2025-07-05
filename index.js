// // function findingMissingNum(n, arr) {
// //   arr.sort((a, b) => a - b);

// //   for (let i = 0; i < n; i++) {
// //     if (arr[i] !== i + 1) {
// //       return i + 1;
// //     }
// //   }
// // }

// // let n = 5;
// // let arr = [1, 2, 3, 5];
// // console.log(findingMissingNum(n, arr));

// function findingMissingNum(n, arr) {
//   let totalNum = (n * (n + 1)) / 2;
//   let expectedNum = arr.reduce((num, sum) => num + sum, 0);

//   return totalNum - expectedNum;
// }
// let n = 6;
// let arr = [1, 2, 3, 4, 6];
// console.log(findingMissingNum(n, arr));

// function reverseString(str) {
//   let reversed = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i]; // Add each character starting from the end
//   }
//   return reversed;
// }

// console.log(reverseString("hello")); // Output: "olleh"

// let reviews = [
//   {
//     rating: 4,
//     comment: "Very satisfied!",
//     date: "2022-05-23T08:56:21.620Z",
//     reviewerName: "Elijah Hill",
//     reviewerEmail: "elijah.hill@x.dummyjson.com",
//   },
//   {
//     rating: 5,
//     comment: "Fast shipping!",
//     date: "2020-05-23T08:56:21.620Z",
//     reviewerName: "Liam Garcia",
//     reviewerEmail: "liam.garcia@x.dummyjson.com",
//   },
//   {
//     rating: 4,
//     comment: "Excellent quality!",
//     date: "2024-05-23T08:56:21.620Z",
//     reviewerName: "Ella Cook",
//     reviewerEmail: "ella.cook@x.dummyjson.com",
//   },
// ];

// // let exReviews = reviews.map((e) => {
// //   return e.rating + 100;
// // });
// // console.log(exReviews);
// // let exReviews = reviews.filter((e) => {
// //   return e.rating > 4;
// // });
// // console.log(exReviews);

// const exReviews = reviews.map((e) => {
//   return e.reviewerEmail;
// });
// console.log(exReviews);

// function exDefaultParam(name = "default param") {
//   console.log(`hello ${name}`);
// }
// exDefaultParam("latha");

// const extemplated = (name) => {
//   console.log(`wellocme${name}`);
// };
// extemplated("madhu");

// let promise = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     resolve("ss");
//   } else {
//     reject("dd");
//   }
// });
// promise
//   .then((resolve) => {
//     console.log("sucess");
//   })
//   .catch((reject) => {
//     console.error(reject);
//   });

// async function name(params) {
//   let users = new Promise((resolve) => setTimeout(() => resolve("hi"), 1000));
//   return await users;
// }

// name("ss").then(console.log);

// async function getMessage() {
//   let messsage = await "wellcome to async";
//   console.log(messsage);
// }
// getMessage();

// let f = 10;
// function greet() {
//   let v = 20;
//   console.log(v);
// }
// greet();

// console.log(f);
// const arr2 = [1, 2, 3, 4, 5, 6];
// console.log(arr2);

// const exArrow = (name) => {
//   console.log(`this is ${name}`);
// };
// exArrow("latha");
// function exDefault(name = "default param") {
//   console.log(`this is ${name}`);
// }
// exDefault("madhu");

// let arr3 = [2, 3, 4, 5];
// let arr4 = [6, 7, 8, 9];
// let rst2 = [...arr3, ...arr4];
// console.log(rst2);
// let [a, ...rest] = [1, 2, 3, 4, 5, 6, 7];
// console.log(a);
// console.log(rest);

// const people = {
//   name1: "latha",
//   age: 30,
//   designation: "developer",
// };
// const { name1, age, designation } = people;
// console.log(name1);

// class person1 {
//   constructor(work, fee) {
//     (this.work = work), (this.fee = fee);
//   }
//   print() {
//     console.log(`this is ${this.work} and work ${this.fee}`);
//   }
// }
// let rst4 = new person1("tester", 300);

// rst4.print();

// function exCallback(name, callback) {
//   console.log(`this my ${name}`);
//   callback();
// }
// function say() {
//   console.log("boy");
// }
// let answer = exCallback("suma", say);
// console.log(answer);

// function multiply(factor) {
//   return function (num5) {
//     return factor * num5;
//   };
// }

// const double = multiply(2);
// console.log(double(3));

// let myPromise = new Promise((resolve, reject) => {
//   let sucess = true;
//   if (sucess) {
//     resolve("data fetched data");
//   } else {
//     reject("failed to fetched to data");
//   }
// });
// myPromise
//   .then((response) => {
//     console.log(response);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// function exClouser() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }
// let increment = exClouser();
// increment();
// increment();
// increment();

// console.log("start");
// setTimeout(() => {
//   console.log("excuted ofter 2 mintues");
// }, 2000);
// console.log("end");
var b = 20;
function exFun() {
  var a = 10;
  console.log(a);
}
exFun();

console.log(b);

let num = [1, 2, 3, 4, 5];
console.log(num);
const exNum = [6, 7, 8, 9, 10];

let num1 = [1, 2, 3, 4, 5];
let num2 = [6, 7, 8, 9];
let exSpred = [...num1, ...num2];
console.log(exSpred);

let { a, ...rst } = { a: 12, v: 13, s: 15, t: 16, d: 17 };
console.log(a);
console.log(rst);

const people = {
  id: 12,
  name: "suma",
  salary: 1000,
};
const { id, name, salary } = people;
console.log(id);
const exArrow = () => {
  console.log("this is exArrow");
};
exArrow();

function exTemplate(name) {
  console.log(`this is my name ${name}`);
}
exTemplate("geetha");

function exDeafult(name = "deafult") {
  console.log(`this is value${name}`);
}
exDeafult("dd");

function withParam(a, b) {
  return a + b;
}
let rst1 = withParam(2, 3);
console.log(rst1);

function withOutReturn() {
  console.log("this is without return");
}
withOutReturn();
function withOutParam() {
  console.log("withOut param");
}
withOutParam();

function withReturn(d, c) {
  return d + c;
}
let exwithReturn = withReturn(6, 7);
console.log(exwithReturn);

myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("data fetched succefully");
  } else {
    reject("data fethced failed");
  }
});
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

async function exAsync() {
  let users = await new Promise((resolve) => {
    resolve("data");
    console.log(users);
  });
}
exAsync();
