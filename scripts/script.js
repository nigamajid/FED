// JavaScript Document
console.log("hi");

var openButton = document.querySelector("header > button");

openButton.addEventListener("click", toggleMenu);

function toggleMenu(){

  var deNav = document.querySelector("nav");

  deNav.classList.toggle("toonMenu");

  openButton.classList.toggle("menuIsOpen");
}
