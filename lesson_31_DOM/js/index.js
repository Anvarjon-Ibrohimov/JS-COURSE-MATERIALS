let parentElem = document.querySelector(".container");
// console.log(parentElem);
let newsquare = document.createElement("div");
// newsquare.setAttribute("class", "square");
// console.log(newsquare);
// parentElem.appendChild(newsquare);
// append- oxiridan qoshish prepend- boshidan qoshish
newsquare.classList.add("square");
newsquare.style.backgroundColor = "blueviolet";
parentElem.append(newsquare);

// let newCircle = document.createElement("div");
// newCircle.classList.add("circle");
// parentElem.prepend(newCircle);

const circle = document.querySelectorAll(".circle");
console.log(circle);
circle[0].after(newsquare);
// circle[2].after(newsquare);
