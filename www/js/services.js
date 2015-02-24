angular.module('starter.services', [])

.factory('StationsSvc', function($q, $http) {
    var stationsSvc = {};

    stationsSvc.getStations = function() {
        console.log("CAME TO GET STATIONS");
        var deferred = $q.defer();

        $http.get('http://localhost:3000/api/v1/stations/37.368889/122.083889', {
            timeout: 60000,
            cache: false,
            headers: {
                'Accept': 'application/json',
                'Pragma': 'no-cache'
            }
        }).success(function(data) {
            console.log("CAME TO GET STATIONS SUCCESS");
            deferred.resolve(data);
        }).error(function(error) {
            console.log("CAME TO GET STATIONS ERROR");
            deferred.reject(error);
        });        

        return deferred.promise;
    };

    return stationsSvc;
});
