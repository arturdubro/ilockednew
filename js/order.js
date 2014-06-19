$(document).ready(function(){
	$(document).on('click','td.future', function(event){
		event.preventDefault();
		$('.popup').show();
		$('.ordercontainer').show();
		$('.ordermenu').show();
		$('.finishorder').hide();
	});
	$(document).on('click','.ordermenu, .finishorder', function(event){
		event.preventDefault();
		return false;
	});
	$(document).on('click','.ordercontainer, .close', function(event){
		event.preventDefault();
		$('.popup').hide();
		$('.ordercontainer').hide();
	});
	$(document).on('click', 'div.quest > ul > li > a', function(event){
		event.preventDefault();
		$('.finishorder').show();
		$('.ordermenu').hide();
	});
});