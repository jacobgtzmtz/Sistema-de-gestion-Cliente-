/**
 * Created by jacob on 12/09/15.
 */
(function(){

app.controller ("expedientes", function(){
    this.pacientes = pacientes;
})

var pacientes =[
{
    "cPaciente":1,
    "nombre":"Jacob",
    "apaterno":"Gutiérrez",
    "amaterno":"Martínez",
    "cp":"79650",
    "calleYNum":"Colón 910",
    "colonia":"Los Llanitos",
    "munDeleg":"Ciudad Fernández",
    "estado":"SanLuís Potosí",
    "lada":"487",
    "telefono1":"1234567",
    "telefono2":"7654321",
    "fNac":"16/03/80",
    "edad":"35",
    "RFC":"gumj800316t43",
    "expediente":"000-000-001",
    "color":"#E6E6E6",
    "CURP":"gumj800316t43",
    "famResp":"Ruth Martínez",
    "servicio":"Consulta externa",
    "solicitado":"Dr. Gustavo Jasso"
},
{
    "cPaciente":2,
    "nombre":"Ruth",
    "apaterno":"Martínez",
    "amaterno":"Sánchez",
    "cp":"79650",
    "calleYNum":"Colón 910",
    "colonia":"Los Llanitos",
    "munDeleg":"Ciudad Fernández",
    "estado":"SanLuís Potosí",
    "lada":"487",
    "telefono1":"9876543",
    "telefono2":"1234567",
    "fNac":"07/07/81",
    "edad":"34",
    "RFC":"masr810707o16",
    "expediente":"000-000-002",
    "color":"#E6E6E6",
    "CURP":"masr810707o16",
    "famResp":"Jacob Gutiérrez",
    "servicio":"Urgencias",
    "solicitado":"Dra. Belem Martínez"
}];
})();

