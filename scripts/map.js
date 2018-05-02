const WELLINGTON = {lat: -41.286460, lng: 174.776236}

var map = null;
var marker = null;

/**
	Loads the imbedded map onto the page.
*/
function myMap(){

	//Create Map
	map = new google.maps.Map(document.getElementById("map"),{
		zoom: 15,
		center: WELLINGTON
	});


	if(map == null) alert("Map not loaded.");

	marker = new google.maps.Marker({
		map: map,
		title: "Client Location"
	});

	map.setCenter(marker.getPosition());
	
}


function updateMarkerPositions(newCoords){

	var markerCoords = new google.maps.LatLng(newCoords.lat, newCoords.lng);
	marker.setPosition(markerCoords);
	map.setCenter(marker.getPosition());

}