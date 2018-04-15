const WELLINGTON = {lat: -41.286460, lng: 174.776236} //The coordinates of Wellington.

var map = null;
var marker = null;


// Initialize Firebase
var config = {
	apiKey: "AIzaSyC3JXCDZGe1IsARvhe_Z7q9g9_LoYnpwjQ",
	authDomain: "mddn-352-project-2-prototype.firebaseapp.com",
	databaseURL: "https://mddn-352-project-2-prototype.firebaseio.com",
	projectId: "mddn-352-project-2-prototype",
	storageBucket: "mddn-352-project-2-prototype.appspot.com",
	messagingSenderId: "506392227937"
};
firebase.initializeApp(config);


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

	//Get location
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(displayPosition);
	}
	else alert("could not get location");
	

}


function displayPosition(position){

	var coordinates = {lat: position.coords.latitude, lng: position.coords.longitude}
	marker = new google.maps.Marker({
		position: coordinates,
		map: map,
		title: "Current Location"
	});

	map.setCenter(marker.getPosition());

}

var coords = {lat: 0, lng: 0}
var latRef = firebase.database().ref().child('client-location-lat');
var lngRef = firebase.database().ref().child('client-location-lon');

latRef.on('value', lat => {
	coords.lat = parseFloat(lat.val());
	
	var markerCoords = new google.maps.LatLng(coords.lat, coords.lng);
	marker.setPosition(markerCoords);
	map.setCenter(marker.getPosition());

});

lngRef.on('value', lng => {
	coords.lng = parseFloat(lng.val());
	
	var markerCoords = new google.maps.LatLng(coords.lat, coords.lng);
	marker.setPosition(markerCoords);
	map.setCenter(marker.getPosition());

});