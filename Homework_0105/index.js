//! task-1
// function double(arr) {
//   let newARR = arr.map((item) => {
//     return item * 2;
//   });
//   return newARR;
// }

// console.log(double([2, 5, 10, 30]));

// ! task-2

// function capitalizeName(arr) {
//   let newARR = arr.map((name) => {
//     return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
//   });
//   return newARR;
// }
// console.log(capitalizeName(["xalima", "JACOB", "MuAttArxon", "gulchapchap"]));

//! task 3

// function namesOnly(arr) {
//   let newObject = arr.map((obj) => {
//     return obj.name;
//   });
//   return newObject;
// }

// console.log(
//   namesOnly([
//     {
//       name: "Angelina Jolie",
//       age: 80,
//     },
//     {
//       name: "Eric Jones",
//       age: 2,
//     },
//     {
//       name: "Paris Hilton",
//       age: 5,
//     },
//     {
//       name: "Kayne West",
//       age: 16,
//     },
//     {
//       name: "Bob Ziroll",
//       age: 100,
//     },
//   ])
// );

//! task 4

// function readyToPutInTheDOM(arr) {
//   let newArr = arr.map((element) => {
//     return `<h1>${element.name}</h1> <h2>${element.age}</h2>`;
//   });
//   return newArr;
// }
// console.log(
//   readyToPutInTheDOM([
//     {
//       name: "Angelina Jolie",
//       age: 80,
//     },
//     {
//       name: "Eric Jones",
//       age: 2,
//     },
//     {
//       name: "Paris Hilton",
//       age: 5,
//     },
//     {
//       name: "Kayne West",
//       age: 16,
//     },
//     {
//       name: "Bob Ziroll",
//       age: 100,
//     },
//   ])
// );

// ["<h1>Angelina Jolie</h1><h2>80</h2>",
// "<h1>Eric Jones</h1><h2>2</h2>",
// "<h1>Paris Hilton</h1><h2>5</h2>",
// "<h1>Kayne West</h1><h2>16</h2>",
// "<h1>Bob Ziroll</h1><h2>100</h2>"]
