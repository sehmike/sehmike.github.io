const toggler = document.querySelector('.toggler')

const circle = document.querySelector('.circle')

toggler.addEventListener('click', () => {
	circle.classList.toggle('clicked')
	toggler.classList.toggle('dark')
})