const menuBtn = document.querySelector(".menu-button");
const menuMain = document.querySelector(".menu-md");

menuBtn?.addEventListener("click", () => {
  menuMain.classList.toggle("active");
});

const tit = document.querySelectorAll(".tit");

tit?.forEach((item) => {
  item.addEventListener("click", () => {
    const parent = item.parentElement;

    const answer = parent.querySelector(".detail");
    item.classList.toggle("bg-blue-300");
    answer.classList.toggle("active");
  });
});

const modal = document.querySelector(".modal");
const btnOpen = document.querySelectorAll(".open-btn");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".cancel-icon");

btnOpen?.forEach((item) => {
  item.addEventListener("click", () => {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });
});

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
overlay.addEventListener("click", closeModal);
closeBtn.addEventListener("click", closeModal);

// const directToPayBtn = document.querySelector(".go-pay");

// directToPayBtn.addEventListener("click", () => {
//   window.location.replace("/src/funnel2/order.html");
// });
