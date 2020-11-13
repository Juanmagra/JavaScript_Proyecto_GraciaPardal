import { bd } from "./Datos.js";
import { Vehiculo, TIPO, Cliente, Tipo, Plaza,Ticket, Parking, } from "./Models.js";
import moment from 'moment';
import rl  from 'readline-sync';
import * as parking from './Parking.js'

export function listarPlazas(bd){
    var listaPlazas = bd.listaPLazas;
    listaPlazas.forEach(plaza => {
        var estado = plaza.estado?"Disponible":"Ocupada";
        var reservada = plaza.reservada?"Reservada":"No reservada"
        console.log(`Plaza id : ${plaza.id}\nPlaza tipo: ${plaza.tipo}\nPlaza estado: ${estado}\nPlaza reserva: ${reservada}\n`);
        
    });
}

export function totalCobros(bd){
    var cobroTotal;

    var listaTickets = bd.listaTickets;

    listaTickets.forEach(ticket=>{
        if(ticket.precioFinal!=0){
            cobroTotal=cobroTotal+ticket.precioFinal;
        }
        
    });

    return cobroTotal;
}

export function listaAbonados(bd){
    return bd.listaClientes;
}