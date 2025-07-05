// let name = 0;
// let fullName = name ?? "no name";
// console.log(fullName);

// let age;
// let exAge = age ?? "not availble age";
// console.log(exAge);

// let value = null;
// console.log(value ?? "no value");

// function getPrice(num) {
//   return num;
// }
// let finalPrice = getPrice(299) ?? 100;
// console.log(finalPrice);

// const obj = [
//   { name: "latha", age: 20 },
//   { name: "priya", age: 15 },
//   { age: 15 },
// ];

// let firstName = obj[3]?.name ?? "not avalible name";
// console.log(firstName);

// let config = null;
// console.log(config ?? { light: "blue", language: "light" });
// // let names = obj.map((a) => a.name ?? "no name");

// let names;
// let myNames = names || "not a name";
// console.log(myNames);

const data = [
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
// let exData = data.filter((s) => s.data?.price && s.data?.Generation);
// console.log(exData);

// let filteredData = data.map((e) => e.data?.color || "no color");

// console.log(filteredData);

const obj = {
  name: "suma",
  age: 20,
  salary: 1000,
};
let exObj = obj.salary.length ?? "not data";
console.log(exObj);

const obj1 = {
  name: "suma",
  age: 20,
  salary: [2000, 1000],
  address: [{ village: "abc", mandal: "ss" }, { village: "dd" }],
};

//   let rst = obj1.address.map((e) => e.mandal?.length ?? "not mandal");
let rst = obj1.occupaton?.length ?? "no data";
console.log(rst);
