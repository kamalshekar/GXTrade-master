$(document).ready(function(){
	$(".hamburgerIcon").click(function(){
		$(this).toggleClass('open');
		$('.dropdownContainer').fadeToggle();
	});
});