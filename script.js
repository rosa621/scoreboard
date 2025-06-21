"use strict";

let homePointText = 0;
let guestPointText = 0;
document.getElementById("home-point-text").textContent = homePointText;
document.getElementById("guest-point-text").textContent = guestPointText;

const btnNew = document.querySelector(".btn-new");

const homeOnePoint = document.getElementById("home-plus-one-point");
const homeTwoPoint = document.getElementById("home-plus-two-point");
const homeThreePoint = document.getElementById("home-plus-three-point");

const guestOnePoint = document.getElementById("guest-plus-one-point");
const guestTwoPoint = document.getElementById("guest-plus-two-point");
const guestThreePoint = document.getElementById("guest-plus-three-point");

homeOnePoint.addEventListener("click", function () {
  homePointText += 1;
  document.getElementById("home-point-text").textContent = homePointText;
});

homeTwoPoint.addEventListener("click", function () {
  homePointText += 2;
  document.getElementById("home-point-text").textContent = homePointText;
});

homeThreePoint.addEventListener("click", function () {
  homePointText += 3;
  document.getElementById("home-point-text").textContent = homePointText;
});

guestOnePoint.addEventListener("click", function () {
  guestPointText += 1;
  document.getElementById("guest-point-text").textContent = guestPointText;
});

guestTwoPoint.addEventListener("click", function () {
  guestPointText += 2;
  document.getElementById("guest-point-text").textContent = guestPointText;
});

guestThreePoint.addEventListener("click", function () {
  guestPointText += 3;
  document.getElementById("guest-point-text").textContent = guestPointText;
});

btnNew.addEventListener("click", function () {
  homePointText = 0;
  guestPointText = 0;
  document.getElementById("home-point-text").textContent = homePointText;
  document.getElementById("guest-point-text").textContent = guestPointText;
});
