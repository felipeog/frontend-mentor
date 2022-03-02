const htmlElement = document.querySelector('html')
const themeToggleWrapper = document.querySelector('.toggle')
const themeToggleButton = themeToggleWrapper.querySelector('.toggle__button')

const toggleTheme = () => {
  const currentTheme = htmlElement.getAttribute('data-theme')

  if (currentTheme === 'dark') {
    htmlElement.setAttribute('data-theme', 'light')
    themeToggleButton.classList.remove('active')
  } else {
    htmlElement.setAttribute('data-theme', 'dark')
    themeToggleButton.classList.add('active')
  }
}

const init = () => {
  themeToggleWrapper.addEventListener('click', toggleTheme)
}

window.addEventListener('load', init)
