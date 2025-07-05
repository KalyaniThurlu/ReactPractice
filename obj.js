const employees = [
  {
    id: 1,
    name: "Rama",
    gender: "female",
    salary: 50000,
    experience: 2,
    technology: "React",
    Address: [
      {
        Address1: {
          pincode: 1234,
          mobile: {
            landline: {
              personal: 984598200,
              networks: {
                provider1: "Vodafone",
                provider2: "Idea",
                structure: {
                  newProvider: "bsnl",
                  validity: "12 months",
                  additionalInfo: {
                    cost: "600/3month",
                    extraData: "2GB/day",
                  },
                },
              },
            },
            number: 5442334334898,
          },
        },
      },
    ],
  },

  {
    id: 2,
    name: "Priya",
    gender: "female",
    salary: 60000,
    experience: 6,
    technology: "Node.js",
    Address: [
      {
        Address1: {
          pincode: 5566,
          mobile: {
            landline: {
              personal: 76544390,
              networks: {
                provider1: "verizon",
                provider2: "sprint",
                status: {
                  primaryProvider: "active",
                  secondaryProvider: "inactive",
                  structure: {
                    newProvider: "gio",
                    validity: "6 months",
                    additionalInfo: {
                      cost: "350/month",
                      extraData: "2GB/day",
                      offers: {
                        discount: "30%",
                        validTill: "jan/12",
                        bonusData: "100B/day",
                      },
                    },
                  },
                },
              },
            },
            number: 6585956533,
          },
        },
      },
    ],
  },
  {
    id: 3,
    name: "Ravi",
    gender: "male",
    salary: 70000,
    experience: 7,
    technology: "Java",
    Address: [
      {
        Address1: {
          pincode: 8899,
          mobile: {
            landline: {
              personal: 6793492002,
              networks: {
                provider1: "reliance",
                provider2: "mtnl",
                status: {
                  primaryProvider: "Enabled",
                  secondaryProvider: "Disabled",
                  structure: {
                    newProvider: "vodafon",
                    validity: "3 months",
                    additionalInfo: {
                      cost: "399/1month",
                      extraData: "5GB/day",
                      offers: {
                        discount: "10%",
                        validTill: "Aug/12",
                        bonusData: "50GB/day",
                      },
                    },
                  },
                },
              },
            },
            number: 76585904433,
          },
        },
      },
    ],
  },
  {
    id: 4,
    name: "Latha",
    gender: "female",
    salary: 80000,
    experience: 8,
    technology: "Python",
    Address: [
      {
        Address1: {
          pincode: 15643,
          mobile: {
            landline: {
              personal: 5869999922,
              networks: {
                provider1: "vodafone",
                provider2: "gio",
                status: {
                  primaryProvider: "active",
                  secondaryProvider: "inactive",
                  structure: {
                    newProvider: "idea",
                    validity: "6 months",
                    additionalInfo: {
                      cost: "205/month",
                      extraData: "1GB/day",
                    },
                    offers: {
                      discount: "10%",
                      validTill: "june/12",
                      bonusData: "300GB/day",
                    },
                  },
                },
              },
            },
            number: 8741874671,
          },
        },
      },
    ],
  },
  {
    id: 5,
    name: "Raju",
    gender: "male",
    salary: 55000,
    experience: 4,
    technology: "Angular",
    Address: [
      {
        Address1: {
          pincode: 9874,
          mobile: {
            landline: {
              personal: 987698200,
              networks: {
                provider1: "airtel",
                provider2: "gio",
                status: {
                  primaryProvider: "Enabled",
                  secondaryProvider: "Disabled",
                  structure: {
                    newProvider: "airtel",
                    validity: " 12 months",
                    additionalInfo: {
                      cost: "299/month",
                      extraData: "1.5GB/day",
                      offers: {
                        discount: "10%",
                        validTill: "may/14",
                        bonusData: "400GB/day",
                      },
                    },
                  },
                },
              },
            },
            number: 9578281919,
          },
        },
      },
    ],
  },
  {
    id: 6,
    name: "padhma",
    gender: "female",
    salary: 65000,
    experience: 5,
    technology: "Ruby",
    Address: [
      {
        Address1: {
          pincode: 4532,
          mobile: {
            landline: {
              personal: 9840988200,
              networks: {
                provider1: "bsnl",
                provider2: "airtel",
                status: {
                  primaryProvider: "active",
                  secondaryProvider: "inactive",
                  structure: {
                    newProvider: "bnl",
                    validity: "1 year",
                    additionalInfo: {
                      cost: "150/month",
                      extraData: "",
                      offers: {
                        discount: "40%",
                        validTill: "feb/23",
                        bonusData: "300GB/day",
                      },
                    },
                  },
                },
              },
            },
            number: 858882123,
          },
        },
      },
    ],
  },

  {
    id: 7,
    name: "Madhu",
    gender: "male",
    salary: 75000,
    experience: 6,
    technology: "JavaScript",
    Address: [
      {
        Address1: {
          pincode: 9807,
          mobile: {
            landline: {
              personal: 98798200,
              networks: {
                provider1: "idea",
                provider2: "Airtel",
                status: {
                  primaryProvider: "Enabled",
                  secondaryProvider: "Disabled",
                  structure: {
                    newProvider: "idea",
                    validity: "1 year",
                    additionalInfo: {
                      cost: "550/6month",
                      extraData: "1.5GB/day",
                    },
                    offers: {
                      discount: "30%",
                      validTill: "jan/12",
                      bonusData: "400GB/day",
                    },
                  },
                },
              },
            },
            number: 3747388819,
          },
        },
      },
    ],
  },
  {
    id: 8,
    name: "Suma",
    gender: "female",
    salary: 82000,
    experience: 9,
    technology: "Ai/Ml",
    Address: [
      {
        Address1: {
          pincode: 3452,
          mobile: {
            landline: {
              personal: 98776545343,

              networks: {
                provider1: "vodafone",
                provider2: "gio",
                status: {
                  primaryProvider: "active",
                  secondaryProvider: "inactive",
                  structure: {
                    newProvider: "vodafone",
                    validity: "6 months",
                    additionalInfo: {
                      cost: "399/3month",
                      extraData: "1.5GB/day",
                    },
                    offers: {
                      discount: "30%",
                      validTill: "march/20",
                      bonusData: "100GB/day",
                    },
                  },
                },
              },
            },

            number: 9876432134,
          },
        },
      },
    ],
  },

  {
    id: 9,
    name: "Nadhu",
    gender: "male",
    salary: 95000,
    experience: 10,
    technology: "C++",
    Address: [
      {
        Address1: {
          pincode: 99807,
          mobile: {
            landline: {
              personal: 9845987200,

              networks: {
                provider1: "airtel",
                provider2: "idea",
                status: {
                  primaryProvider: "active",
                  secondaryProvider: "Disabled",
                  structure: {
                    newProvider: "jio",
                    validity: "2 years",
                    additionalInfo: {
                      cost: "200/month",
                      extraData: "1.5GB/day",
                    },
                    offers: {
                      discount: "20%",
                      validTill: "April/12",
                      bonusData: "200GB/day",
                    },
                  },
                },
              },
            },
            number: 457659802,
          },
        },
      },
    ],
  },
  {
    id: 10,
    name: "suresh",
    gender: "male",
    salary: 95000,
    experience: 11,
    technology: "Java",
    Address: [
      {
        Address1: {
          pincode: 45321,
          mobile: {
            landline: {
              personal: 9874598200,

              networks: {
                provider1: "bsnl",
                provider2: "gio",
                status: {
                  primaryProvider: "active",
                  secondaryProvider: "inactive",
                  structure: {
                    newProvider: "airtel",
                    validity: "1 year",
                    additionalInfo: {
                      cost: "₹399/month",
                      extraData: "2GB/day",
                      offers: {
                        discount: "10%",
                        validTill: "may12",
                        bonusData: "300GB/day",
                      },
                    },
                  },
                },
              },
            },
            number: 6585904433,
          },
        },
      },
    ],
  },
];

const emp = employees.map((s) =>
  s.Address.map(
    (d) => d.Address1.mobile.landline.networks.status?.primaryProvider
  )
);
console.log(emp);
// const emp = employees.flatMap((s) =>
//   s.Address.map(
//     (a) =>
//       a.Address1.mobile.landline.networks.status?.structure?.additionalInfo
//         .offers?.validTill
//   )
// );

// console.log(emp);
// let emp = employees.flatMap((e) =>
//   e.Address.map(
//     (s) =>
//       s.Address1.mobile.landline.networks.status?.structure.additionalInfo.cost
//   )
// );
// console.log(emp);
// let emp = [];
// for (let i = 0; i < employees.length; i++) {
//   emp.push(
//     employees[i].Address.map(
//       (s) =>
//         s.Address1.mobile.landline.networks.status?.structure.additionalInfo
//           .cost
//     )
//   );
// }
// console.log(emp);

//==BODMAS==
//Brackets(), O :Orders, D :Division, M:multiplication, A:Addition, S:substraction

// let x = (2 ^ 4) + 2;

// console.log(x);

let num1 = [1, 2, 3, 4, 5];

let num2 = [6, 7, 8];
let results = [...num1, ...num2];
console.log(results);
let [a, ...rest] = [1, 2, 3, 4, 5];
console.log(a);
console.log(rest);

function exDefaultparam(name = "defaultParam") {
  console.log(`this is my${name}`);
}
exDefaultparam();
