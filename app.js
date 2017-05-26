angular.module('myFirstApp',[])
.factory('personService', function(){
    var person = {}
    person.printName = function(firstName,lastName){
        return firstName + ' ' + lastName
    }
    return person;
})
.controller('myController', function($scope,personService) {
    $scope.firstName = 'Dev';
    $scope.lastName = 'Roy';

    // $scope.printName = function () {return personService.printName($scope.firstName,$scope.lastName)}
}); 