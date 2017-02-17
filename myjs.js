document.addEventListener('DOMContentLoaded', function() {
    mobileMenu();
});

function mobileMenu() {

	var navButton =  document.querySelector('.nav-toggle');
	var menu = document.querySelector('.menu');

	function toggleMenu() {
		menu.classList.toggle('open');
		navButton.classList.toggle('open');
	}

	navButton.addEventListener('click', toggleMenu);
};