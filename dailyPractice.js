// let num21=[1,2,3,4,5]
// console.log(num21?.[2])

// let num1=5
// let num3="5"
// console.log(num1==num3)
// console.log(num1===num3)

// function outer(){
//   let name="kalyani";
//   function inner(){
//     console.log(name)
    
//   }
//   return inner;
// }
// let myFun  = outer();
// myFun();


// function getUser() {
//   return Promise.resolve("Kalyani");
// }

// async function greet() {
//   let user = await getUser();
//   console.log("Hello, " + user);
// }

// greet();

// function  getUser1(){
// return Promise.resolve("latha");
// }

// async function greet1() {
// let user1   = await getUser1();
// console.log(user1)
// }

// greet1();


const nums1 =[1,2,3,4]
const nums2 =[5,6,7]
const combained =[...nums1,...nums2]
console.log(combained)

const [a,...rest] =[1,2,3,4,5]
console.log(a)
console.log(rest)
const obj ={
  id:112,
  name:"abc",
  salary:2009
}
const {id,name,salary} =obj
console.log(name)
function exDefaultParam(name ="defaultParam"){
console.log(`this my ${name}`)
}
exDefaultParam("latha")
// function outer() {
//   let name = "Kalyani";
//   function inner() {
//     console.log(name);
//   }
//   return inner;
// }
// let myFunc = outer();
// myFunc(); // Output: Kalyani


// // let nums11=[1,2,3,4]
// let numss10=[5,6,7,8,9]
// let rst=[...nums11,...numss10]
// console.log(rst)

// let [a,...rest]=[1,2,3,4]
// console.log(a)
// console.log(rest)
// const rst1=()=>{
//   console.log("this is js code")
// } 
// rst1()
// function exDefaultParam(name="deafultParam"){
// console.log(`${name}this is my name`)
// }
// exDefaultParam("suma")
// const obj1={
//   id:12,

  
//   name:"sumana",
//   age:21,
// }
// const {id,name,age}=obj1
// console.log(age)

// console.log(even)


// let exOdd=[1,2,3,4,5,6,7,8,9,10]
// let odd=[]
// for(let i =0;i<exOdd.length;i++){
// if(exOdd[i]%2!=0){
// odd.push(exOdd[i])
// }
// }
// console.log(odd)
// let s=10,b=20,c=30
// function exFun (s,b,c){

//   if(b>=s){
// console.log(" 20 is greater than 10")
//   }else if(c===b){
// console.log("30 is equalts 20")
//   }else if(c>=s){
// console.log("30 is equlats to 10")
//   }else{
//     console.log("all are wrong")
//   }

// }
// exFun(20,30,40)

// let colors="blue"
// switch(colors){
// case "block":
//   console.log("this is block color");
//   break;
//   case "pink":
//     console.log("this is pink color");
//     break;
//     case "blue":
//       console.log("this is blue color")
//       break;
//       default:"this invalid color"
//     }
//     console.log(colors)


//   let exOpationalChaning=[1,2,3,4,5]
//   console.log(exOpationalChaning?.[4])
// const obj4={
//   id:22,
//   name:"sumana",
//   age:20
// }

// console.log(obj4?.salary)

// let NullishCollish=0
// console.log(NullishCollish??"no numbers")

// let rOperator
// console.log(rOperator||"no numbers")
// let ternaryOpearator=24
// console.log(ternaryOpearator?"no numbers":"numbers is there")


// const employees = [
//   {
//     id: 1,
//     name: "Rama",
//     gender: "female",
//     salary: 50000,
//     experience: 2,
//     technology: "React",
//     Address: [
//       {
//         Address1: {
//           pincode: 1234,
//           mobile: {
//             landline: {
//               personal: 984598200,
//               networks: {
//                 provider1: "Vodafone",
//                 provider2: "Idea",
//                 structure: {
//                   newProvider: "bsnl",
//                   validity: "12 months",
//                   additionalInfo: {
//                     cost: "600/3month",
//                     extraData: "2GB/day",
//                   },
//                 },
//               },
//             },
//             number: 5442334334898,
//           },
//         },
//       },
//     ],
//   },

//   {
//     id: 2,
//     name: "Priya",
//     gender: "female",
//     salary: 60000,
//     experience: 6,
//     technology: "Node.js",
//     Address: [
//       {
//         Address1: {
//           pincode: 5566,
//           mobile: {
//             landline: {
//               personal: 76544390,
//               networks: {
//                 provider1: "verizon",
//                 provider2: "sprint",
//                 status: {
//                   primaryProvider: "active",
//                   secondaryProvider: "inactive",
//                   structure: {
//                     newProvider: "gio",
//                     validity: "6 months",
//                     additionalInfo: {
//                       cost: "350/month",
//                       extraData: "2GB/day",
//                     },
//                   },
//                 },
//               },
//             },
//             number: 6585956533,
//           },
//         },
//       },
//     ],
//   },
//   {
//     id: 3,
//     name: "Ravi",
//     gender: "male",
//     salary: 70000,
//     experience: 7,
//     technology: "Java",
//     Address: [
//       {
//         Address1: {
//           pincode: 8899,
//           mobile: {
//             landline: {
//               personal: 6793492002,
//               networks: {
//                 provider1: "reliance",
//                 provider2: "mtnl",
//                 status: {
//                   primaryProvider: "Enabled",
//                   secondaryProvider: "Disabled",
//                   structure: {
//                     newProvider: "vodafon",
//                     validity: "3 months",
//                     additionalInfo: {
//                       cost: "399/1month",
//                       extraData: "5GB/day",
//                     },
//                   },
//                 },
//               },
//             },
//             number: 76585904433,
//           },
//         },
//       },
//     ],
//   },
//   {
//     id: 4,
//     name: "Latha",
//     gender: "female",
//     salary: 80000,
//     experience: 8,
//     technology: "Python",
//     Address: [
//       {
//         Address1: {
//           pincode: 15643,
//           mobile: {
//             landline: {
//               personal: 5869999922,
//               networks: {
//                 provider1: "vodafone",
//                 provider2: "gio",
//                 status: {
//                   primaryProvider: "active",
//                   secondaryProvider: "inactive",
//                   structure: {
//                     newProvider: "idea",
//                     validity: "6 months",
//                     additionalInfo: {
//                       cost: "205/month",
//                       extraData: "1GB/day",
//                     },
//                   },
//                 },
//               },
//             },
//             number: 8741874671,
//           },
//         },
//       },
//     ],
//   },
//   {
//     id: 5,
//     name: "Raju",
//     gender: "male",
//     salary: 55000,
//     experience: 4,
//     technology: "Angular",
//     Address: [
//       {
//         Address1: {
//           pincode: 9874,
//           mobile: {
//             landline: {
//               personal: 987698200,
//               networks: {
//                 provider1: "airtel",
//                 provider2: "gio",
//                 status: {
//                   primaryProvider: "Enabled",
//                   secondaryProvider: "Disabled",
//                   structure: {
//                     newProvider: "airtel",
//                     validity: " 12 months",
//                     additionalInfo: {
//                       cost: "299/month",
//                       extraData: "1.5GB/day",
//                     },
//                   },
//                 },
//               },
//             },
//             number: 9578281919,
//           },
//         },
//       },
//     ],
//   },
//   {
//     id: 6,
//     name: "padhma",
//     gender: "female",
//     salary: 65000,
//     experience: 5,
//     technology: "Ruby",
//     Address: [
//       {
//         Address1: {
//           pincode: 4532,
//           mobile: {
//             landline: {
//               personal: 9840988200,
//               networks: {
//                 provider1: "bsnl",
//                 provider2: "airtel",
//                 status: {
//                   primaryProvider: "active",
//                   secondaryProvider: "inactive",
//                   structure: {
//                     newProvider: "bnl",
//                     validity: "1 year",
//                     additionalInfo: {
//                       cost: "150/month",
//                       extraData: "",
//                     },
//                   },
//                 },
//               },
//             },
//             number: 858882123,
//           },
//         },
//       },
//     ],
//   },

//   {
//     id: 7,
//     name: "Madhu",
//     gender: "male",
//     salary: 75000,
//     experience: 6,
//     technology: "JavaScript",
//     Address: [
//       {
//         Address1: {
//           pincode: 9807,
//           mobile: {
//             landline: {
//               personal: 98798200,
//               networks: {
//                 provider1: "idea",
//                 provider2: "Airtel",
//                 status: {
//                   primaryProvider: "Enabled",
//                   secondaryProvider: "Disabled",
//                   structure: {
//                     newProvider: "idea",
//                     validity: "1 year",
//                     additionalInfo: {
//                       cost: "550/6month",
//                       extraData: "1.5GB/day",
//                     },
//                   },
//                 },
//               },
//             },
//             number: 3747388819,
//           },
//         },
//       },
//     ],
//   },
//   {
//     id: 8,
//     name: "Suma",
//     gender: "female",
//     salary: 82000,
//     experience: 9,
//     technology: "Ai/Ml",
//     Address: [
//       {
//         Address1: {
//           pincode: 3452,
//           mobile: {
//             landline: {
//               personal: 98776545343,

//               networks: {
//                 provider1: "vodafone",
//                 provider2: "gio",
//                 status: {
//                   primaryProvider: "active",
//                   secondaryProvider: "inactive",
//                   structure: {
//                     newProvider: "vodafone",
//                     validity: "6 months",
//                     additionalInfo: {
//                       cost: "399/3month",
//                       extraData: "1.5GB/day",
//                     },
//                   },
//                 },
//               },
//             },

//             number: 9876432134,
//           },
//         },
//       },
//     ],
//   },

//   {
//     id: 9,
//     name: "Nadhu",
//     gender: "male",
//     salary: 95000,
//     experience: 10,
//     technology: "C++",
//     Address: [
//       {
//         Address1: {
//           pincode: 99807,
//           mobile: {
//             landline: {
//               personal: 9845987200,

//               networks: {
//                 provider1: "airtel",
//                 provider2: "idea",
//                 status: {
//                   primaryProvider: "active",
//                   secondaryProvider: "Disabled",
//                   structure: {
//                     newProvider: "jio",
//                     validity: "2 years",
//                     additionalInfo: {
//                       cost: "200/month",
//                       extraData: "1.5GB/day",
//                     },
//                   },
//                 },
//               },
//             },
//             number: 457659802,
//           },
//         },
//       },
//     ],
//   },
//   {
//     id: 10,
//     name: "suresh",
//     gender: "male",
//     salary: 95000,
//     experience: 11,
//     technology: "Java",
//     Address: [
//       {
//         Address1: {
//           pincode: 45321,
//           mobile: {
//             landline: {
//               personal: 9874598200,

//               networks: {
//                 provider1: "bsnl",
//                 provider2: "gio",
//                 status: {
//                   primaryProvider: "active",
//                   secondaryProvider: "inactive",
//                   structure: {
//                     newProvider: "airtel",
//                     validity: "1 year",
//                     additionalInfo: {
//                       cost: "₹399/month",
//                       extraData: "2GB/day",
//                     },
//                   },
//                 },
//               },
//             },
//             number: 6585904433,
//           },
//         },
//       },
//     ],
//   },
// ];


// let numss ={}
// console.log(numss??"nonums")
// let number =[1,2,3,4]
// console.log(number?.[2])
// const obj ={
//   id:12,
//   name:"latha",
//   // salary:10000

// // }
// console.log(obj?.salary)
// let num =[1,2,3,4,5]
// console.log(num?"no numbers":num
// )

// let arr =[1,2,3,4]
// console.log(arr.push(6),arr)

// let arr1 =[1,2,3,4,5]
// console.log(arr1.pop(),arr1)

// let arr2 =[1,2,3,4]
// console.log(arr2.unshift(0),arr2)
// let arr3 =[6,7,8,9]
// console.log(arr3.shift(),arr3)
// let exSlice =["apple","banana","mango","orange"]
// console.log(exSlice.slice(1,3))

// let exMap =[1,2,3,4,5]
// let ee =exMap.map((v) =>{
// return v *2
// })
// console.log(ee)
// let exFilter=[6,7,8,9,10]

// let s=exFilter.filter((e)=>{
// return e %2===0
// })
// console.log(s)

// let arr10=[1,2,3,4,5]
// let arr11=[6,7,8,9,10]


// let exConcat=arr10.concat(arr11)
// console.log(exConcat)
// let exJoin=["apple","mango","banana","grapes"]
// console.log(exJoin.join(")"))
// let str="hello"
// console.log(str.toUpperCase())
// let str1="WELLCOME"
// console.log(str1.toLowerCase())

// let str3=["banana","apple","mango"]
// console.log(str3.includes("banana"))
// let str4="applebananaorange"
// console.log(str4.charAt())
// let str51=["grapes","mango","popaya"]
// console.log(str51.indexOf("popaya"))



// const rst=employees.map((s)=>s.Address.map((w)=>w.Address1.mobile.landline.networks.status?.structure.validity))
// console.log(rst)

// for(let i=0;i<employees.length;i++){
// if(employees[i].Address){
// rr.push(...employees[i].Address.map((s)=>s.Address1.mobile.landline.personal))

// }
// }
// console.log(rr)


// const obj={
// id:12,
// name:"latha"
// }
// console.log(obj?.salary)

// console.log(emp);
// let data = employees
//   .filter((s) => s.gender === "male")
//   .filter((d) => d.salary > 60000 && d.experience > 5);
// console.log(data);

// let data = []

// for (let i = 0; i < employees.length; i++) {
//   if (employees[i].Address) {
//     data.push(
//       ...employees[i].Address.map(
//         (s) => s.Address1.mobile.landline.networks.status?.structure?.validity
//       )
//     );
//   }
// }
// console.log(data);

// let array = [1, 2, 3, 4, 5, 6, 7];

// let ss = [];
// for (let i = 0; i < array.length; i++) {
//   if (array[i] % 2 !== 0) {
//     ss += array[i];
//   }
// }
// console.log(ss);

// let arr1 = [-1, 2, -3, 4, 5, -6, -7, 8, -9, 10];
// let num = [];
// for (let i = 0; i < arr1.length; i++) {
//   if (arr1[i] < 0) {
//     num += arr1[i];
//   }
// }
// console.log(num);

// let exNum = [, -1, 1, 2, 3, 4, 5, 6, 7, 89, 10];
// let exMin = 2;
// for (let i = 0; i < exNum.length; i++) {
//   if (exNum[i] > exMin) {
//     exMin = exNum[i];
//   }
// }
// console.log(exMin);

// function missingNum(arr, n) {
//   let totalNum = (n * (n + 1)) / 2;
//   let ex = arr.reduce((acc, num) => acc + num, 0);
//   return totalNum - ex;
// }
// let arr = [1, 2, 3, 5];
// let n = 5;
// console.log(missingNum(arr, n));
// let dd = [6, 7, 8];
// function exArr() {
//   let nums = [1, 2, 3, 4, 5];
//   console.log(nums);
// }
// exArr();
// console.log(dd);
// var dds = ["padhma", "sumana"];

// function exVar() {
//   var exVar1 = ["latha", "suma", "rama"];
//   console.log(exVar1);
// }
// exVar();
// console.log(dds);

// let num2 = [1, 2, 3];
// let num3 = [6, 7, 8];
// let results = [...num2, ...num3];
// console.log(results);

// let [a, ...rest] = [1, 2, 3, 4];
// console.log(a);
// console.log(rest);

// const exArrow = (a, b) => {
//   return a + b;
// };
// let answer = exArrow(5, 6);
// console.log(answer);

// function exDefault(name = "default") {
//   console.log(`this is my${name}`);
// }
// exDefault("sumana");

// class Parent {
//   constructor(name, age) {
//     (this.name = name), (this.age = age);
//   }
//   print() {
//     console.log(`this is my name ${this.name} also age ${this.age}`);
//   }
// }

// let rr = new Parent("geetha", 22);
// console.log(rr);

// function exOuterFun(counter) {
//   return function () {
//     counter++;
//     return counter;
//   };
// }
// let exB = exOuterFun(2);
// console.log(exB());
// console.log(exB());
// console.log(exB());
// console.log(exB());

// let myPromise = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     resolve("data is fetched");
//   } else {
//     reject("data can't fetched");
//   }
// });
// myPromise
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// async function name() {
//   let users = await new Promise((resolve) => {
//     resolve("wellcome");
//   });
//   console.log(users);
// }
// name();

// let ss1 = null;
// console.log(ss1 ?? "no");
// const obj = {
//   names: "vcds",
//   salary: 23445,
// };

// console.log(obj.id || "no");

// let num5 = 20;
// console.log(num5 ? "num is there" : "no nums");



