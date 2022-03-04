"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnShowModel = document.querySelectorAll(".show-modal");
console.log(btnShowModel);

const constOpenModal = function() {
  console.log("Button clicked");
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
const closeModal = function() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

for (let index = 0; index < btnShowModel.length; index++)
  btnShowModel[index].addEventListener("click", constOpenModal);

// for (let index = 0; index < btnShowModel.length; index++)
//   //   console.log(btnShowModel[index].textContent);
//   btnShowModel[index].addEventListener("click", function() {
//     console.log("Button clicked");
//     // to add and remove classes you dont need to put the . in front of the class name
//     modal.classList.remove("hidden");
//     overlay.classList.remove("hidden");
//   });

// btnCloseModal.addEventListener("click", function() {
//   modal.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

// overlay.addEventListener("click", function() {
//   overlay.classList.add("hidden");
//   modal.classList.add("hidden");
// });
