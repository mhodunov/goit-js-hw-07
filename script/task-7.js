const inputRangeRef = document.querySelector('#font-size-control');
const changeSizeText = document.querySelector('#text');

const changeFontSize = () => {

  changeSizeText.style.fontSize = `${inputRangeRef.value}px`;

}

inputRangeRef.addEventListener('input', changeFontSize);