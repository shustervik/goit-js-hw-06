'use strict';
const refs = {
    validInput: document.querySelector("#validation-input"),
};
//Событие 'blur' на input
refs.validInput.addEventListener('blur', onInputBlur);
function onInputBlur(event) {
    if(event.currentTarget.value.length === Number(refs.validInput.dataset.length)) {
        event.currentTarget.classList = ("valid");
    } else {
event.currentTarget.classList = ("invalid");
    };
};