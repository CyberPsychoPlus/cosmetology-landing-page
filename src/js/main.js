import '../scss/style.scss'

// Scroll on click for navigation menu
const menuLinks = document.querySelectorAll('.header__link[data-goto]')
if (menuLinks.length > 0) {
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener('click', onMenuLinkClick)
	})

	function onMenuLinkClick(e) {
		const menuLink = e.target
		if (
			menuLink.dataset.goto &&
			document.querySelector(menuLink.dataset.goto)
		) {
			const gotoBlock = document.querySelector(menuLink.dataset.goto)
			const gotoBlockValue =
				gotoBlock.getBoundingClientRect().top +
				window.scrollY -
				document.querySelector('header').offsetHeight

			window.scrollTo({
				top: gotoBlockValue,
				behavior: 'smooth',
			})
			e.preventDefault()
		}
	}
}

// Logo scroll
document.addEventListener('DOMContentLoaded', () => {
	const logoLink = document.querySelector('.header__logo-link')
	const targetSection = document.getElementById('main')
	const headerHeight = document.querySelector('header').offsetHeight

	logoLink.addEventListener('click', e => {
		e.preventDefault()

		const targetOffset = targetSection.offsetTop - headerHeight

		window.scrollTo({
			top: targetOffset,
			behavior: 'smooth',
		})
	})
})

// Skincare arrow scroll
document.addEventListener('DOMContentLoaded', () => {
	const scrollTrigger = document.querySelector('.skincare__link')
	const targetSection = document.getElementById('cosmetics')
	const headerHeight = document.querySelector('header').offsetHeight

	scrollTrigger.addEventListener('click', e => {
		e.preventDefault()

		const targetOffset = targetSection.offsetTop - headerHeight

		window.scrollTo({
			top: targetOffset,
			behavior: 'smooth',
		})
	})
})
