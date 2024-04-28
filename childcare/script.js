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
overlay?.addEventListener("click", closeModal);
closeBtn?.addEventListener("click", closeModal);

let options = {
  root: document.querySelector("#scrollArea"),
  rootMargin: "0px",
  threshold: 0.8,
};

const target = document.querySelector("header");
const navbar = document.querySelector(".navbar");

const callback = (entries) => {
  const [entry] = entries;

  if (entry.intersectionRatio < 0.8) {
    navbar?.classList.add("bg-white");
    navbar?.classList.add("fixed");
  } else {
    navbar?.classList.remove("bg-white");
    navbar?.classList.remove("fixed");
  }
  // console.log(entry);
};

let observer = new IntersectionObserver(callback, options);
observer.observe(target);
