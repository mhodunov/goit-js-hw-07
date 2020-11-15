const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('#ingredients');
const elements = [];

ingredients.forEach(ingredient => {
  const element = document.createElement('li');
  element.textContent = ingredient;
  elements.push(element);
});

list.append(...elements);