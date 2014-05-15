$(window).load(function(){
	var currentstate = 0;
	var nextstate = 1;
	var chernobyl = ['./photo/01.jpg', './photo/02.jpg'];
	var pirates = ['./photo/11.jpg', './photo/12.jpg', './photo/13.jpg', './photo/14.jpg'];

	function startGallery() {
	    var quest = $('#photogallery').attr('class');
	    if (quest) {
	    if (quest == 'quest-pic-chernobyl') {
	    	if (currentstate == chernobyl.length) currentstate = 0;
	    	var imgsrc = chernobyl[currentstate];
	    	};
	    if (quest == 'quest-pic-pirates') {
	    	if (currentstate == pirates.length) currentstate = 0;
	    	var imgsrc = pirates[currentstate];
	    	};
		//$('.'+quest).css('background-image','url('+imgsrc+')');
		$('.'+quest).animate({opacity: 0}, 'slow', function() {
			$(this).css('background-image','url('+imgsrc+')').animate({opacity: 1});
		});
		currentstate++;
		setTimeout(startGallery, 7200);
	    };
	};
	startGallery();
});

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  video = new YT.Player( 'video', {
  width: '1000px',
  height: '550px',
  videoId: 'aqQ7Hv8YL6k',
  playerVars: { 'controls': 0, 'showinfo': 0 },
  events: {
    'onStateChange': onPlayerStateChange
  }
  });
};

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.ENDED || event.data == YT.PlayerState.PAUSED) {
    if (video.getPlayerState() == 0 || video.getPlayerState() == 2) $('#video').hide();
    $('.main-banner').show();
    };
};

$(document).ready(function(){
    $(document).on('click', '.playvideo', function(event){
    	event.preventDefault();
        video.playVideo();
        $('.main-banner').hide();
        $('#video').show();
    });
});