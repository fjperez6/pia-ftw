function AppController ($scope, $sce) {
  $scope.setActive = function (type) {
    $scope.homeActive = '';
    $scope.experienceActive = '';
    $scope.educationActive = '';

    $scope[type + 'Active'] = 'active';
  }
  
  $scope.videoUrl1 = $sce.trustAsResourceUrl("http://www.youtube.com/embed/GwBAKr2isu4?autoplay=1");
  $scope.videoUrl2 = $sce.trustAsResourceUrl("http://www.youtube.com/embed/wXskbhSA8MU?autoplay=1");

  $scope.setActiveVideo = function (type) {
    $scope.video1Active = '';
    $scope.video2Active = '';
    $scope.video3Active = '';

    $scope[type + 'Active'] = 'active';
  }
}
