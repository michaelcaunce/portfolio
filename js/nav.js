// Javascript for the navigation using ES6 and arrow functions.
// const creates a variable that cannot be changed.

//  querySelector to find the menu button, class menu-button.
const navToggle = document.querySelector(".menu-button")
//  querySelector to find the mobile nav, class mobile-nav.
const nav = document.querySelector(".mobile-nav")
//  querySelector to find the container wrapped around the website, class body-container.
const containerBody = document.querySelector(".body-container")

const contBodyStyle = containerBody.style

// Listen for something to happen, when someone clicks, add the created open-nav class.
navToggle.addEventListener("click", _ => {
  contBodyStyle.transition = "transform 250ms ease-in"
  document.body.classList.toggle("open-nav") // Adding a class to the body. !Do not include the period (.) before the class.
})

// Listen for a click, if someone clicks, close the created class, open-nav.
nav.addEventListener("click", _ => {
  contBodyStyle.transition = "0ms"
  document.body.classList.remove("open-nav")
})
