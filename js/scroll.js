

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

glide.on('run.before', function (move) {
	// console.log('=====================');
	// console.log('run.end', move);
	// console.log('stari index', glide.index);
	// console.log('index', glide.index);
	if (glide.index === 0 && move.direction === "<") {
		// glide.index = 6;
		glide.index = 6;
		// console.log("POCETAK");
		// console.log('index 2', glide.index);
	}
	else if (glide.index === 10 && move.direction === ">") {
		glide.index = 4;
	}
})