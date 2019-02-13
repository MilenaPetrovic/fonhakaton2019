

document.addEventListener('wheel', scrollToSlide);

function scrollToSlide(e) {
	var delta;

	if (e.wheelDelta) {
		delta = e.wheelDelta;
	} else {
		delta = -1 * e.deltaY;
	}

	if (delta < 0) {
		glide.go('<')
	} else if (delta > 0) {
		glide.go('>')
	}

}