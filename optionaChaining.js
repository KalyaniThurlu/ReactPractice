let nums = {};
console.log(nums?.no);

const obj = {
  name: "suma",
  id: 2,
};
console.log(obj?.salary);

let number = [1, 2, 3, 4];
let exNum = number ? "number there" : "no numbers";
console.log(exNum);
let arra = [
  [1, 2, 3],
  [5, 6, 7],
];
const [[a, b, c], [d, g, n]] = arra;
console.log(a);
console.log(b);
console.log(c);

const obj1 = {
  id1: 1,
  names: "latha",
  details: {
    village: "abcvillage",
    mamdal: "abcMandal",
  },
};
const {
  id1,
  names,
  details: { village, mamdal },
} = obj1;
console.log(village);
