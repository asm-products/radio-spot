angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope, StationsSvc) {
    StationsSvc.getStations().then(function(data) {
	    $scope.items = data.info.stations;
    }, function(error) {
    	console.log(error)
    });
})
