angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope, StationsSvc) {
  $scope.items = StationsSvc.stations;

})
