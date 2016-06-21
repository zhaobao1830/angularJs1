/**
 * Created by zb on 2016/6/21.
 */
//var myModule=angular.module("HelloAnguler",[]);
//myModule.controller("helloAngular",function($scope){
//    $scope.greeting={
//        text:"hello"
//    }
//})

var myModule=angular.module("HelloAnguler",[]);
myModule.controller("helloAngular",['$scope',function helloAngular($scope){
    $scope.greeting={
        text:"hello"
    }}]
)