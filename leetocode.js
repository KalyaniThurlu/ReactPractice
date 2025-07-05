// //==BODMAS==
// //Brackets(), O :Orders, D :Division, M:multiplication, A:Addition, S:substraction

// // let x = (10 * (2 - 6)) / 2;
// // console.log(x);

// // /**
// //  * @return {Function}
// //  */
// // var createHelloWorld = function () {
// //   return function () {
// //     return "Hello World";
// //   };
// // };
// // let rst = createHelloWorld();
// // console.log(rst());

// var counter=function(init){
// let current=init
// return{
//   increment:function(){
//     return ++current
//   },
//   decrement:function(){
//     return --current
//   },
//   reset:function(){
//     return current
//   }
// }
// }
// let dd1=counter(2)
// console.log(dd1.increment())
// console.log(dd1.decrement())
// console.log(dd1.reset())


  
  
// var createHelloWorld=function(){
//   return function ( ) {
//     return "Hello World";
//   };
// };
// let rst=createHelloWorld();
// console.log(rst())
// var createCounter=function(counter){
//   return function(){ 

//   return counter++
//   }

// }

// let results=createCounter(10)
// console.log(results())
// console.log(results())
// console.log(results())

// var expected=function(val){
 
  
//     return{
//       toBe:function(otherVal){
// if(val===otherVal){
//   return true

// }else{
//   throw new Error("equal")
// }
//       },
//       notToBe:function(otherVal){
//         if(val!==otherVal){
// return true
//         }else{
//           throw new Error("not equal")
//         }
//       }
//     }
//   }
//   console.log({value:expected(2).toBe(2)})
//   console.log({value:expected(4).toBe(4)})

//   var createCounter1=function(init){
//     let current=init
//     return{
//      increment: function(){
//     return ++current
//       },
//       drecrement:function(){
// return --current
//       },
//       reset:function(){
//         return current
//       }
     
//     }

    

// }
//   let results1=createCounter1(2)

// console.log(results1.increment())
// console.log(results1.drecrement())



// // /**
// //  * const f = createHelloWorld();
// //  * f(); // "Hello World"
// //  */

// // var createCounter = function (n) {
// //   return function () {
// //     return n++;
// //   };
// // };

// // let counter = createCounter(10);
// // console.log(counter());
// // console.log(counter());

// // console.log(counter());

// // var expect = function (val) {
// //   return {
// //     toBe: function (otherVal) {
// //       if (val === otherVal) {
// //         return true;
// //       } else {
// //         throw new error("equal");
// //       }
// //     },
// //     notToBe: function (otherVal) {
// //       if (val !== otherVal) {
// //         return true;
// //       } else {
// //         throw new error("not equal");
// //       }
// //     },
// //   };
// // };
// // console.log({ value: expect(4).toBe(4) });
// // console.log({ value: expect(3).notToBe(2) });
// // // try {
// // //   console.log({ value: expect(4).toBe(4) });
// // // } catch (error) {
// // //   console.log(error.message);
// // // }
// // // try {
// // //   console.log({ value: expect(5).notToBe(3) });
// // // } catch (error) {
// // //   console.log(error.message);
// // // }

// // var createCounter1 = function (init) {
// //   let current = init;
// //   return {
// //     increment: function () {
// //       return ++current;
// //     },
// //     decrement: function () {
// //       return --current;
// //     },
// //     reset: function () {
// //       current = init;
// //       return current;
// //     },
// //   };
// // };

// // let rst1 = createCounter1(2);
// // console.log(rst1.increment());
// // console.log(rst1.decrement());
// // console.log(rst1.reset());

// // function exArr(arr, fn) {
// //   return arr.map(fn);
// // }
// // function plusOne(n) {
// //   return n + 1;
// // }
// // let arr = [1, 2, 3];
// // let results = exArr(arr, plusOne);
// // console.log(results);

// // function exArr1(arr, fn) {
// //   let rst = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     rst.push(fn(arr[i]));
// //   }
// //   return rst;
// // }
// // function plusOne(n) {
// //   return n + 1;
// // }
// // let arr = [1, 2, 3];
// // let results = exArr1(arr, plusOne);
// // console.log(results);

// // let arr1 = [2, 3, 4, 4, 5, 6, 7, 8, 2];
// // function findDuplicateNum(arr1) {
// //   return arr1.filter((num, index) => arr1.indexOf(num) !== index);
// // }

// // console.log(findDuplicateNum(arr1));

// // let arr1 = [1, 2, 3, 1, 2, 5];
// // function findDuplicateNum(arr1) {
// //   return arr1.filter((num, index) => arr1.indexOf(num) !== index);
// // }
// // console.log(findDuplicateNum(arr1));

// // function palindrome(str) {
// //   const clearInput = str.replace();
// //   const reversedStr = clearInput.split("").reverse().join("");
// //   return clearInput === reversedStr;
// // }

// // console.log(palindrome("hello"));
// // console.log(palindrome("madam"));

// /**
//  * @param {number[]} arr
//  * @param {Function} fn
//  * @return {number[]}
//  */
// var filter = function(arr, fn) {

//   let results=[]
//   for(let i=0;i<arr.length;i++){
// if(fn(arr[i])){
// results.push(arr[i])
// }
//   } 
//   return results
// };
// function greaterThan10(n){
// return n>10
// }
// let arr=[10,20,30,40]

// console.log(filter(arr,greaterThan10))

// /**
//  * @param {number[]} nums
//  * @param {Function} fn
//  * @param {number} init
//  * @return {number}
//  */
// // var reduce = function(nums, fn, init) {

// //   return nums.reduce((acc,current)=>{

// // return fn(acc,current)
// //   },init)
// // }
// // let nums=[1,2,3]
// // let init=0
// // let fn=(a,b)=>a+b
// // console.log(reduce(nums,fn,init))

// // var reduce=function(nums,fn,init){
// // return nums.reduce((acc,current)=>{
// // return fn(acc,current)
// // },init)
// // }

// // let nums=[1,3,4]
// // let fn=(a,b)=>a+b
// // let init=0
// // console.log(reduce(nums,fn,init))


// var createCounter=function(init){
//   return function(){
//     return init++

//   }
// }
// let dd=createCounter(2)
// console.log(dd())
// console.log(dd())
// console.log(dd())

// // var filtertedArr=function(arr1,fn){
// //   let results=[]
// //   for(let i=0;i<arr.length;i++){
// //     if(fn(arr[i])){
// // results.push(arr[i])
// //     }
// //   }
// //   return results
// // }

// // function filtertedArr1(n){
// // return n>10
// // }
// // let arr1=[30,10,2,3,20,40,1]
// // console.log(filtertedArr(arr1,filtertedArr1))



// var reduce = function(nums1,fn,init){

// return nums1.reduce((accu,curent)=>{
// return fn(accu,curent)
// },init)

// }
// let nums1=[1,2,3,4]
// let fn = (a,b)=>a+b
// let init=0
// console.log(reduce(nums1,fn,init))

// // var compose = function(functions) {
// //   return function(x) {
// //     for (let i = functions.length - 1; i >= 0; i--) {
// //       x = functions[i](x);
// //     }
// //     return x;
// //   };
// // };

// // const fn1 = compose([x => x + 1, x => x * x, x => 2 * x]);
// // console.log(fn1(3)); 


// var compose=function(functions){
// return function(x){
// for(let i=functions.length-1;i>=0;i--){
// x=functions[i](x)
// }
// return x
// }
// }
// const fn2=compose([x=>x+1,x=>x*x,x=>2*x])
// console.log(fn2(5))

// // var argumentsLength = function(...args) {
// //   return args.length;
// // };
// // console.log(argumentsLength(5));                   
// // console.log(argumentsLength({}, null, "3",""));     

// var once=function(fn1){
// let called=false
// let result

// return function(...args){
// if(!called){
// called=true
// result=fn1(...args)
// return result
// }
// return undefined
// }
// }
// const fn1=(a,b,c)=>a+b+c
// const once1=once(fn1)
// console.log(once1(4,5,2));
// console.log(once1(1,2,3,4));
// console.log(once1(1,2,3,4));


// var addTwoPromises=async function(promise1,promise2){
// let  num1= await promise1
// let num2= await promise2
// return num1+num2
// }

// addTwoPromises(Promise.resolve(4),Promise.resolve(6)).then(console.log)

// var addTwoPromises=async function(promise1,promise2) {
//   let num1=await promise1
//   let num2= await promise2
// return num1+num2

// }

// addTwoPromises(Promise.resolve(2),Promise.resolve(3)).then(console.log)


function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j && nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

// Example
const nums = [2, 4,6,8];
const target = 4;
const result = twoSum(nums, target);
console.log(result); // [0, 1]
