//-- Código del custom marker de https://codepen.io/dylanvann/pen/yNWdxJ
CustomMarker.prototype = new google.maps.OverlayView();

function CustomMarker(opts) {
	this.setValues(opts);
}

CustomMarker.prototype.draw = function () {
	var self = this;
	var div = this.div;
	if (!div) {
		div = this.div = $('' +
			'<div>' +
			// '<div class="pulse-box">' +
			'<svg class="pulse-svg">' +
			'<circle class="circle first-circle" fill="#FF0000" cx="10" cy="10" r="10"></circle>' +
			'<circle class="circle second-circle" fill="#FF0000" cx="10" cy="10" r="10"></circle>' +
			'<circle class="circle third-circle" fill="#FF0000" cx="10" cy="10" r="10"></circle>' +
			'<circle class="circle" fill="#FF0000" cx="10" cy="10" r="10"></circle>' +
			'</svg>' +
			// '</div>' +
			'</div>' +
			'')[0];
		this.circle = this.div.getElementsByClassName('circle');
		div.style.position = 'absolute';
		div.style.cursor = 'pointer';
		var panes = this.getPanes();
		panes.overlayImage.appendChild(div);
	}
	var point = this.getProjection().fromLatLngToDivPixel(this.position);
	if (point) {
		div.style.left = point.x + 'px';
		div.style.top = point.y + 'px';
	}
};
var map;
var markes_array=[];
var addMarkers = function (seisms) {
	var icons_url = 'assets/facemap/';
	seisms.forEach(function (seism, index, arr) {
		var icon = icons_url + seism.properties.intensity + ".svg";
		var marker = new SVGMarker({
			map: map,
			position: new google.maps.LatLng(seism.geometry.coordinates[1], seism.geometry.coordinates[0]),
			title: seism.local,
			icon: {
				anchor: new google.maps.Point(12.5, 35),
				size: new google.maps.Size(25, 35),
				url: icon
			}
		});
		markes_array.push(marker);
	});
};
var removeMarkers = function(){
	while(markes_array.length>1) markes_array.pop().setMap(null);
}
// Main function
window.addEventListener('load', function () {
	console.log("Adding listener");
	var create_map  = function(map_styles) {
		console.log("Creating Map");
		map = new google.maps.Map(document.getElementById('map'), {
			zoom: 8,
			center: new google.maps.LatLng(9.6, -84.3),
			styles: map_styles
		});
		var marker2 = new CustomMarker({
			position: new google.maps.LatLng(9.839190796211385, -83.98526430130005),
			map: map,
			icon: {
				anchor: new google.maps.Point(10, 10),
				size: new google.maps.Size(20, 20),
			}
		});
	}; 
	var	url = 'http://rsnapiusr.ucr.ac.cr/api/seisms/' +
		'getWebMapSeisms' +
		'?access_token=559aca63553be4973f58dbc1';

	var getSeisms = function() {
		$.getJSON('https://raw.githubusercontent.com/amedesc/map-test/master/map_18nov.geojson', function (result) {
			allSeisms = result.features;
			addMarkers(allSeisms);

		}, function (error) {
			console.error(error);
		});
	
	};

	// function getMapStyles() {
	// 	$.getJSON("http://localhost:8000/map_style.json", function (result) {
	// 		googlemap_styles = result;
	// 		console.log(googlemap_styles)
	// 		--callbacks;
	// 		if(callbacks === 0){
	// 			create_map(googlemap_styles);
	// 			addMarkers(allSeisms);
	// 		}
	// 	}, function (error) {
	// 		console.error(error);
	// 	});
	// };
	console.log("Invoking callbacks");
	create_map(map_options);
	//getSeisms();
});