const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const list = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
  const element = document.createElement('li');
  element.textContent = ingredient;
  return element;
});

list.append(...elements);