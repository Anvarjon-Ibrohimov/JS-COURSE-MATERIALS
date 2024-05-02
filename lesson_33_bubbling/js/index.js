// select
const todo = document.querySelector(".todo-list");
const btn = document.querySelector("#submit");
let schot = todo.children;
console.log(schot);

console.log(todo, btn);

btn.addEventListener("click", add);

todo.addEventListener("click", function () {
  console.log("todo is clicked");
});

function add() {
  const newElem = document.createElement("li");
  newElem.innerText = `item ${schot.length + 1}`;
  todo.append(newElem);
  newElem.addEventListener("click", deleteItem);
}

function deleteItem(e) {
  //   console.log(e);
  //   console.log(e.target);
  e.stopPropagation();
  const selecteditem = e.target;
  selecteditem.remove();
}
