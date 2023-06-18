document.addEventListener('DOMContentLoaded', (event) => {
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

	const cubes = document.querySelectorAll('.cube-style');

	const sBackDown = 60;
	const sBackTop = 120;
	const sBackLeft = 60;
	const sBackLayerLoginLeft = 60;
	const sBackLayerLoginRight = 60;

	const cubeRotationData = {
		'small': { rate: 1, direction: 1 },
		'medium': { rate: 1, direction: -1 },
		'big': { rate: 0.4, direction: 1 },
	};

	function handleCubeRotation(e) {
		const x = e.clientX;
		const y = e.clientY;

		cubes.forEach(cube => {
			const cubeSize = Array.from(cube.classList).find(cls => cls in cubeRotationData);

			if (cubeSize) {
				const { rate, direction } = cubeRotationData[cubeSize];
				const rotate = direction * rate * ((x / window.innerWidth + y / window.innerHeight) / 2) * 360;

				cube.style.transform = `rotate(${rotate}deg)`;
			}
		});
	}


	parallax.addEventListener('mousemove', handleCubeRotation);

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
});
