'use strict';
angular.module('losentisteApp.earthquakes-list')
    .factory('earthquakesData',['$http','$log',function($http,$log){
        var service = {};
        
        const request = {
            method:'GET',
            url: "http://163.178.105.69:2004/earthquake/",
        };
        $http.defaults.headers.common.Authorization ='JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjozLCJ1c2VybmFtZSI6ImVhcnRocXVha2VfcmVwb3J0ZXIiLCJleHAiOjE1MTk0NTMwMjMsImVtYWlsIjoiIn0.zElYRxsCb490Dl9SFV4dlmw3EcjnCtBsJXDQL_blJJA';
        service.getData = function(){
            $log.info($http.defaults);
            $http(request).then(
                function(response){
                    $log.info(response);
                },
                function(response){
                    $log.error(response);
                }
            );
        };
        return service;
    }]);