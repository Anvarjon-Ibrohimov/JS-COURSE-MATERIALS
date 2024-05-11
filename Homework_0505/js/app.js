const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", function () {
    removactive();
    panel.classList.add("active");
  });
});

function removactive() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
