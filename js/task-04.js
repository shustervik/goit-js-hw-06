'use strict';
//Обозначение счетчика
let counterValue = document.querySelector('#value');
counterValue.textContent = 0;
// Обозначение объекта ссылок
const refs = {
    clickDecrBtn: document.querySelector('[data-action="decrement"]'),
    clickIncrBtn: document.querySelector('[data-action="increment"]'),
};
// Слушатель на кнопку "-1"
refs.clickDecrBtn.addEventListener('click', onDecrement);
// Слушатель на кнопку "+1"
refs.clickIncrBtn.addEventListener('click', onIncrement);
// Функция onDecrement вычитает 1 и обновляет counterValue
function onDecrement() {
    const decrementEl = Number(counterValue.textContent) - 1;
    counterValue.textContent = decrementEl.toString();
};
// Функция onIncrement прибавляет 1 и обновляет counterValue
function onIncrement() {
    const incrementEl = Number(counterValue.textContent) + 1;
    counterValue.textContent = incrementEl.toString();
};
