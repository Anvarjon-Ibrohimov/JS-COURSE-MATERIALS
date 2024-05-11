//! Chuqurlashtirilgan array
//! 1 foreach metodi

// let arr = [10, 12, 14, 15, 15];

// arr.forEach((item, index, arr) => {
//   console.log(item);
// });

//! map metodi

// let arr = [10, 12, 14, 15, 15];
// let newArr = arr.map((item) => {
//   return item;
// });

// console.log(newArr);
// newArr.push(10);
// console.log(arr);
// console.log(newArr);

// // !find
// let movies = [
//   {
//     name: "Harry",
//     rate: 2.4,
//   },
//   {
//     name: "Harry map",
//     rate: 4.4,
//   },
//   {
//     name: "GO",
//     rate: 5.4,
//   },
//   {
//     name: "CS GO",
//     rate: 2.4,
//   },
// ];

// // console.log(movies);
// let result = movies.find((movie) => {
//   return movie.name.includes("GO");
// });
// console.log(result);

// // ! filter
// let filter = movies.filter((movie) => {
//   return movie.name.includes("GO");
// });
// console.log(filter);

// !some and every

//! 'every hamma movie larni rate darajasi 5 dan yuqori bolsa true qaytaradi aks xolda false qaytaradi'

// let result = movies.every((movie) => {
//   return movie.rate > 5;
// });
// console.log(result);

//! some agar bitasining rate darajasi shartni qoniqtirsa true qyataradi

// let some = movies.some((movie) => {
//   return movie.rate > 5;
// });
// console.log(some);

// ! creating copyies of array

let players = [
  {
    name: "Ikromjon",
    rate: 4.6,
  },
  {
    name: "Abdurahmon",
    rate: 5,
  },
  {
    name: "Anvarjon",
    rate: 3,
  },
];

// console.log(players);
// copy array
let players1 = players;
console.log(players1);
// Both of them accessing one places in memory
console.log(players1.push({ name: "Asliddin", rate: 4 }));
console.log(players, players1);

// so we take another clonning of array
// !spread operator
let players2 = [...players];

console.log(players2);
console.log(players2.push({ name: "Azamat", rate: 5 }));
console.log(players, players1, players2);
