"use strict";
const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const listItems = document.querySelector(".gallery");
const makeItemEl = itemEl => {
  const { url, alt, width, height } = itemEl;
  return `
<li>
<img src = ${url} alt =${alt} width = 320 height = 100%
>
</img>
</li>
`;
};  
const makeItems = images
  .map(makeItemEl)
  .join('');
listItems.insertAdjacentHTML('afterbegin', makeItems);
const liItems = listItems.children;
for (let liItem of liItems) {
  liItem.classList.add('gallery__item');
};