function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  input: document.querySelector('input'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};
let divBoxes = [];
function createBox() {
  for (let i = 0; i < refs.input.value; i += 1){
    const divEl = document.createElement("div");
    divEl.style.width = 30 + i * 10 + 'px';
    divEl.style.height = 30 + i * 10 + 'px';
    divEl.style.backgroundColor = getRandomHexColor();
    divBoxes.push(divEl);
  };
}
function appendBoxes() {
  refs.boxes.append(...divBoxes);
}
function clearAll() {
  divBoxes = [];
  refs.boxes.innerHTML = '';
}
refs.btnCreate.addEventListener("click", createBox);
refs.btnCreate.addEventListener("click", appendBoxes);
refs.btnDestroy.addEventListener("click", clearAll);

// console.dir(document.querySelector('#controls'));
// console.dir(refs.input);
// console.dir(refs.btnCreate);
// console.dir(refs.btnDestroy);
// console.dir(refs.boxes);
// refs.input.addEventListener('input', ()=>{});
// refs.btnCreate.addEventListener('click', onCreateBoxes);
// function onCreateBoxes() {
//   const divBoxes = [];
//   const amount = refs.input.value;
//   //создание массива из необходимого числа элементов
//   for (let i = 0; i < amount; i += 1) {
//     divBoxes.push('box');
//   };
//   //Создание коллекции div
//   const createBoxes = boxes => {
//     return boxes.map(box => {
//       const divEl = document.createElement('div');
//         divEl.style.width = 30 + 'px';
//         divEl.style.height = 30 + 'px';
//         divEl.style.backgroundColor = getRandomHexColor();
//         console.dir(divEl);
//       return divEl;
//     });
//   };
//   const elements = createBoxes(divBoxes);
//   refs.boxes.append(...elements);
// };