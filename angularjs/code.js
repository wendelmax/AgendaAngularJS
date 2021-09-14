app = angular.module("listaTelefonica", []);
app.controller("listaTelefonicaCtrl", function ($scope) {
    $scope.titulo = "Lista Telefônica";

    $scope.contatos = [{ nome: "Alisson", telefone: "123456" },
    { nome: "Gabi", telefone: "987654" },
    { nome: "Gustavo", telefone: "564789" },
    { nome: "Pedro", telefone: "564789" }];

    $scope.operadoras = ["Vivo","Claro","Tim","Oi"];

    $scope.adicionarContato = function (item) {
        $scope.contatos.push(item);
        delete $scope.item; //deleta objeto do escopo
        document.querySelector('.in1').value = null;
        document.querySelector('.in2').value = null;
    }
});