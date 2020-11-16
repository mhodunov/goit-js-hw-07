const inputRef = document.querySelector('#name-input');
const name = document.querySelector('#name-output');

const changeName = () => {
  inputRef.value ? name.textContent = inputRef.value : name.textContent = "незнакомец";
}

inputRef.addEventListener('input', changeName);
