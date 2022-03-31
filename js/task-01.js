"use strict";
const listWithId = document.querySelector("#categories");
console.log('Number of categories:', listWithId.children.length);
const elements = listWithId.children;
for (let i = 0; i < elements.length; i += 1) {
    const element = elements[i];
    console.log('Category:', element.firstElementChild.textContent)
    console.log('Elements:', element.lastElementChild.children.length)
};