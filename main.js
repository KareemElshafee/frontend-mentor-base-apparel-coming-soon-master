const button = document.querySelector("button");
let inputField = document.querySelector("input");
const error = document.querySelector(".error");
const validEmail = document.querySelector(".valid-email");
const emptyField = document.querySelector(".empty");

function isEmail(input) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g.test(input);
}

button.addEventListener("click", function (e) {
  const inputValue = inputField.value.trim();
  e.preventDefault();
  if (inputValue == "") {
    emptyField.classList.remove("hidden");
    return;
  }
  if (!isEmail(inputValue)) {
    emptyField.classList.add("hidden");
    error.classList.remove("hidden");
    validEmail.classList.remove("hidden");
  } else {
    error.classList.add("hidden");
    validEmail.classList.add("hidden");
  }
});
