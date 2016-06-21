/**
 * Created by zb on 2016/6/21.
 */
var myModule=angular.module("MyModule",[]);
myModule.directive("hello",function(){
    return{
        restrict:"E",
        template:"<div>Hi everyone!</div>",
        replace:true
    }
});