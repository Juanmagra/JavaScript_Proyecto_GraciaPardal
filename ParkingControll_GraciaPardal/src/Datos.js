import { Vehiculo, TIPO, Cliente, Tipo, Plaza,Ticket, Parking, } from "./Models.js";
var tipoMoto = new Tipo (TIPO.MOTO, 5);
var tipoCarabana = new Tipo(TIPO.CARABANA, 3);
var tipoTurismo = new Tipo(TIPO.TURISMO, 10);
var listaTipos = [tipoMoto,tipoCarabana,tipoTurismo];
var listaPLazas = [];
var idGenerator= 0;
listaTipos.forEach((a)=>{
    var contador = 0;
    var i = listaTipos.indexOf(a);
    while(a.cantida>contador){
        var plaza = new Plaza (idGenerator, a.nombre, true);
        listaPLazas.push(plaza);
        idGenerator+=1;
        contador+=1;
    } 

});

var cocheJ = new Vehiculo("0000",TIPO.TURISMO);
var clienteJ = new Cliente("Juan Manuel",77865212,1234,cocheJ, 7);


var MotoM = new Vehiculo("0001",TIPO.MOTO);
var clienteM= new Cliente("Luis Miguel",54125212,9874,MotoM, 0);


var listaClientes=[clienteJ, clienteM];
var parking = new Parking(listaPLazas,listaClientes);


export class bbdd {
    constructor(listaClientes,listaTipos,listaPLazas,parking){
        this.listaClientes = listaClientes;
        this.listaTipos=listaTipos;
        this.listaPLazas = listaPLazas;
        this.parking = parking;

    }

}


export var bd = new bbdd(listaClientes,listaTipos,listaPLazas,parking, idGenerator);




