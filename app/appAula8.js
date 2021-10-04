var app = angular.module("aula8", ["ngRoute"]);
app.run(function($rootScope){
    $rootScope.nome = "Jackson";
    $rootScope.blue = "blue";
    $rootScope.red = "red";
})