"use strict";
const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// const listItem = document.querySelector("#ingredients");
// const elements = ingredients.map(ingredient => {
//   const itemEl = document.createElement('li');
//   itemEl.textContent = ingredient;
//   itemEl.classList.add('item');
//   return itemEl;
// });
// listItem.append(...elements);
const listItem = document.querySelector("#ingredients");
const makeIngredients = ingredients =>{
return ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.classList.add('item');
  return itemEl;
});
};
const elements = makeIngredients(ingredients) 
listItem.append(...elements);