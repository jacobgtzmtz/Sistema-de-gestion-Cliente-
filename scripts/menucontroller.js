/**
 * Created by jacob on 11/09/15.
 */
var app = angular.module("gestor",[])

app.controller ("menu", function($scope){
    $scope.archivo = [
        {
            "nombre":"Crear expediente",
            "url":"crearexpediente.html"
        },
        {
            "nombre":"Imprimir expediente",
            "url":"#"
        },
        {
            "nombre":"Buscar expediente",
            "url":"#"
        },
        {
            "nombre":"Historial expediente",
            "url":"#"
        },
        {
            "nombre":"Expedientes prestados",
            "url":"#"
        },
        {
            "nombre":"Prestar expediente",
            "url":"#"
        },
        {
            "nombre":"Regresar expediente",
            "url":"#"
        },
        {
            "nombre":"Depurar expediente",
            "url":"#"
        }]

    $scope.administracion = [
        {
            "nombre":"Registrar consulta externa",
            "url":"#"
        },
        {
            "nombre":"Registrar consulta urgencia",
            "url":"#"
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
