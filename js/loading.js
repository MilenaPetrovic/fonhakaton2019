

document.addEventListener("DOMContentLoaded", function () {
	console.log('ucitano');
	var loading = document.querySelector('.loading');
	loading.classList.add('hidden');
	setTimeout(function () {
		loading.style.display = 'none';
	}, 1200);
})