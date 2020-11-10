import { bd } from "./Datos.js";
import { Vehiculo, TIPO, Cliente, Tipo, Plaza,Ticket, Parking, } from "./Models.js";




var MotoM = new Vehiculo("0002",TIPO.MOTO);
var cliente = new Cliente("Paco",654654,5649,MotoM,4);
bd.listaClientes.push(cliente);

var nuevoCliente=[
    "Matricula de tu auto: ",
    "Nombre del usuario: ",
    "DNI del usuario: ",
    ];

var datosNuevoCliente=[];

function preguntar(i){
    process.stdout.write(nuevoCliente[i]);
}

process.stdin.on('data', function(data){
    datosNuevoCliente.push(data.toString());
    if(datosNuevoCliente.length < nuevoCliente.length){
        preguntar(datosNuevoCliente.length);  
    }else{
        process.exit();
    }
});

preguntar(0);





var matricula = datosNuevoCliente[0];
var tipo = bd.listaTipos[0];
var abonoPin = Math.random(1000, 9999);
var vehiculo =  new Vehiculo(matricula, tipo);
var plazaId = 4;

var nuevoCliente = new Cliente (datosNuevoCliente[1],datosNuevoCliente[2],abonoPin,vehiculo,plazaId);

//bd.listaClientes.push(nuevoCliente);
//console.log(bd.listaClientes.reverse()[0]);




