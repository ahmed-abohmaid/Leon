const icons = document.querySelector(".icons");
const closingIcons = document.querySelector(".closing-icon");
const mainUl = document.querySelector(".header .links ul");

icons.addEventListener("click", () => {
  icons.style.display = "none";
  closingIcons.style.display = "block";
  mainUl.style.display = "block";
});
closingIcons.addEventListener("click", () => {
  icons.style.display = "flex";
  closingIcons.style.display = "none";
  mainUl.style.display = "none";
});
