'use strict';

angular.module('losentisteApp.earthquakes-list', ['ngRoute'])

  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/earthquakes-list', {
      templateUrl: 'earthquakes-list/earthquakes-list.html',
      controller: 'EarthquakesListCtrl'
    });
  }])
  .controller('EarthquakesListCtrl', ["$scope", "$log", 'earthquakesData', function (sc, $log, earthquakesData) {
    sc.currentEarthquake = null;
    sc.fetchEarthquakes = function () {
      // earthquakesData.getData();
    };
    var data = {
      "count": 7,
      "next": null,
      "previous": null,
      "results": [{
        "map": null,
        "geolocation": {
          "type": "Point",
          "coordinates": [-83.34, 9.890000000000006]
        },
        "date": "24/02/2018 16:10:00",
        "magnitude": 3.1,
        "depth": 27.0,
        "location": "56 km al Este de Cobano, Puntarenas",
        "is_pinned": true,
        "is_reportable": true,
        "osop_images": []
      }, {
        "map": null,
        "geolocation": {
          "type": "Point",
          "coordinates": [-83.7954711914062, 9.849803938000592]
        },
        "date": "24/02/2018 04:39:32",
        "magnitude": 4.3,
        "depth": 2.0,
        "location": "11 km al Norte de Quebrada Honda, Nicoya",
        "is_pinned": false,
        "is_reportable": false,
        "osop_images": []
      }, {
        "map": null,
        "geolocation": {
          "type": "Point",
          "coordinates": [-83.97646410034832, 9.766931546683168]
        },
        "date": "23/02/2018 15:40:56",
        "magnitude": 5.5,
        "depth": 1.0,
        "location": "3 km al Norte de Tobosí, El Guarco",
        "is_pinned": true,
        "is_reportable": true,
        "osop_images": []
      }, {
        "map": null,
        "geolocation": {
          "type": "Point",
          "coordinates": [-84.33999999999997, 9.189999999999985]
        },
        "date": "09/02/2018 16:35:00",
        "magnitude": 2.1,
        "depth": 10.0,
        "location": "5 km al Este de Cobano, Puntarenas",
        "is_pinned": true,
        "is_reportable": true,
        "osop_images": []
      }, {
        "map": null,
        "geolocation": {
          "type": "Point",
          "coordinates": [-84.53430175781244, 10.379765224421426]
        },
        "date": "09/02/2018 18:00:00",
        "magnitude": 2.1,
        "depth": 3.0,
        "location": "34 km al Noreste de Parismina, Siquirres",
        "is_pinned": false,
        "is_reportable": false,
        "osop_images": []
      }, {
        "map": null,
        "geolocation": {
          "type": "Point",
          "coordinates": [-83.153, 8.872]
        },
        "date": "14/02/2018 18:59:00",
        "magnitude": 3.2,
        "depth": 10.0,
        "location": "14 km al Noreste de Chacarita, Buenos Aires",
        "is_pinned": false,
        "is_reportable": false,
        "osop_images": [{
          "url": "http://www.rsn.ucr.ac.cr/mapalocal/seismoimg/18_02_14_0659pm_Falla.jpg"
        }, {
          "url": "http://www.rsn.ucr.ac.cr/mapalocal/seismoimg/18_02_14_0659pm_Plate.jpg"
        }, {
          "url": "http://www.rsn.ucr.ac.cr/mapalocal/seismoimg/18_02_14_0659pm_Int.jpg"
        }, {
          "url": "http://www.rsn.ucr.ac.cr/mapalocal/seismoimg/18_02_14_0659pm.jpg"
        }]
      }, {
        "map": null,
        "geolocation": {
          "type": "Point",
          "coordinates": [-83.9, 9.765]
        },
        "date": "21/02/2018 09:18:00",
        "magnitude": 2.6,
        "depth": 8.0,
        "location": "6 km al Suroeste de Orosi, Paraiso, Cartago",
        "is_pinned": false,
        "is_reportable": false,
        "osop_images": [{
          "url": "http://www.rsn.ucr.ac.cr/mapalocal/seismoimg/18_02_21_0918am_Falla.jpg"
        }, {
          "url": "http://www.rsn.ucr.ac.cr/mapalocal/seismoimg/18_02_21_0918am_Plate.jpg"
        }, {
          "url": "http://www.rsn.ucr.ac.cr/mapalocal/seismoimg/18_02_21_0918am_Int.jpg"
        }, {
          "url": "http://www.rsn.ucr.ac.cr/mapalocal/seismoimg/18_02_21_0918am.jpg"
        }]
      }]
    };


    sc.earthquakes = data['results'];

    sc.setCurrent = function ($index) {
      sc.currentEarthquake = $index;
      $log.info(sc.currentEarthquake);
    };
    sc.getMagnitudeColor = function (magnitude) {
      if (magnitude < 3) {
        return "green";
      }
      if (magnitude > 3 && magnitude < 8) {
        return "orange";
      }
      if (magnitude > 8) {
        return "red";
      }
    };
    sc.isActive = function ($index) {
      return ($index == sc.currentEarthquake) ? "selected" : "";
    };

  }])
  .filter("locationFilter",function(){
    return  function(input){
      return input.split(" de ")[1];
    }
  })
  .filter("dateFilter",['$log',function($log){
    return function(input){
        let inputDate = input.split(" ");
        let cardDate = inputDate[0].split("/");
        inputDate[1].split(":").map(function(e){cardDate.push(e);});
        let currentDate = new Date();
        $log.info(cardDate);
        $log.info(currentDate);
        if(cardDate[0] == currentDate.getDate() &&
           cardDate[1] == currentDate.getMonth()+1 && 
           cardDate[2] == currentDate.getFullYear() ){
          if(( currentDate.getHours() -cardDate[3]) < 1){
            return ('Hace ' + (currentDate.getMinutes() -cardDate[4])+ " minutos");
          }else{
            return ('Hoy a las ' +cardDate[3]%12 + ":" + cardDate[4] + ((cardDate[3]-12>0)?" p.m.":" a.m."));
          }
        }else{
          if((currentDate.getDate() - cardDate[0]) == 1 &&
              cardDate[1] == currentDate.getMonth()+1 && 
              cardDate[2] == currentDate.getFullYear()){
            return ('Ayer a las ' +cardDate[3]%12 + ":" + cardDate[4] + ((cardDate[3]-12>0)?" p.m.":" a.m."));
          }
          return input.split(" ")[0] + " "+ cardDate[3]%12 + ":" + cardDate[4] + ((cardDate[3]-12>0)?" p.m.":" a.m.");
        }
    }
  }]);


// {
//   "id":1,
//   "intensity": 5.5,
//   "color_earthquake":"orange",
//   "timestamp":"35 minutos",
//   "location":"San José, San Pedro",
//   "points_url":"https://raw.githubusercontent.com/fergo125/rsn-losentiste-web/master/data/point.json?token=AHj5HqwDq3KLJEAvpFzPJ2QzKO2Zq516ks5aeeXUwA%3D%3D"
// },
// {
//   "id":2,
//   "intensity": 7.5,
//   "color_earthquake":"red",
//   "timestamp":"35 minutos",
//   "location":"San José, San Pedro",
//   "points_url":"https://raw.githubusercontent.com/fergo125/rsn-losentiste-web/master/data/point.json?token=AHj5HqwDq3KLJEAvpFzPJ2QzKO2Zq516ks5aeeXUwA%3D%3D"
// },
// {
//   "id":3,
//   "intensity": 2.5,
//   "color_earthquake":"green",
//   "timestamp":"35 minutos",
//   "location":"San José, San Pedro",
//   "points_url":"https://raw.githubusercontent.com/fergo125/rsn-losentiste-web/master/data/point.json?token=AHj5HqwDq3KLJEAvpFzPJ2QzKO2Zq516ks5aeeXUwA%3D%3D"
// },
// {
//   "id":4,
//   "intensity": 8.5,
//   "color_earthquake":"red",
//   "timestamp":"35 minutos",
//   "location":"San José, San Pedro",
//   "points_url":"https://raw.githubusercontent.com/fergo125/rsn-losentiste-web/master/data/point.json?token=AHj5HqwDq3KLJEAvpFzPJ2QzKO2Zq516ks5aeeXUwA%3D%3D"
// },
// {
//   "id":5,
//   "intensity": 4.5,
//   "color_earthquake":"orange",
//   "timestamp":"35 minutos",
//   "location":"San José, San Pedro",
//   "points_url":"https://raw.githubusercontent.com/fergo125/rsn-losentiste-web/master/data/point.json?token=AHj5HqwDq3KLJEAvpFzPJ2QzKO2Zq516ks5aeeXUwA%3D%3D"
// },
// {
//   "id":6,
//   "intensity": 3.5,
//   "color_earthquake":"green",
//   "timestamp":"35 minutos",
//   "location":"San José, San Pedro",
//   "points_url":"https://raw.githubusercontent.com/fergo125/rsn-losentiste-web/master/data/point.json?token=AHj5HqwDq3KLJEAvpFzPJ2QzKO2Zq516ks5aeeXUwA%3D%3D"
// }
// ];