// Make a variable for the portfolio container = class portfolio-items. portfolio-items contains all portfolio elements.
const portfolioContainer = document.querySelector('.portfolio__items')

// addEventListener listening for a click,
portfolioContainer.addEventListener('click', ev => {

  // ev.preventDefault()

  // Variable for turning on the modal in relation to the link clicked.
  // When the target is the closest class of portfolio-link
  const modalToggle = ev.target.closest('.portfolio-link')

  if(modalToggle) ev.preventDefault()
  
  // If a click is not a portfolio-link, end script.
  if (! modalToggle) return

  // Variable modal is equal to the parent / next sibling of modalToggle. The parent being the figcaption, next sibling being the class portfolio-modal (see index.html)
  const modal = modalToggle.parentNode.nextElementSibling
  // Variable equal to class modal-close
  const closeButton = modal.querySelector('.modal-close')

  // modalOpen is equal to a function to add the open class and add an inline style for animation, modalIn (see _modal.scss)
  const modalOpen = _ => {
    // Open the modal by adding class open
    modal.classList.add('open')
    modal.style.animation = 'modalIn 1000ms forwards'
    // Remove back scroll
    document.body.style.overflowY = 'hidden'
  }

  // modalClose is equal to a function to remove class open and is called in function closeButton
  const modalClose = _ => {
    // Close the modal by removing class, open
    modal.classList.remove('open')
    // Remove the eventListener to the modal can open again after closing
    modal.removeEventListener('animationend', modalClose)
    // Add back scroll
    document.body.style.overflowY = 'scroll'
  }

  // closeButton is equal to a function to fade the modal out and look for the end of the animation followed by running a function.
  closeButton.addEventListener('click', _=> {
    modal.style.animation = 'modalOut 1000ms forwards'
    modal.addEventListener('animationend', modalClose)
    // Add back scroll
    document.body.style.overflowY = 'scroll'
  })

  // Call the function
  modalOpen()

})
