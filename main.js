const modalEl = document.querySelector(".modal-container");
const modalDiv = document.querySelector(".modal");
const thanks = document.querySelector(".thanks");
const btn = document.querySelector(".submit-btn");
const modalBtn = document.querySelector("#modal-ok");
const selected = document.createElement("p");
selected.setAttribute("class", "rating-select");
const clear = document.querySelector(".clear-btn");

const rating = document.querySelector(".rating");

thanks.before(selected);

const modal = () => {
  modalEl.classList.add("show");
};

modalBtn.addEventListener("click", () => {
  modalEl.classList.toggle("show");
});

const generalRating = document.querySelector(".general-rating");

generalRating.addEventListener("click", (e) => {
  let lists = document.querySelectorAll(".btn");
  if (e.target.classList.contains("btn")) {
    lists.forEach((value) => {
      value.classList.remove("active-rate");
    });
    if (!e.target.classList.contains("btn")) {
      e.target.classList.toggle("active-rate");
    } else {
      e.target.classList.toggle("active-rate");
    }
    if (e.target.innerText) {
      choice = e.target.innerText;
      selected.innerText = `You selected ${choice} out of 5`;
    }
  }
  if (e.target.classList.contains("submit-btn")) {
    modal();
    lists.forEach((value) => {
      value.classList.remove("active-rate");
    });
  }
  if (e.target.classList.contains("clear-btn")) {
    lists.forEach((value) => {
      value.classList.remove("active-rate");
    });
  }
});
