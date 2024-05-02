// select
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModal = document.querySelector(".close-modal");
const btnsopenModal = document.querySelectorAll(".show-modal");

for (let i of btnsopenModal) {
  i.addEventListener("click", function () {
    modal.classList.remove("hiden");
    overlay.classList.remove("hiden");
  });
}
closeModal.addEventListener("click", function () {
  modal.classList.add("hiden");
  overlay.classList.add("hiden");
});

overlay.addEventListener("click", function () {
  modal.classList.add("hiden");
  overlay.classList.add("hiden");
});

document.addEventListener("keydown", function (e) {
  if (e.key == "Escape" && !modal.classList.contains("hiden")) {
    modal.classList.add("hiden");
    overlay.classList.add("hiden");
  }
});
