const shareWrapper = document.querySelector('.share')
const shareButton = document.querySelector('.share__button')

shareButton.addEventListener('click', () => {
  shareWrapper.classList.toggle('share--active')
})
