angular.module('DemoApp').controller('ParentCtrl',
['$scope', function($scope) {
    $scope.name = 'John'
}]).controller('SonCtrl', ['$scope', function($scope){
    $scope.name = 'Sam'
}])