// selectors

const fName = document.querySelector("#name");
const fAge = document.querySelector("#age");
const fMarriage = document.querySelector("#marriage");
console.log(fName, fAge, fMarriage);

const fNametext = document.querySelector(".fName");
const fagetext = document.querySelector(".fAge");
const fmarriagetext = document.querySelector(".fmarriage");
console.log(fNametext, fagetext, fmarriagetext);

const btnSUB = document.querySelector("#btnSUB");
const btnCancel = document.querySelector("#btnCancel");
console.log(btnSUB, btnCancel);

const Message = document.querySelector(".Message");
console.log(Message);

// eventListener

fName.addEventListener("input", function (e) {
  fNametext.innerHTML = `😇name: ${e.target.value}`;
});
fAge.addEventListener("input", function (e) {
  fagetext.innerHTML = `🧐 Age: ${e.target.value}`;
});
fMarriage.addEventListener("input", function (e) {
  fmarriagetext.innerHTML = `isMarried 😘: ${e.target.value}`;
});

btnSUB.addEventListener("click", function () {
  Message.innerHTML = "Successfull ✅";
});

btnCancel.addEventListener("click", function () {
  Message.innerHTML = "UnSuccessfull, try again 😫";
  fName.value = "";
  fAge.value = "";
  fMarriage.value = "";
});
