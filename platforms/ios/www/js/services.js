angular.module('starter.services', [])

.factory('StationsSvc', function($q, $http, $ionicLoading, $timeout) {
    var stationsSvc = {};

    var getNetworkStatus = function() {
        if (navigator.connection && navigator.connection.type) {
            if (navigator.connection.type === Connection.UNKNOWN ||
                navigator.connection.type === Connection.NONE) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    };

    var fetchLocation = function() {
        $ionicLoading.show({
            template: '<i class="icon ion-loading-c"></i>'
        });
        var deferred = $q.defer();

        $timeout(function() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    $ionicLoading.hide();
                    deferred.resolve(position);
                }, function(error) {
                    $ionicLoading.hide();
                    deferred.reject("COULDNT GET LOCATION");
                }, {
                    enableHighAccuracy: false,
                    // maximumAge: 1200000,
                    timeout: 10 * 1000,
                    // frequency: 5000
                });
            } else {
                $ionicLoading.hide();
                deferred.reject("NO NAVIGATOR");
            }
        }, 500);


        return deferred.promise;
    };

    stationsSvc.getStations = function() {
        console.log("CAME TO GET STATIONS");
        var deferred = $q.defer();

        // if (getNetworkStatus()) {
            fetchLocation().then(function(position) {
                console.log(position);
                $http.get('http://localhost:3000/api/v1/stations/' + position.coords.latitude + '/' + -position.coords.longitude, {
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
            }, function(error) {
                console.log("NO LOCATION " + error)
                deferred.reject("location_error");
            });
        // } else {
        //     console.log("NO NETWORK")

        //     deferred.reject("network_error");
        // }     

        return deferred.promise;
    };

    return stationsSvc;
});
