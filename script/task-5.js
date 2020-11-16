const inputRef = document.querySelector('#name-input');
const name = document.querySelector('#name-output');

const changeName = () => {
  event.target.value ? name.textContent = event.target.value : name.textContent = "незнакомец";
}

inputRef.addEventListener('input', changeName);
