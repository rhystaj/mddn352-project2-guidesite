var locationData;

//Output the given names to the locations list.
function listLocations(locData){

	var locationsList = document.getElementById("glassLocationSelectionPane");

	removeAllElementsFrom(locationsList);

	locationData = locData;
	for(var i = 0; i < locationData.length; i++){

		var location = document.createTextNode(locationData[i].name);
		var locationText = document.createElement("P");

		locationText.appendChild(location);
		locationText.className = "locationListItem";

		locationText.style.cursor = 'pointer';
		locationText.addEventListener('click', function(e){
			alert(e.target.innerText);
		});

		locationsList.appendChild(locationText);

	}

}

function locationClicked(){
	alert("click");
}

//Clear the children of the given node.
function removeAllElementsFrom(target){

	while(target.hasChildNodes()){
		target.removeChild(target.firstChild);
	}

}
