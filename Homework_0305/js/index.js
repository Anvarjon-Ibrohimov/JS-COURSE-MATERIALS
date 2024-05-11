const mytext = document.querySelector("#my-text");
const result = document.querySelector("#result");
let limit = 50;
result.textContent = 0 + "/" + limit;

mytext.addEventListener("input", () => {
  let textlength = mytext.value.length;
  result.textContent = textlength + "/" + limit;
  if (textlength > limit) {
    mytext.style.borderColor = "red";
    result.style.color = "red";
  } else {
    mytext.style.borderColor = `rgb(14,190,14)`;
    result.style.color = `rgb(14,190,14)`;
  }
});
