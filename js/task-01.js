"use strict";
const listWithId = document.querySelector("#categories");
const elements = listWithId.children;
console.log('Number of categories:', elements.length);
for (let i = 0; i < elements.length; i += 1) {
    const element = elements[i];
    console.log('Category:', element.firstElementChild.textContent)
    console.log('Elements:', element.lastElementChild.children.length)
};