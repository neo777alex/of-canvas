$(document).ready(function() {
	$("#main > ul > li > a").click(function() {
		$(this).find("~ ul").stop().slideToggle("slov");
	});
});