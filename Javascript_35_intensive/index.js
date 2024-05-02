// * Primitive vs Reference types
"use strict";

//!1 changing values in reference but primitive we can not

// const name = "Ikromjon";
// name='Anvar' //-reference error
// console.log(name);

// we can change elements of value
// const names = ["Anvarjon", "Frank", "MMR"];
// names[0] = "Abdurahmon";

// console.log(names);

//! DIF 2 COPYING ELEM

// let firstname = "Ali";
// let firstname2 = firstname;

// firstname = "Beki";
// console.log(firstname, firstname2);

// let names = ["Romeo", "Juietta"];
// let names2 = names;
// console.log(names, names2);
// names[0] = "Iko";
// names2.push("Bek");
// console.log(names, names2);

//! 2 * Callbacks, Higher Order Functions

//! Higher order function

// function myFunction(param) {
//   param();
//   param();
//   param();
// }

// function sayHello() {
//   console.log("Hello World");
// }
// myFunction(sayHello);

//!  callback
// let btn = document.querySelector(".btn");
// btn.addEventListener("click", function () {});
/*
//this part is higer order function 
addEventListener('click',function(){
})

// this part is
function(){
// this is callback function
})

*/

//! Foreach

// const cars = ["Malibu", "Gentra", "Nexia-3", "Damas", "Jiguli"];

// we can not equalize a new variable (newCars) to the foreach method , it returns undefined

// let newCars = cars.forEach((car) => {
//   //   console.log(car);
//   return car;
// });
// console.log(newCars);

//! * map method

// const colors = ["red", "blue", "yellow", "pink", "orange"];

// //we can equalize a new variable in map
// const newColor = colors.map((color) => {
//   return color;
// });

// console.log(newColor);

//! * find method

// const colors = ["red", "blue", "yellow", "pink", "orange"];

// let result = colors.find((color) => {
//   //   console.log(color);
//   return color;
// });

// console.log(result);

// const movies = [
//   "I am a Bird",
//   "Harry Potter",
//   "Blue Sky",
//   "Game Over",
//   "Squid Game",
// ];

// let res = movies.find((movie) => {
//   return movie.includes("Game");
// });
// console.log(res);

//! filter metodi
// const movies = [
//   "I am a Bird",
//   "Harry Potter",
//   "Blue Sky",
//   "Game Over",
//   "Squid Game",
// ];

// let searchMovie = movies.filter((movie) => {
//   return movie.includes("Game");
// });
// console.log(searchMovie);

const footballClubs = [
  {
    title: "Navbaxor",
    rating: 10,
  },
  {
    title: "Paxtakor",
    rating: 9.7,
  },
  {
    title: "Barselona",
    rating: 4.6,
  },
  {
    title: "Real",
    rating: 7,
  },
];

let resultClub = footballClubs.filter((club) => {
  return club.rating > 7;
});
console.log(resultClub);
