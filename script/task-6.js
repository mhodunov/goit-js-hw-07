const inputValid = document.querySelector('#validation-input');
const validLength = +inputValid.attributes["data-length"].value

const fieldValidation = () => {

  if(inputValid.value.length === validLength) {
    inputValid.classList.add('valid');
    inputValid.classList.remove('invalid');
  }
    
  else if(inputValid.value.length > 0) {
    inputValid.classList.add('invalid');
    inputValid.classList.remove('valid');
  }

  else {
    inputValid.classList.remove('invalid');
    inputValid.classList.remove('valid');
  }
}

inputValid.addEventListener('change', fieldValidation);

