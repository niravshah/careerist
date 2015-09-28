'use strict';
angular.module('myApp.view1', ['ngRoute']).config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.when('/view1', {
      templateUrl: 'view1/view1.html',
      controller: 'View1Ctrl'
    });
  }
]).controller('View1Ctrl', ['$scope',
  function($scope) {
    var profile = localStorage.getItem("ln");
    if(profile != null) {
      $scope.ln = profile;
    }else{
      $scope.ln = "Couldnt fetch profile form lS";
    }
  }
]);