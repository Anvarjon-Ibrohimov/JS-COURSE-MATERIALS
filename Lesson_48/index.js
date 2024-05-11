// ! Factory Functions

// function home(area, color, shape) {
//   const homeData = {
//     area: area,
//     color: color,
//     shape: shape,
//     build() {
//       console.log(`Build in ${area}`);
//     },
//   };
//   return homeData;
// }

// const IkosHome = home("Namangan", "red", "square");
// console.log(IkosHome);
// IkosHome.build();

// Part 2

// function home(area, color, shape) {
//   return {
//     area: area,
//     color: color,
//     shape: shape,
//     build() {
//       console.log(`javoxir live in ${area}`);
//     },
//   };
// }

// let Bekshome = home("Samarkand", "red", "square");
// console.log(Bekshome);
// Bekshome.build();

// ! constructor function

// function Home(area, color, shape) {
//   this.area = area;
//   this.color = color;
//   this.shape = shape;
//   this.build = function () {
//     console.log(`Build in ${area}`);
//   };
// }

// let AkramsHome = new Home("Namangan", "green", "circle");
// console.log(AkramsHome);
// AkramsHome.build();

// class

// class Dog {
//   name;
//   color;
//   constructor(namepr, colorpr) {
//     this.name = namepr;
//     this.color = colorpr;
//   }
// }
// const dog1 = new Dog("Alex", "grey");
// console.log(dog1);

// class Person {
//   constructor(name, job) {
//     this.name = name;
//     this.job = job;
//   }
// }
// const person1 = new Person("Iko", "Coder");
// console.log(person1);

// class Baby extends Person {
//   constructor(name, job, age) {
//     super(name, job);
//     this.age = age;
//   }
// }

// const baby1 = new Baby("Sarvi", "no", 3);

// console.log(baby1);

// ! rest operatori (...)
// function me(name, age, ...lang) {
//   console.log(`Name:${name},Age:${age},Languages:${lang}`);
// }
// me("Anvarjon", 30, "English", "Russian", "Uzbek");
