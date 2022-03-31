'use strict';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  bg: document.querySelector('body'),
  bgColor: document.querySelector('.color'),
  btnChangeColor: document.querySelector('.change-color'),
};
refs.btnChangeColor.addEventListener('click', onChangeColor);
function onChangeColor() {
  refs.bg.style.backgroundColor = getRandomHexColor();
  const colorValue = refs.bg.style.backgroundColor;
  refs.bgColor.textContent = colorValue;
};