const inputQtyRef = document.querySelector("[type='number']");
const addBtnRef = document.querySelector("[data-action='render']");
const removeBtnRef = document.querySelector("[data-action='destroy']");

const boxDiv = document.getElementById("boxes");

let boxQty = 0;

const createBoxes = boxQty => {
  const boxCollection = [];

  let width = 30;
  let height = 30;

  for (let i = 0; i < boxQty; i++) {
    let box = document.createElement("div");
    box.style.backgroundColor = `rgb(${Math.floor(Math.random() * 257)}, 
    ${Math.floor(Math.random() * 257)}, 
    ${Math.floor(Math.random() * 257)})`;
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;

    width += 10;
    height += 10;
    boxCollection.push(box);
  
  }

  boxDiv.append(...boxCollection);
}

const destroyBoxes = () => boxDiv.innerHTML = "";

addBtnRef.addEventListener("click", () => {
  boxQty = +inputQtyRef.value;
  createBoxes(boxQty);
});

removeBtnRef.addEventListener("click", () => {
  destroyBoxes();
  inputQtyRef.value = 0;
});