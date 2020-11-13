import { Vehiculo, TIPO, Cliente, Tipo, Plaza,Ticket, Parking, } from "./Models.js";
import moment from 'moment';
var tipoMoto = new Tipo (TIPO.MOTO, 5,0,0);
var tipoCarabana = new Tipo(TIPO.CARABANA, 3,0,0);
var tipoTurismo = new Tipo(TIPO.TURISMO, 10,0,0);
var listaTipos = [tipoMoto,tipoCarabana,tipoTurismo];
var listaPLazas = [];
var listaTickets= [];
var listaClientes=[];
var idGenerator= 0;
listaTipos.forEach((a)=>{
    var contador = 0;
    var i = listaTipos.indexOf(a);
    while(a.cantidaDisponible>contador){
        var plaza = new Plaza (idGenerator, a.nombre, true,false);
        listaPLazas.push(plaza);
        idGenerator+=1;
        contador+=1;
    }
});

var parking = new Parking(listaPLazas,listaClientes);

export class bbdd {
    constructor(listaClientes,listaTipos,listaPLazas,listaTickets,parking,idGenerator){
        this.listaClientes = listaClientes;
        this.listaTipos=listaTipos;
        this.listaPLazas = listaPLazas;
        this.listaTickets = listaTickets;
        this.parking = parking;
        this.idGenerator = idGenerator;


    }
    aumentarId(){
        this.idGenerator+=1;
        return true;
    }

    buscarClientePorNombre(nombre){
        var encontrado = new Cliente();
        this.listaClientes.forEach(cliente => {
            if(cliente.nombre ==nombre ){
                encontrado = cliente;
            }
        });
        return encontrado;
    }

    buscarTicketPorPin(pin){
        var encontrado = new Ticket();
        this.listaTickets.forEach(ticket=>{
            if(ticket.pin==pin){
                encontrado=ticket;
            }
        });
        return encontrado;
    }
    encontrarClientePorDni(dni){
        var encontrado = new Cliente();
        this.listaClientes.forEach(cliente=>{
            if(cliente.dni==dni){
                encontrado = cliente;
            }
        });
        return encontrado;
    }

    encontrarTipoPorNombre(tipoNombre){
        var encontrado = new Tipo();
        this.listaTipos.forEach(tipo=>{
            if(tipo.nombre ==tipoNombre){
                encontrado = tipo;
            }
        });
        return encontrado;

    }

    todasLasPlazasPorTipo(tipoPlaza){
        var listaPlazasTipo = [];
        this.listaPLazas.forEach(plaza=>{
            if(plaza.tipo==tipoPlaza){
                listaPlazasTipo.push(plaza);
            }
        });
        return listaPlazasTipo;

    }
    
    plazasPorId(idPlaza){
        var encontrado;
        this.listaPLazas.forEach(plaza=>{
            if(plaza.id==idPlaza){
                encontrado= plaza;
            }
        });
        return encontrado;

    }

}



export var bd = new bbdd(listaClientes, listaTipos, listaPLazas, listaTickets, parking, idGenerator);




