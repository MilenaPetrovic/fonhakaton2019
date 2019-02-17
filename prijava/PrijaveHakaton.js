$(function () {	

	//COLLAPSIBLE

	var coll = document.getElementsByClassName("collapsible");
	var i;
	var l;

	for (i = 0; i < coll.length; i++) {
		coll[i].addEventListener("click", function() {
		this.classList.toggle("active");
		var content = this.nextElementSibling;
		if (content.style.display === "block") {
			content.style.display = "none";
		} else {
			for (l =0 ; l < coll.length; l++){
				var cont = coll[l].nextElementSibling;
				cont.style.display = 'none'
			}
			content.style.display = "block";
		}
		});
	}

	//GOOGLE SHEET

	const scriptURL = 'https://script.google.com/macros/s/AKfycbxgH_Xq8de0HcJXcIGQgc8PqAEDzfhfFnNWLrZrLLU_c_zkAV9A/exec'
	const form = document.forms['submit-to-google-sheet']

	form.addEventListener("submit", e => {
		e.preventDefault()
		fetch(scriptURL, { method: 'POST', body: new FormData(form) })
			.then(response => console.log('Success!', response))
			.catch(error => console.error('Error!', error.message))
	})

});