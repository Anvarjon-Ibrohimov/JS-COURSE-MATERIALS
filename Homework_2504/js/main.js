let name = document.querySelector("#name");
let age = document.querySelector("#age");
let marriage = document.querySelector("#marriage");
let resBody = document.querySelector("#result");
let resBottom = document.querySelector("#bottom");
console.log(name, age, marriage);
const newElem = document.createElement("p");
const newElem2 = document.createElement("p");
const newElem3 = document.createElement("p");
const newElem4 = document.createElement("p");

function wordFocus() {
  const nameValue = name.value;
  resBody.append(newElem);
  newElem.innerText = "🇺🇿 name: " + nameValue;
}
function wordFocus2() {
  const ageValue = age.value;
  resBody.append(newElem2);
  newElem2.innerText = "😜age :" + ageValue;
}

function wordFocus3() {
  const marriageValue = marriage.value;
  resBody.append(newElem3);
  newElem3.innerText = "😘 isMarried: " + marriageValue;
}
let btnJonatish = document.querySelector("#btnSUB");
btnJonatish.addEventListener("click", function () {
  resBottom.append(newElem4);
  newElem4.innerText = "Succesfull Send 🥳";
  newElem4.classList.add("elem");
});
let btnCancel = document.querySelector("#btnCAN");
btnCancel.addEventListener("click", function () {
  resBottom.append(newElem4);
  newElem4.innerText = "UnSuccesfull Send 😭";
  newElem4.classList.add("elem");
});
