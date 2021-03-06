function startGallery(){
    var active = $('#photogallery .active');
    var next = (active.next().length > 0) ? active.next() : $('#photogallery img:first');
    next.css('z-index',2);
    active.fadeOut(1500,function(){
		active.css('z-index',1).show().removeClass('active');
		next.css('z-index',3).addClass('active');
    });
};

var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPod|iPad/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
};

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  video = new YT.Player( 'video', {
  width: '1000px',
  height: '550px',
  videoId: 'aqQ7Hv8YL6k',
  playerVars: { 'controls': 1, 'showinfo': 0 },
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
        if (!isMobile.any()) video.playVideo();
        $('.main-banner').hide();
        $('#video').show();
    });

    $('.quests-preview-container').hover(function(){
        $(this).addClass('over'); 
    }, function(){
        $(this).removeClass('over');
    });
    setInterval('startGallery()', 5000);
});