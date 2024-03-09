const menuBtn = document.querySelector(".menu-button");
const menuMain = document.querySelector(".menu-md");

menuBtn.addEventListener("click", () => {
  console.log("ksk");
  menuMain.classList.toggle("active");
});

const tit = document.querySelectorAll(".tit");

tit.forEach((item) => {
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

btnOpen.forEach((item) => {
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
//   window.location.replace("./order.html");
// });

let options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  threshold: 0.9,
};

const target = document.querySelector("header");
const navbar = document.querySelector(".navbar");

const callback = (entries) => {
  const [entry] = entries;

  if (entry.intersectionRatio < 0.9) {
    navbar.classList.add("bg-gray-400");
  } else {
    navbar.classList.remove("bg-gray-400");
  }
  // console.log(entry);
};

let observer = new IntersectionObserver(callback, options);
observer.observe(target);
