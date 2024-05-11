// ! this key word
// console.log(this);

// let person = {
//   name: "Iko",
//   age: 20,
//   sayHello() {
//     console.log(this);
//   },
// };

// console.log(person);
// console.log(person.sayHello);
// person.sayHello();

// let li = document.querySelectorAll("li");
// console.log(li);
// li.forEach((elem) => {
//   console.log(elem);
//   elem.addEventListener("click", function () {
//     console.log(elem);
//   });
// });

// !bind call apply

let user = {
  fname: "Ikromjon",
  sname: "Ergashev",
  getName() {
    console.log(this.fname + " " + this.sname);
  },
};

// console.log(user);
// user.getName();

function registerUser(country, city) {
  //   console.log(this);
  this.getName();
  console.log(`I am from ${country},${city}`);
}

// registerUser();

// !bind
// let register = registerUser.bind(user);
// register("Uzbekistan", "Namangan");

// !call
// let register = registerUser.call(user, "Uzbekistan", "Namangan");

// !apply
registerUser.apply(user, ["Uzbekistan", "Namangan"]);

// !constructor function

function ToDo(task, complete) {
  this.task = task;
  this.complete = complete;
}

const todo = new ToDo("Coding", true);
const todo1 = new ToDo("Eating", true);
const todo2 = new ToDo("Chating", false);

console.log(todo, todo1, todo2);

// Contructor function , you can create a new object using function
