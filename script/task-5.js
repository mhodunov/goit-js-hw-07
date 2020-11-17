const inputRef = document.querySelector('#name-input');
const name = document.querySelector('#name-output');

const changeName = () => {
  name.textContent = inputRef.value ? inputRef.value.trim() : "незнакомец";
}

inputRef.addEventListener('input', changeName);
