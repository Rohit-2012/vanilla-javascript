const current = document.getElementById('current')
const images = document.querySelector('.images')
const imageNodeList = document.querySelectorAll('.images img')

imageNodeList[0].style.opacity = 0.6

images.addEventListener('click', displayImage)

function displayImage(e) {
    imageNodeList.forEach(image => image.style.opacity = 1)

    current.src = e.target.src

    current.classList.add('fade-in')

    setTimeout(() => current.classList.remove('fade-in'), 700)

    e.target.style.opacity = 0.6
}