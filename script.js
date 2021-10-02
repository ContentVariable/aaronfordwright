"use strict";

// INIT
const navBtn = document.querySelector(".hamburger");
const menuBtn = document.querySelector(".btn");
const wrapper = document.querySelector(".mobile-wrapper");
const closeNavBar = document.querySelector("#nav-list-mobile");

// NAVBAR
navBtn.addEventListener("click", function () {
  navBtn.classList.toggle("is-active");
  wrapper.classList.toggle("navBar-inactive");
  closeNavBar.classList.toggle("hidden");
});
