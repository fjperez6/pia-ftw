  var piaApp = angular.module('piaApp', [
    'ngRoute'
  ]);

  piaApp.config(['$routeProvider',
    function($routeProvider) {
      $routeProvider.
        when('/', {
          templateUrl: 'partials/videoPlayer1.html',
          controller: function($scope) {
            $scope.setActive('home');
            $scope.setActiveVideo('video1');
        }}).
        when('/demos/video1', {
          templateUrl: 'partials/videoPlayer1.html',
          controller: function($scope) {
            $scope.setActive('home');
            $scope.setActiveVideo('video1');
        }}).
        when('/demos/video2', {
          templateUrl: 'partials/videoPlayer2.html',
          controller: function($scope) {
            $scope.setActive('home');
            $scope.setActiveVideo('video2');
        }}).
        when('/experience', {
          templateUrl: 'partials/experience.html',
          controller: function($scope) {
            $scope.setActive('experience');
        }}).
        when('/education', {
          templateUrl: 'partials/education.html',
          controller: function($scope) {
            $scope.setActive('education');
        }}).
        otherwise({
          redirectTo: '/'
        });
    }]);
