/************
 * slider
 */

// elements
const slider = {
  image: document.querySelector('.slider__image'),
  title: document.querySelector('.slider__title'),
  text: document.querySelector('.slider__text'),
  leftButton: document.querySelector('.slider__navigation-left'),
  rightButton: document.querySelector('.slider__navigation-right'),
}

// content
const slides = [
  {
    image: './img/desktop-image-hero-1.jpg',
    title: 'Discover innovative ways to decorate',
    text: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form andnfunction in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
  },
  {
    image: './img/desktop-image-hero-2.jpg',
    title: 'We are available all across the globe',
    text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    image: './img/desktop-image-hero-3.jpg',
    title: 'Manufactured with the best materials',
    text: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades ofexperience in this industry, we understand what customers want for their home and office.',
  },
]

// state
let index = 0

// functions
const setSlide = (index) => {
  const currentSlide = slides[index]

  slider.image.src = currentSlide.image
  slider.title.textContent = currentSlide.title
  slider.text.textContent = currentSlide.text
}

const nextSlide = () => {
  index = index >= slides.length - 1 ? 0 : index + 1

  setSlide(index)
}

const previousSlide = () => {
  index = index <= 0 ? slides.length - 1 : index - 1

  setSlide(index)
}

// events
window.addEventListener('load', () => {
  setSlide(index)
})

document.addEventListener('keydown', (event) => {
  const keyName = event.key

  switch (keyName) {
    case 'ArrowRight':
      nextSlide()
      break

    case 'ArrowLeft':
      previousSlide()
      break
  }
})

slider.leftButton.addEventListener('click', previousSlide)
slider.rightButton.addEventListener('click', nextSlide)

/************
 * navigation
 */

// elements
const navigation = document.querySelector('.navigation')
const mobileOpen = document.querySelector('.header__mobile-open')
const mobileClose = document.querySelector('.header__mobile-close')

// functions
const toggleNavigationClass = () => {
  navigation.classList.toggle('navigation--hidden')
}

// events
mobileOpen.addEventListener('click', () => {
  toggleNavigationClass()
})

mobileClose.addEventListener('click', () => {
  toggleNavigationClass()
})
