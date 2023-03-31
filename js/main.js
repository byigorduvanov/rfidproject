const toTop = document.querySelector(".to-top");

function handleScroll() {
	window.pageYOffset > 100
		? toTop.classList.add("active")
		: toTop.classList.remove("active");
}

window.addEventListener("scroll", handleScroll);

/*parallax =====================*/
const parallax = document.querySelector('.parallax');
const backDown = document.querySelector('.back-layer__down');
const backTop = document.querySelector('.back-layer__top');
const backLeft = document.querySelector('.back-layer__left');
const backLayerLoginLeft = document.querySelector('.back-layer__login__left');
const backLayerLoginRight = document.querySelector('.back-layer__login__right');

const sBackDown = 60;
const sBackTop = 120;
const sBackLeft = 60;
const sBackLayerLoginLeft = 60;
const sBackLayerLoginRight = 60;

function handleParallax(x, y) {
	if (backDown) {
		backDown.style.transform = `translate(0, ${y / sBackDown}%)`;
	}

	if (backLeft) {
		backLeft.style.transform = `translate(0, -${y / sBackLeft}%)`;
	}

	if (backTop) {
		backTop.style.transform = `translate(-${x / sBackTop}%, 0)`;
	}
}

function handleLoginLayer(x, y) {
	if (backLayerLoginLeft) {
		backLayerLoginLeft.style.transform = `translate(0, -${y / sBackLayerLoginLeft}%)`;
	}

	if (backLayerLoginRight) {
		backLayerLoginRight.style.transform = `translate(${x / sBackLayerLoginRight}%, 0)`;
	}
}

parallax.addEventListener('mousemove', e => {
	const x = e.clientX;
	const y = e.clientY;
	handleParallax(x, y);
	handleLoginLayer(x, y);
});

