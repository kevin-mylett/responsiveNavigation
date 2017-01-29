document.addEventListener('DOMContentLoaded', function() {
    smallScreenMenu();
});

function smallScreenMenu() {

	var nav = document.getElementsByClassName('nav-toggle');
	var slideNav = nav[0];

	slideNav.onclick = function() {

		var menu = document.getElementsByClassName('menu');
		var slideNavMenu = menu[0];

		if (slideNavMenu.className == 'menu') {
			slideNavMenu.className += ' open';
			slideNav.className += ' open';
		} else {
			slideNavMenu .className = 'menu';
			slideNav.className = 'nav-toggle';
		}
	}
};