(function() {
 	window.onload = function() {
 		//Mencari id=map
	 	var mapDiv = document.getElementById('map');
	 	//memanggil api google map dengan koordinat -7.795580, 110.369490
	 	var latlng = new google.maps.LatLng(-7.795580, 110.369490);
	 	var options = {
	 		center: latlng,
	 		zoom: 11,
	 		//mapTypeId: google.maps.MapTypeId.ROADMAP,
	 		//menonaktifkan zoom, map type control dll
	 		//disableDefaultUI: true,
	 		//mengaktifkan type control
			mapTypeControlOptions: {
			 	style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
			 	position: google.maps.ControlPosition.TOP,
			 	mapTypeIds: [
			 		google.maps.MapTypeId.ROADMAP,
			 		google.maps.MapTypeId.SATELLITE
			 	]
			 }
	 	};
	 	//inisiasi peta
	 	var map = new google.maps.Map(mapDiv, options);
 	}
})();