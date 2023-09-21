const inputElement = document.querySelector(".input");
const body = document.querySelector("body");

inputElement.checked = JSON.parse(localStorage.getItem("mode"));

updateScreen();

function updateScreen() {
  if (inputElement.checked) {
    body.style.background = "black";
  } else {
    body.style.background = "white";
  }
}

inputElement.addEventListener("input", () => {
  updateScreen();
  updateLocalStorage();
});

function updateLocalStorage() {
  localStorage.setItem("mode", JSON.stringify(inputElement.checked));
}
