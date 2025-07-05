const employye = [
  { id: 10001, name: "latha", salary: 10000 },
  { id: 34567, name: "geetha", salary: 20000 },
  { id: 35678, name: "madhu", salary: 10000 },
];

const rst = [];
for (let i = 0; i < employye.length; i++) {
  const data = {
    name: employye[i].name,
    id: employye[i].id,
  };
  rst.push(data);
}
console.log(rst);

const results1 = employye.filter((e) => e.id > 10001);
console.log(results1);
const rst1 = employye.map((e) => e.salary + 10000);
console.log(rst1);

const results = employye.find((e) => e.name === "latha");
console.log(results);

const emp = [
  {
    id: 1022,
    name: "latha",
    salary: 10000,
    Adderss: {
      contactNum: 9619895748,

      village: "Gollapalli",
      Mandal: "npk",
      Dis: "Ananthapoor",
    },
  },
  {
    id: 2309,
    name: "suma",
    salary: 10023,
    Adderss1: {
      contactNum: 9718783647,

      village: "nkp",
      Mandal: "Galiveedu",
      Dis: "Anamayya",
    },
  },
];

// const rst = emp.find((e) => e.name === "suma");
// console.log(rst);

console.log(emp[0].Adderss.village);

const company = [
  {
    occupation: "developer",
    employees: [
      {
        id: 1020,
        name: "Priya",
        salary: 1000,
        address: {
          village: "abc village",
          mandal: "abc mandal",
        },
        subordinates: [
          {
            id: 1234,
            name: "Sudha",
            address: {
              village: "Gollapalii",
              mandal: "npk",
            },
          },
        ],
      },
    ],
  },
];

// console.log(company[0].employees[0].address.mandal);

const exEmployees = [];
for (let companys of company) {
  const obj = {
    village: companys.employees[0].subordinates[0].address.village,
  };
  exEmployees.push(obj);
}
console.log(exEmployees);

function findingNum(arr, n) {
  const totalnum = (n * (n + 1)) / 2;
  const expectednum = arr.reduce((sum, num) => sum + num, 0);
  return totalnum - expectednum;
}
let arr = [1, 3, 4, 5];
let n = 5;
console.log(findingNum(arr, n));

// function reverString(str) {
//   let storedstr = "";
//   for (let i = str.length; i >= 0; i--) {
//     storedstr += str[i];
//   }
//   return storedstr;
// }

// console.log(reverString("hello"));

function reversedString(str) {
  let exRevers = "";
  for (let i = str.length - 1; i >= 0; i--) {
    exRevers += str[i];
  }
  return exRevers;
}
console.log(reversedString("hello"));

// const reviews = [
//   {
//     rating: 1,
//     comment: "Very unhappy with my purchase!",
//     date: "2024-05-23T08:56:21.618Z",
//     reviewerName: "John Doe",
//     reviewerEmail: "john.doe@x.dummyjson.com",
//   },
//   {
//     rating: 2,
//     comment: "Not as described!",
//     date: "2024-05-23T08:56:21.618Z",
//     reviewerName: "Nolan Gonzalez",
//     reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
//   },
//   {
//     rating: 5,
//     comment: "Very satisfied!",
//     date: "2024-05-23T08:56:21.618Z",
//     reviewerName: "Scarlett Wright",
//     reviewerEmail: "scarlett.wright@x.dummyjson.com",
//   },
// ];

// const exReview = reviews.find(
//   (review) => review.reviewerName === "Scarlett Wright"
// );
// console.log(exReview);
// console.log(reviews[0]);

const products = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    description:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    category: "beauty",
    price: 9.99,
    discountPercentage: 7.17,
    rating: 4.94,
    stock: 5,
    tags: ["beauty", "mascara"],
    brand: "Essence",
    sku: "RCH45Q1A",
    weight: 2,
    dimensions: {
      width: 23.17,
      height: 14.43,
      depth: 28.01,
    },
    warrantyInformation: "1 month warranty",
    shippingInformation: "Ships in 1 month",
    availabilityStatus: "Low Stock",
    reviewss: [
      {
        rating: 1,
        comment: "Very unhappy with my purchase!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "John Doe",
        reviewerEmail: "john.doe@x.dummyjson.com",
      },
      {
        rating: 2,
        comment: "Not as described!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Nolan Gonzalez",
        reviewerEmail: "nolan.gonzalez@x.dummyjson.com",
      },
      {
        rating: 5,
        comment: "Very satisfied!",
        date: "2024-05-23T08:56:21.618Z",
        reviewerName: "Scarlett Wright",
        reviewerEmail: "scarlett.wright@x.dummyjson.com",
      },
    ],
  },
];

// const exProducts = products[0].reviewss.find((review) => review.reviewerName==="Scarlett Wright");
// console.log(exProducts);

// const filteredReviews = products[0].reviewss.filter((review) => review.rating > 2);
// console.log(filteredReviews);
console.log(products[0].tags);



