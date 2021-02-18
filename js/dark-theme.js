// Dark theme

const themeButton = document.getElementById("theme-button")
const darkTheme = "dark-theme"
const iconTheme = "fa-sun"

// Previously selected topic
const selectedTheme = localStorage.getItem("selected-theme")
const selectedIcon = localStorage.getItem("selected-icon")

// Obtain the current theme by validating the dark-theme class
const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? "dark" : "light")
const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? "fa-moon" : "fa-sun")

// Validate if a topic has been chosen
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme)
  themeButton.classList[selectedIcon === "fa-moon" ? "add" : "remove"](iconTheme)
}

themeButton.addEventListener("click", () => {
  // Add or remove dark / light theme
  document.body.classList.toggle(darkTheme)
  themeButton.classList.toggle(iconTheme)
  // Save the theme and icon chosen by the user
  localStorage.setItem("selected-theme", getCurrentTheme())
  localStorage.setItem("selected-icon", getCurrentIcon())
})
