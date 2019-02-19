

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

glide.on('run.after', function () {
	// console.log('stari index', glide.index);
	if (glide.index === 10) {
		glide.index = 4;
		// console.log('novi index', glide.index)
	}
	else if (glide.index === 0) {
		glide.index = 6;
		// console.log('novi index 2', glide.index)
	}
})