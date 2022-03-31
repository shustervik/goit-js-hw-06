'use strict';
// Обозначение объекта ссылок
const refs = {
    inputName: document.querySelector('#name-input'),
    outputName: document.querySelector('#name-output'),
};
// Слушатель на ввод имени
refs.inputName.addEventListener('input', onInputName);
// Функция при вводе имени
function onInputName(event) {
    if (event.currentTarget.value !== '') {
        refs.outputName.textContent = event.currentTarget.value;
    } else {
        refs.outputName.textContent = 'Anonymous'
    };
};
