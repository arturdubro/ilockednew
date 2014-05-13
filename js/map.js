function initialize() {
	    var iLocked = new google.maps.LatLng(59.926235, 30.354635);
	    var center = new google.maps.LatLng(59.9285, 30.354635);
	    var mapOptions = { zoom: 15, center: center };
	    var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
	    var marker = new google.maps.Marker({ position: iLocked, map: map });
	    var infoWindow = new google.maps.InfoWindow();
		var html='iLocked - реальные квесты<br />ул. Коломенская д.3 во дворе<br>+7-812-998-38-27';
		infoWindow.setContent(html);
		infoWindow.open(map, marker);
		google.maps.event.addListener(marker, 'click', function(){
			infoWindow.open(map, marker);
		});
}
google.maps.event.addDomListener(window, 'load', initialize);