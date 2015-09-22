/**
 * Created by jacob on 11/09/15.
 */
var app = angular.module("gestor",[])

app.controller ("menu", function($scope){
    $scope.archivo = [
        {
            "nombre":"Expedientes",
            "url":"crearexpediente.html"
        },
        {
            "nombre":"Prestar expediente",
            "url":"prestarexpediente.html"
        },
        {
            "nombre":"Expedientes prestados",
            "url":"expedientesprestados.html"
        },
        {
            "nombre":"Depurar expedientes",
            "url":"#"
        }]

    $scope.administracion = [
        {
            "nombre":"Registrar consulta externa",
            "url":"registrarconsultaexterna.html"
        },
        {
            "nombre":"Registrar consulta urgencia",
            "url":"registrarconsultaurgencias.html"
        },
        {
            "nombre":"Imprimir hoja SIS",
            "url":"#"
        },
        {
            "nombre":"Buscar camas",
            "url":"#"
        },
        {
            "nombre":"Reasignar cama",
            "url":"#"
        },
        {
            "nombre":"Imprimir censo",
            "url":"#"
        },
        {
            "nombre":"Listar paciente y estado de salud",
            "url":"#"
        }]
})
