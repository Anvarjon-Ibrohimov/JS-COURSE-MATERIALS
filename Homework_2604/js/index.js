//selectors
const btn1 = document.querySelector(".one");
const btn2 = document.querySelector(".two");
const btn3 = document.querySelector(".three");
const modal = document.querySelector("#mc");
const btnmodal = document.querySelector("#btn-modal");
console.log(btn1, btn2, btn3, modal);

// event

btn1.addEventListener("click", function () {
  modal.style.display = "block";
});
btn2.addEventListener("click", function () {
  modal.style.display = "block";
});
btn3.addEventListener("click", function () {
  modal.style.display = "block";
});
btnmodal.addEventListener("click", function () {
  modal.style.display = "none";
});
btnmodal.addEventListener("onkeydown", click());

function click(e) {
  modal.style.display = "none";
}
