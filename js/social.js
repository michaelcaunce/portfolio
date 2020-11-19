// SOCIAL PANEL JS
const social_button = document.querySelector(".social__btn")
const social__container = document.querySelector(".social__container")

social_button.addEventListener(
  "click",
  () => {
    social__container.classList.toggle("visible")

    if (social_button.getAttribute("data-text-swap") == social_button.innerHTML) {
      social_button.innerHTML = social_button.getAttribute("data-text-original")
    } else {
      social_button.setAttribute("data-text-original", social_button.innerHTML)
      social_button.innerHTML = social_button.getAttribute("data-text-swap")
    }
  },
  false
)
