
var mi = {};

$(document).ready(function() {
	mi.handleHeader();
});

mi.handleHeader = function() {
	$(window).scroll(function() {
		var height = $(window).scrollTop();

		if (height > 0) {
			$("#nav-container").addClass("nav-menu-scroll");
		}
		else {
			$("#nav-container").removeClass("nav-menu-scroll");
		}
	});
}
