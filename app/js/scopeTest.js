/**
 * Created by zb on 2016/6/22.
 */
var app=angular.module("MyApp",[])
    app.controller("EventController",function($scope){
        $scope.count=0;
        $scope.$on('MyEvent',function(){
            $scope.count++;
        })
    })