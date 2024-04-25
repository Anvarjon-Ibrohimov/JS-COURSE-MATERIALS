//
// Adding and Deleting  Elements (HTML elementlarini qo’shish va yo’qotish)
// 	1.document.createElement(element)
// 	2.document.removeChild(element)
// 	3.document.appendChild(element)
// 	4.document.replaceChild(new,old)
// 	5.document.write(text)

// 1.document.createElement(element)

// const newElement = document.createElement("h1");
// newElement.setAttribute("class", "info-header");
// newElement.innerText = "Hello my friend";
// console.log(newElement);

// const wrapper = document.querySelector(".wrapper");
// const parag = document.createElement("p");
// parag.innerText = "Welcome to our website";
// // console.log(wrapper);
// wrapper.appendChild(newElement);
// wrapper.appendChild(parag);

// 	2.document.removeChild(element)

// const todo_list = document.querySelector("#todo-List");
// const third_item = todo_list.children[2];
// console.log(third_item);

// todo_list.removeChild(third_item);

// const newElement = document.createElement("li");
// newElement.innerText = "Gallery";
// todo_list.appendChild(newElement);
// const firstElem = todo_list.children[1];
// const fourthElem = todo_list.children[4];
// todo_list.replaceChild(fourthElem, firstElem);

// document.write("i am the next part");

// FINDING HTML OBJECTS (HTML objectlarni topish)
// 	1. document.forms
// 	2.document.title
// 	3.document.body
// 	4.document.baseURI

// 	1. document.forms
// let myForm = document.forms;
// console.log(myForm);

// 	2.document.title
// document.title = "MMR";

// 	3.document.body
// let myBody = document.body;
// console.log(myBody);

// 	4.document.baseURI URI-Unique Resource Identifier
const myAddress = document.baseURI;
console.log(myAddress);
