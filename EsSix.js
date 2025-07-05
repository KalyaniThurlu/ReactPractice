const people = [
  {
    id: 2345,
    name: "latha",
    Address: {
      village: "addressvillage",
      mandal: "adressmandal",
    },
  },
  {
    id: 3321,
    name: "rama",
    Address1: {
      village: "address1village",
      mandal: "adress1mandal",
    },
  },
  {
    id: 5543,
    name: "suma",
    Address2: {
      village: "address2village",
      mandal: "adress2mandal",
    },
  },
  {
    id: 665,
    name: "padhma",
    Address3: {
      village: "address3village",
      mandal: "adress3mandal",
    },
  },
];
const exPeople = [];
for (let i = 0; i < people.length; i++) {
  if (people[i].id > 2000) {
    exPeople.push(people[i].id);
  }
}
console.log(exPeople);
// const exPeople=people.find((e)=>e.id==665)
// console.log(exPeople)

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
    reviews: [
      {
        rating: 2,
        comment: "Very unhappy with my purchase!",
        date: "2020-05-23T08:56:21.618Z",
        reviewerName: "John Doe",
        reviewerEmail: "john.doe@x.dummyjson.com",
      },
      {
        rating: 2,
        comment: "Not as described!",
        date: "2022-05-23T08:56:21.618Z",
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

const exproducts = products[0].reviews.find((e) => {
  reviewdate = new Date(e.date).getFullYear();
  return reviewdate == 2024;
});
console.log(exproducts);

// const exproducts = [];
// for (let i = 0; i < products.length; i++) {
//   for (let j = 0; j < products[i].reviews.length; j++) {
//     if (products[i].reviews[j].reviewerName) {
//       exproducts.push(products[i].reviews[j].reviewerName);
//     }
//   }
// }
// console.log(exproducts);


