const buttonOpen = document.querySelector('#buttonOpen')
const buttonClose = document.querySelector('#buttonClose')
const navDiv = document.querySelector('#navDiv')
const navOpenBg = document.querySelector('#navOpenBg')
const arrowUp = document.querySelectorAll('.arrowUp')
const arrowDown = document.querySelectorAll('.arrowDown')
const features = document.querySelector('.features')
const company = document.querySelector('.company')
const featuresDropdown = document.querySelector('#featuresDropdown')
const companyDropdown = document.querySelector('#companyDropdown')

buttonOpen.addEventListener('click', () => {
    buttonOpen.classList.add('hidden')
    buttonClose.classList.remove('hidden')
    navDiv.classList.remove('hidden')
    navOpenBg.classList.remove('hidden')
})

buttonClose.addEventListener('click', () => {
    buttonOpen.classList.remove('hidden')
    buttonClose.classList.add('hidden')
    navDiv.classList.add('hidden')
    navOpenBg.classList.add('hidden')

})

features.addEventListener('click', (e) => {
    arrowDown[0].classList.toggle('hidden')
    arrowUp[0].classList.toggle('hidden')
    featuresDropdown.classList.toggle('hidden')

})

company.addEventListener('click', (e) => {
    arrowDown[1].classList.toggle('hidden')
    arrowUp[1].classList.toggle('hidden')
    companyDropdown.classList.toggle('hidden')
})


