const openBtn = document.querySelector("#btnOpen");
const closeBtn = document.querySelector("#btnClose");
const slide = document.querySelector(".slideInMenu");

openBtn.addEventListener("click", () => {
  slide.classList.add("visible");
});

closeBtn.addEventListener("click", () => {
  slide.classList.remove("visible");
});
