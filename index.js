// function findingMissingNum(n, arr) {
//   arr.sort((a, b) => a - b);

//   for (let i = 0; i < n; i++) {
//     if (arr[i] !== i + 1) {
//       return i + 1;
//     }
//   }
// }

// let n = 5;
// let arr = [1, 2, 3, 5];
// console.log(findingMissingNum(n, arr));

function findingMissingNum(n, arr) {
  let totalNum = (n * (n + 1)) / 2;
  let expectedNum = arr.reduce((num, sum) => num + sum, 0);

  return totalNum - expectedNum;
}
let n = 6;
let arr = [1, 2, 3, 4, 6];
console.log(findingMissingNum(n, arr));

function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]; // Add each character starting from the end
  }
  return reversed;
}

console.log(reverseString("hello")); // Output: "olleh"

let reviews = [
  {
    rating: 4,
    comment: "Very satisfied!",
    date: "2022-05-23T08:56:21.620Z",
    reviewerName: "Elijah Hill",
    reviewerEmail: "elijah.hill@x.dummyjson.com",
  },
  {
    rating: 5,
    comment: "Fast shipping!",
    date: "2020-05-23T08:56:21.620Z",
    reviewerName: "Liam Garcia",
    reviewerEmail: "liam.garcia@x.dummyjson.com",
  },
  {
    rating: 4,
    comment: "Excellent quality!",
    date: "2024-05-23T08:56:21.620Z",
    reviewerName: "Ella Cook",
    reviewerEmail: "ella.cook@x.dummyjson.com",
  },
];

// let exReviews = reviews.map((e) => {
//   return e.rating + 100;
// });
// console.log(exReviews);
// let exReviews = reviews.filter((e) => {
//   return e.rating > 4;
// });
// console.log(exReviews);

const exReviews = reviews.filter((e) => {
  return e.reviewerName.length < 11;
});
console.log(exReviews);




