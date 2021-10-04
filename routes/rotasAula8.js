app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templateUrl : "pages/default.html"
    })
    .when("/banana",{
        templateUrl : "pages/banana"
    })
    .when("/jackson", {
        templateUrl : "pages/jackson.html",
        controller : "profCtrl"
    })
});