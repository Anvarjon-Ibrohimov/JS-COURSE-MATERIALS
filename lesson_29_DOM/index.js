/*
    Window obyekti 3 ga bo'linadi
    1.DOM-document
    2.BOM -(browser object model) navigator, screen,location, frames,history,XMLHTTPSrequests
    3.Javascript-Object, Array, Function

*/

// 1. children (gives HTMLCollection)
// const firstElement = document.body.children[0];
// console.log(firstElement);
// firstElement.style.color = "red";
// firstElement.style.backgroundColor = "yellow";

//2. childNodes (gives NodeList)
// const bodyElem = document.body;
// console.log(bodyElem);
// console.log(bodyElem.children);
// console.log(bodyElem.childNodes);

//3. hasChildNodes() -check qilish uchun unda child element bormi yoki yo'q

// const firstElement = document.body.children[0];
// console.log(firstElement.hasChildNodes());
// const firstItem = firstElement.children[0];
// console.log(firstItem);
// console.log(firstItem.hasChildNodes());

//4 parentNode \\ parentElement

// const firstItemParent = firstItem.parentNode;
// const firstItemParent2 = firstItem.parentElement;
// console.log(firstItemParent);
// console.log(firstItemParent2);

// 5. LastElementChild-biror elementning oxiri // lastChild -biror nimaning oxiri

// const LastElementChild = firstElement.lastElementChild;
// console.log(LastElementChild);

// Finding HTML Elements (HTML elementlarini topish)

// 	1. getElementByID
// 	2.getElementByTagName
// 	3.getElementByClassName
// 	4.querySelector
// 	5.querySelectorAll

// Changing HTML Elements (HTML elementlarini o’zgartirish)

// 	1.element.innerHTML
// 	2.element.innerText
// 	3.element.setAttribute
// 	4.element.style.property

// 1. getElementByID
// let elem = document.getElementById("list");
// console.log(elem);
//2.getElemetsByTagNames
// let elements = document.getElementsByTagName("h2");
// console.log(elements);
//getElementsByClassName
// let parag = document.getElementsByClassName("parag");
// console.log(parag);

// Node list qaytaradi
// 	4.querySelector
// 	5.querySelectorAll

// let item = document.querySelector(".parag");
// console.log(item);
// let list = document.querySelector("#list");
// console.log(list);

const About = document.querySelector(".about");
// console.log(About);
// About.innerHTML = "text";
// About.innerHTML = "<h1>salom</h1>";
// About.innerText = "hello";
// console.log(About);
About.setAttribute("style", "color:red");
About.style.textAlign = "center";
