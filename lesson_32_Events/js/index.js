// function myfunction() {
//   console.log("hello js");
// }

// taking id
// let elemBtn = document.querySelector("#btn");
// console.log(elemBtn);
// elemBtn.addEventListener("click", myfunction);

// let btnAdd = document.querySelector("#btnAdd");
// let parag = document.querySelector("p");
// btnAdd.addEventListener("click", add);
// let btnSub = document.querySelector("#btnSUB");
// btnSub.addEventListener("click", subs);
// let startBNum = 1;

// function add() {
//   parag.innerHTML = startBNum++;
// }
// function subs() {
//   parag.innerHTML = startBNum--;
// }

//addition
const btnADD = document.querySelector(".addition");
const btnSUB = document.querySelector(".subs");
console.log(btnADD);
console.log(btnSUB);
const result = document.querySelector(".parag");
btnADD.addEventListener("click", add);
btnSUB.addEventListener("click", sub);

let schot = 1;
function add() {
  result.innerHTML = schot++;
  console.log(result);
}
function sub() {
  if (result.innerHTML > 0) {
    result.innerHTML = --schot - 1;
    console.log(result);
  }
}
