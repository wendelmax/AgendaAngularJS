app = angular.module("listaTelefonica", []);

app.controller("listaTelefonicaCtrl", function ($scope) {
    $scope.titulo = "Lista Telefônica";

    $scope.contatos = [];

    $scope.operadoras = ["Vivo","Claro","Tim","Oi"];

    $scope.adicionarContato = function (item) {
        $scope.contatos.push(item);
        delete $scope.item; //deleta objeto do escopo
    }
});