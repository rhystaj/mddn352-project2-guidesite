var locationsList = document.getElementById("glassLocationSelectionPane");

//Output the given names to the locations list.
function listLocations(names){

	alert("updatingList");

	removeAllElementsFrom(locationsList);

	for(var i = 0; i < names.length; i++){

		alert(names[i]);

		var location = document.createTextNode("noed");
		locationsList.appendChild(location);

	}

}

//Clear the children of the given node.
function removeAllElementsFrom(target){

	alert("removing elements");

	// while(target.hasChildNodes()){
	// 	target.removeChild(target.firstChild);
	// }

	alert("elements removed");

}
