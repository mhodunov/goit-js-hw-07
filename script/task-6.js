const inputValid = document.querySelector('#validation-input');
const validLength = +inputValid.attributes["data-length"].value

const fieldValidation = () => {

  if(event.target.value.length == validLength) {
    inputValid.classList.add('valid');
    inputValid.classList.remove('invalid');
  }
    
  else if(event.target.value.length > 0) {
    inputValid.classList.add('invalid');
    inputValid.classList.remove('valid');
  }

  else {
    inputValid.classList.remove('invalid');
    inputValid.classList.remove('valid');
  }
}

inputValid.addEventListener('change', fieldValidation);

