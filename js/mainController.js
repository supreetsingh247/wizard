/**
 * Created by z001lfc on 10/21/15.
 */
(function () {
var MyApp = angular.module('MyApp',["ngRoute","ngMaterial","ngMessages"]);
var mainController=function($scope,$http) {
    $scope.link1Show=true;
    $scope.values={
        'conditionText':'',
    }
};
MyApp.controller("mainController",["$scope","$http",mainController])
}());


