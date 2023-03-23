const slides = Array.from(document.querySelectorAll('.slidder .is-slide'));

		function goToNextSlide() {
			const activeSlide = document.querySelector('.slidder .is-slide.is-active-slide');

			const index = slides.indexOf(activeSlide);

			activeSlide.classList.remove('is-active-slide');

			if(index == slides.length-1) {
				slides[0].classList.add('is-active-slide');
			} else {
				slides[index+1].classList.add('is-active-slide');
			}
		}

		function goToPreviousSlide() {}

		setInterval(goToNextSlide, 5000);