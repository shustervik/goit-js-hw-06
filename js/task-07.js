'use strict';
const refs = {
    inputSizeControl: document.querySelector('#font-size-control'),
    text: document.querySelector('#text'),
};
refs.inputSizeControl.addEventListener('input', onSizeControl);
function onSizeControl(event) {
    refs.text.style.fontSize = event.currentTarget.value + 'px';
}; 