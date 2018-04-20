var locationsToCoordinates = {};

//Output the given names to the locations list.
function listLocations(locData){

	var locationsList = document.getElementById("glassLocationSelectionPane");


	removeAllElementsFrom(locationsList);

	locationsToCoordinates = {};
	locationData = locData;
	for(var i = 0; i < locationData.length; i++){

		var location = document.createTextNode(locationData[i].name);
		var locationText = document.createElement("P");

		locationText.appendChild(location);
		locationText.className = "locationListItem";

		//Make the element clickable and it set the suggested location coordinates in the database to it's locations coordinates.
		locationText.style.cursor = 'pointer';
		locationsToCoordinates[locationData[i].name] = {lat: locationData[i].lat, lon: locationData[i].lon};
		locationText.addEventListener('click', function(e){
			updateSuggestedLocation(locationsToCoordinates[e.target.innerText].lat, locationsToCoordinates[e.target.innerText].lon)
		});

		locationsList.appendChild(locationText);

	}

}

//Clear the children of the given node.
function removeAllElementsFrom(target){

	while(target.hasChildNodes()){
		target.removeChild(target.firstChild);
	}

}
