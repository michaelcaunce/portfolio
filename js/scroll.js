/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "150px",
  duration: 2000,
  reset: false,
  mobile: false,
  desktop: true
})

/*SCROLL HOME*/
sr.reveal(".header--logo", {})
sr.reveal(".navigation ul", { delay: 200 })
sr.reveal(".hero--img", { origin: "right", scale: 0.15, delay: 600 })
sr.reveal(".hero__content--title", { origin: "left", delay: 600 })
sr.reveal(".hero__content--sub--small", { origin: "left", delay: 800 })
sr.reveal(".hero__content--sub--XL", { origin: "left", delay: 800 })
sr.reveal(".hero__footer", { origin: "left", delay: 1000 })
sr.reveal(".hero__content--text", { origin: "right", delay: 1200 })
sr.reveal(".hero--text", { origin: "right", delay: 1200 })

/*SCROLL ABOUT*/
sr.reveal(".about__section--title", { origin: "left", delay: 300 })
sr.reveal(".about__section--text", { origin: "bottom", delay: 400 })
sr.reveal(".about__section--img", { origin: "bottom", delay: 700 })

/*SCROLL SKILLS*/
sr.reveal(".skills--title", {})
sr.reveal(".skills__list--item", { distance: "20px", origin: "left", delay: 90, interval: 100 })

/*SCROLL QUOTE*/
sr.reveal(".quote_1", { delay: 400 })
sr.reveal(".quote_2", { delay: 800 })

/*SCROLL PORTFOLIO*/
sr.reveal(".portfolio__section--title", { origin: "left", delay: 300 })
sr.reveal(".portfolio__section--filter--buttons--list", { distance: "50px", origin: "bottom", delay: 90, interval: 100 })
// sr.reveal(".portfolio__items--item", { distance: "10px", origin: "bottom", delay: 500, interval: 300, scale: 0.15 })

/*SCROLL CONTACT*/
sr.reveal(".contact__container", { delay: 2000, scale: 0.15 })
sr.reveal(".contact--title", { origin: "left", delay: 1900 })
sr.reveal(".contact__container--img", { delay: 3000 })
sr.reveal(".contact__container--box--icons li", { distance: "20px", origin: "left", delay: 2400, interval: 300 })
