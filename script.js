const factButton = document.querySelector("#fact-button");
const bio = document.querySelector("#bio");
const clickCount = 0;

factButton.addEventListener("click", function () {
  bio.textContent = "Ta treść została zmieniona przez JavaScript.";
  factButton.textContent = "Gotowe!";
});
