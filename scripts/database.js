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


//Listen for and respond to client location changes in the database.
var coords = {lat: 0, lng: 0}
var clientLocationRef = firebase.database().ref("client-location");

clientLocationRef.on('value', loc => {

	coords.lat = parseFloat(loc.child("lat").val());
	coords.lng = parseFloat(loc.child("lon").val());
	updateMarkerPositions(coords);

})


//Listen for changes to the avaliable locations and list them.
locationsRef = firebase.database().ref('location-suggestions');
locationsRef.on('value', updateLocationsList);

function updateLocationsList(data){

	var locations = data.val();
	var keys = Object.keys(locations);

	var locationData = new Array(keys.length);

	for(var i = 0; i < keys.length; i++){
 		locationData[i] = {
 			name: locations[keys[i]].name,
 			lat: locations[keys[i]].lat,
 			lon: locations[keys[i]].lon
 		}	
	}

	listLocations(locationData);	

}

function updateSuggestedLocation(lat, lon){

	alert("updating locations");

	firebase.database().ref("suggested-location").child("lat").set(lat);
	firebase.database().ref("suggested-location").child("lon").set(lon);
	
}