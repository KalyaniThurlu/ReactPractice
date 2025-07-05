function findMissingNum(arr, n) {
  let totalnum = (n * (n + 1)) / 2;
  let expextedNum = arr.reduce((sum, num) => sum + num, 0);
  return totalnum - expextedNum;
}
let arr = [1, 2, 3, 5];
let n = 5;
console.log(findMissingNum(arr, n));

let arr1 = [2, 3, 4, 4, 5, 6, 7, 8, 2];
function findDuplicateNum(arr1) {
  return arr1.filter((num, index) => arr1.indexOf(num) !== index);
}

console.log(findDuplicateNum(arr1));

function reverdFn(str) {
  let rst = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rst += str[i];
  }
  return rst;
}
console.log(reverdFn("hello"));

let minNum = [1, 2, 34, 3, -9, 4, 5, 6];
let exMin = 0;
for (let i = 0; i < minNum.length; i++) {
  if (minNum[i] < exMin) {
    exMin += minNum[i];
  }
}
console.log(exMin);

let positive = [1, -2, 3, -4, 5, -6, 7, -8, 9, -10];
let exPositive = [];
for (let i = 0; i < positive.length; i++) {
  if (positive[i] < 0) {
    exPositive += positive[i];
  }
}
console.log(exPositive);

let even = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let exNwgative = [];
for (let i = 0; i < even.length; i++) {
  if (even[i] % 2 !== 0) {
    exNwgative.push(even[i]);
  }
}
console.log(exNwgative);

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

console.log(isPrime(3)); // Output: true
console.log(isPrime(12)); // Output: false

function ispalindrome(str) {
  let rev = str.split("").reverse().join("");
  return str === rev;
}
console.log(ispalindrome("madam"));

function findingMissingNum(arr, num) {
  let;
}

const jsonData = [
  {
    id: "1",
    name: "Google Pixel 6 Pro",
    data: {
      color: "Cloudy White",
      capacity: "128 GB",
    },
  },
  {
    id: "2",
    name: "Apple iPhone 12 Mini, 256GB, Blue",
    data: null,
  },
  {
    id: "3",
    name: "Apple iPhone 12 Pro Max",
    data: {
      color: "Cloudy White",
      "capacity GB": 512,
    },
  },
  {
    id: "4",
    name: "Apple iPhone 11, 64GB",
    data: {
      price: 389.99,
      color: "Purple",
    },
  },
  {
    id: "5",
    name: "Samsung Galaxy Z Fold2",
    data: {
      price: 689.99,
      color: "Brown",
    },
  },
  {
    id: "6",
    name: "Apple AirPods",
    data: {
      generation: "3rd",
      price: 120,
    },
  },
  {
    id: "7",
    name: "Apple MacBook Pro 16",
    data: {
      year: 2019,
      price: 1849.99,
      "CPU model": "Intel Core i9",
      "Hard disk size": "1 TB",
    },
  },
  {
    id: "8",
    name: "Apple Watch Series 8",
    data: {
      "Strap Colour": "Elderberry",
      "Case Size": "41mm",
    },
  },
  {
    id: "9",
    name: "Beats Studio3 Wireless",
    data: {
      Color: "Red",
      Description: "High-performance wireless noise cancelling headphones",
    },
  },
  {
    id: "10",
    name: "Apple iPad Mini 5th Gen",
    data: {
      Capacity: "64 GB",
      "Screen size": 7.9,
    },
  },
  {
    id: "11",
    name: "Apple iPad Mini 5th Gen",
    data: {
      Capacity: "254 GB",
      "Screen size": 7.9,
    },
  },
  {
    id: "12",
    name: "Apple iPad Air",
    data: {
      Generation: "4th",
      Price: "419.99",
      Capacity: "64 GB",
    },
  },
  {
    id: "13",
    name: "Apple iPad Air",
    data: {
      Generation: "4th",
      Price: "519.99",
      Capacity: "256 GB",
    },
  },
];
// let data = jsonData.filter((e) => e.data?.Color || e.data?.Capacity);
// console.log(data);
// let data = jsonData.filter((e) => e.data?.Description);
// console.log(data);

let data = jsonData.map((s) => s.data?.salay ?? "no salary");
console.log(data);
