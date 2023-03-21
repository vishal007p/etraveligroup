// map   - retrun same array length
// find  - retun single object based on condition
// foreach -
// forin
// forof
// slice
// splice
// reduce
// indexOf
// sort  --
// push
// pop
// filter  --  retunrn array acording condition

// map ->
let arr = [
  { age: 20, name: "ram" },
  { age: 56, name: "ravi" },
  { age: 49, name: "jay" },
  { age: 4, name: "hero" },
];
// let arr = [1, 3, 4, 6, 7];
// const res = arr.map((item) => item);

// find

// let res = arr.find((item) => item.age > 4);
// console.log("res", res);

// for each
// let sumAge = 0;
// let abc = arr.forEach((item, index, allitem) => {
//   //   sumAge += item.age;
//   console.log("index", index);
//   console.log("allitem", allitem);
// });
// console.log("abc", sumAge);

// for in (object. array)
// let obj = { name: 2, email: "test@gmail.com", age: 56 };
// let arr1 = [{ name: "sdsd", address: "mp", city: "satna", age: 90 }];

// for (let key in obj) {
//   console.log(arr1.map((item) => item[key]));
// }

// let checkName = "test" in obj;
// console.log("checkName", checkName);

// if (obj.name) {
//     alert("ddfdf")
// }

// for of
// for (let data of arr) {
//   console.log(data["name"]);
// }

// let arr = ["bmw", "maruti", "kia", "tata"];
// let newArr1 = arr.slice(1, 3);
// let newArr = arr.splice(1, 3);
// console.log(newArr);
// console.log(arr);
// 1, 2, 3, 4;

// let abc = arr.reduce((total, item) => {
//   console.log(total);
//   return total + item.age;
// }, 0);
// console.log(abc);

let abc = [1, 2, 89, 63];

console.log(abc.indexOf(89));
