var map_options = [
	{
	  "elementType": "geometry",
	  "stylers": [
		{
		  "color": "#f5f5f5"
		}
	  ]
	},
	{
	  "elementType": "labels.icon",
	  "stylers": [
		{
		  "visibility": "off"
		}
	  ]
	},
	{
	  "elementType": "labels.text.fill",
	  "stylers": [
		{
		  "color": "#616161"
		}
	  ]
	},
	{
	  "elementType": "labels.text.stroke",
	  "stylers": [
		{
		  "color": "#f5f5f5"
		}
	  ]
	},
	{
	  "featureType": "administrative.country",
	  "elementType": "geometry.stroke",
	  "stylers": [
		{
		  "color": "#263238"
		},
		{
		  "weight": 1
		}
	  ]
	},
	{
	  "featureType": "administrative.land_parcel",
	  "elementType": "geometry.fill",
	  "stylers": [
		{
		  "color": "#bdbdbd"
		}
	  ]
	},
	{
	  "featureType": "administrative.land_parcel",
	  "elementType": "labels",
	  "stylers": [
		{
		  "visibility": "off"
		}
	  ]
	},
	{
	  "featureType": "administrative.land_parcel",
	  "elementType": "labels.text.fill",
	  "stylers": [
		{
		  "color": "#bdbdbd"
		}
	  ]
	},
	{
	  "featureType": "administrative.province",
	  "elementType": "geometry.stroke",
	  "stylers": [
		{
		  "color": "#263238"
		},
		{
		  "weight": 0.5
		}
	  ]
	},
	{
	  "featureType": "landscape.natural.terrain",
	  "elementType": "geometry.fill",
	  "stylers": [
		{
		  "color": "#bfc2cb"
		}
	  ]
	},
	{
	  "featureType": "landscape.natural.terrain",
	  "elementType": "geometry.stroke",
	  "stylers": [
		{
		  "visibility": "off"
		}
	  ]
	},
	{
	  "featureType": "poi",
	  "elementType": "geometry",
	  "stylers": [
		{
		  "color": "#eeeeee"
		}
	  ]
	},
	{
	  "featureType": "poi",
	  "elementType": "labels.text",
	  "stylers": [
		{
		  "visibility": "off"
		}
	  ]
	},
	{
	  "featureType": "poi",
	  "elementType": "labels.text.fill",
	  "stylers": [
		{
		  "color": "#757575"
		}
	  ]
	},
	{
	  "featureType": "poi.park",
	  "elementType": "geometry",
	  "stylers": [
		{
		  "color": "#e5e5e5"
		}
	  ]
	},
	{
	  "featureType": "poi.park",
	  "elementType": "labels.text.fill",
	  "stylers": [
		{
		  "color": "#9e9e9e"
		}
	  ]
	},
	{
	  "featureType": "road",
	  "elementType": "geometry",
	  "stylers": [
		{
		  "color": "#ffffff"
		}
	  ]
	},
	{
	  "featureType": "road",
	  "elementType": "geometry.fill",
	  "stylers": [
		{
		  "color": "#ffffff"
		}
	  ]
	},
	{
	  "featureType": "road.arterial",
	  "elementType": "labels",
	  "stylers": [
		{
		  "visibility": "off"
		}
	  ]
	},
	{
	  "featureType": "road.arterial",
	  "elementType": "labels.text.fill",
	  "stylers": [
		{
		  "color": "#757575"
		}
	  ]
	},
	{
	  "featureType": "road.highway",
	  "elementType": "geometry",
	  "stylers": [
		{
		  "color": "#dadada"
		}
	  ]
	},
	{
	  "featureType": "road.highway",
	  "elementType": "geometry.fill",
	  "stylers": [
		{
		  "color": "#ffffff"
		}
	  ]
	},
	{
	  "featureType": "road.highway",
	  "elementType": "geometry.stroke",
	  "stylers": [
		{
		  "color": "#ffffff"
		},
		{
		  "weight": 0.5
		}
	  ]
	},
	{
	  "featureType": "road.highway",
	  "elementType": "labels",
	  "stylers": [
		{
		  "visibility": "off"
		}
	  ]
	},
	{
	  "featureType": "road.highway",
	  "elementType": "labels.text.fill",
	  "stylers": [
		{
		  "color": "#616161"
		}
	  ]
	},
	{
	  "featureType": "road.local",
	  "stylers": [
		{
		  "visibility": "off"
		}
	  ]
	},
	{
	  "featureType": "road.local",
	  "elementType": "labels",
	  "stylers": [
		{
		  "visibility": "off"
		}
	  ]
	},
	{
	  "featureType": "road.local",
	  "elementType": "labels.text.fill",
	  "stylers": [
		{
		  "color": "#9e9e9e"
		}
	  ]
	},
	{
	  "featureType": "transit",
	  "stylers": [
		{
		  "visibility": "off"
		}
	  ]
	},
	{
	  "featureType": "transit.line",
	  "elementType": "geometry",
	  "stylers": [
		{
		  "color": "#e5e5e5"
		}
	  ]
	},
	{
	  "featureType": "transit.station",
	  "elementType": "geometry",
	  "stylers": [
		{
		  "color": "#eeeeee"
		}
	  ]
	},
	{
	  "featureType": "water",
	  "elementType": "geometry",
	  "stylers": [
		{
		  "color": "#c9c9c9"
		}
	  ]
	},
	{
	  "featureType": "water",
	  "elementType": "labels.text.fill",
	  "stylers": [
		{
		  "color": "#9e9e9e"
		}
	  ]
	}
  ]

  var earthquakes = [
	{
		"id":1,
		"intensity": 5.5,
		"color_earthquake":"orange",
		"timestamp":1517119200,
		"location":"San José, San Pedro",
		"points_url":"'https://raw.githubusercontent.com/amedesc/map-test/master/map_18nov.geojson'"
	},
	{
		"id":2,
		"intensity": 7.5,
		"color_earthquake":"red",
		"timestamp":1517119200,
		"location":"San José, San Pedro",
		"points_url":"'https://raw.githubusercontent.com/amedesc/map-test/master/map_18nov.geojson'"
	},
	{
		"id":3,
		"intensity": 2.5,
		"color_earthquake":"green",
		"timestamp":1517119200,
		"location":"San José, San Pedro",
		"points_url":"'https://raw.githubusercontent.com/amedesc/map-test/master/map_18nov.geojson'"
	},
	{
		"id":4,
		"intensity": 8.5,
		"color_earthquake":"red",
		"timestamp":1517119200,
		"location":"San José, San Pedro",
		"points_url":"'https://raw.githubusercontent.com/amedesc/map-test/master/map_18nov.geojson'"
	},
	{
		"id":5,
		"intensity": 4.5,
		"color_earthquake":"orange",
		"timestamp":1517119200,
		"location":"San José, San Pedro",
		"points_url":"'https://raw.githubusercontent.com/amedesc/map-test/master/map_18nov.geojson'"
	},
	{
		"id":6,
		"intensity": 3.5,
		"color_earthquake":"green",
		"timestamp":1517119200,
		"location":"San José, San Pedro",
		"points_url":"'https://raw.githubusercontent.com/amedesc/map-test/master/map_18nov.geojson'"
	}
];