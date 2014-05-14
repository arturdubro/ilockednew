$(window).load(function(){
var currentstate = 0;
function startGallery() {
    var quest = $('#photogallery').attr('class');
    if (quest) {
    var chernobyl = ['./photo/01.jpg', './photo/02.jpg'];
    var pirates = ['./photo/11.jpg', './photo/12.jpg', './photo/13.jpg', './photo/14.jpg'];
    if (quest == 'quest-pic-chernobyl') {
    	if (currentstate == chernobyl.length) currentstate = 0;
    	var imgsrc = chernobyl[currentstate];
    	};
    if (quest == 'quest-pic-pirates') {
    	if (currentstate == pirates.length) currentstate = 0;
    	var imgsrc = pirates[currentstate];
    	};
	$('.'+quest).css('background-image','url('+imgsrc+')');
	currentstate++;
	setTimeout(startGallery, 7200);
    };
};
startGallery();
});