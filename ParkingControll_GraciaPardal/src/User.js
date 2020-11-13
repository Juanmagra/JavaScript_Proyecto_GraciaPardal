import { bd } from "./Datos.js";
import { Vehiculo, TIPO, Cliente, Tipo, Plaza,Ticket, Parking, } from "./Models.js";
import moment from 'moment';
import rl  from 'readline-sync';
import * as parking from './Parking.js'




export function depositarSinCliente(bd){
    var matricula;
    var tipo;
    var plaza;
    var plazasDisponibles;
    var hayPlaza;
    var ticket;
    var fechaEntrada = new Date();
    var idPlaza;
    var pin;
    matricula = rl.question("Introduzca el numero de matricula: ");
    console.table(bd.listaTipos);
    var selec = rl.question("Introduzca el nombre de su tipo: ");

    //Definimos un objeto tipo para la busqueda de las plazas con ese tipo.
    tipo = bd.encontrarTipoPorNombre(selec.toUpperCase());
    //Definimos la lista de plazas con ese tipo
    plazasDisponibles = bd.todasLasPlazasPorTipo(tipo.nombre);
    plazasDisponibles.forEach(plazaL=>{
        //Si la plaza esta NoReservada y esta libre, asignamos su id. 
        //Y garantizamos que hay plaza disponible.
        if(!plazaL.reservada && plazaL.estado){
            plaza = plazaL;
            hayPlaza = true;
        }
    });

    if (hayPlaza){
        //Disminuimo en uno la cantidad de plazas disponibles de ese tipo.
        bd.listaTipos[bd.listaTipos.indexOf(tipo)].cantidaDisponible=bd.listaTipos[bd.listaTipos.indexOf(tipo)].cantidaDisponible-1;
        //Aumentamos en uno la cantidad de plazas usadas de ese tipo.
        bd.listaTipos[bd.listaTipos.indexOf(tipo)].cantidadUsada=bd.listaTipos[bd.listaTipos.indexOf(tipo)].cantidadUsada+1;
        idPlaza=plaza.id;
        fechaEntrada= moment().format();
        //Cambiamos el estado de esa plaza a ocupada.
        bd.plazasPorId(idPlaza).estado = false;
    }

    pin =Math.floor( Math.random() * (9999 - 0) + 0);

    ticket = new Ticket(bd.idGenerator, matricula,fechaEntrada,0,pin,idPlaza,0,undefined);
    //Si el idPlaza es undefined significa que no hay plaza disponible.
    if(idPlaza!=undefined){
    bd.listaTickets.push(ticket);
    }

    return ticket;


}


export function retirarVehiculoSinCliente(bd){

    var tipoR;
    var matricula;
    matricula = rl.question("Introduzca el numero de matricula: ");

    var pin;
    pin = rl.question("Introduzca el pin del ticket: ");

    var idPlaza;
    idPlaza= rl.question("Introduzca el id de la plaza asignada: ");

    var ticketEntrada = bd.buscarTicketPorPin(pin);
    ticketEntrada.salida = moment().format();
    ticketEntrada.precioFinal = parking.calcularCobro(ticketEntrada);

    var plazaR = bd.plazasPorId(idPlaza);

    tipoR = bd.encontrarTipoPorNombre(plazaR.tipo);

    bd.listaTipos[bd.listaTipos.indexOf(tipoR)].cantidaDisponible=bd.listaTipos[bd.listaTipos.indexOf(tipoR)].cantidaDisponible+1;
    bd.listaTipos[bd.listaTipos.indexOf(tipoR)].cantidadUsada=bd.listaTipos[bd.listaTipos.indexOf(tipoR)].cantidadUsada-1;


    return ticketEntrada;
}

export function depositarConCliente(bd){

    var matricula= rl.question("Introduzca la matricula de su vehiculo: ");
    var dni= rl.question("Introduzca su DNI: ");
    var cliente = bd.encontrarClientePorDni(dni);

    var plazaId = cliente.plazaId;
    var plaza = bd.plazasPorId(plazaId);

    if(plaza.estado==true){
        var tipo = bd.encontrarTipoPorNombre(plaza.tipo);
        bd.listaTipos[bd.listaTipos.indexOf(tipo)].cantidadUsada+=1;

        var idTicket = bd.idGenerator;
        bd.aumentarId();
        var fechaEntrada = new Date();
        var fechaSalida = 0;
        var pin = cliente.abonoPin;
        var precioFinal = 0;

        var nuevoTicket = new Ticket (idTicket,matricula,fechaEntrada,fechaSalida,pin,
            plazaId,precioFinal,cliente);

        plaza.estado=false;

        bd.listaTickets.push(nuevoTicket);
    }else{
        nuevoTicket = undefined;
    }

    return nuevoTicket;

}

export function retirarVehiculoConCliente(bd){

    var matricula = rl.question("Introduzca el numero de matricula: ");
    var idPlaza = rl.question("Introduzca el ID de su plaza: ");
    var pin = rl.question("Introduzca el pin del ticket: ");
    var tipo;
    var plaza = bd.plazasPorId(idPlaza);


    if(plaza.estado==false){

    var ticketEntrada = bd.buscarTicketPorPin(pin);
    ticketEntrada.salida = moment().format();
    ticketEntrada.precioFinal = 0;
    tipo = bd.encontrarTipoPorNombre(plaza.tipo);
    bd.listaTipos[bd.listaTipos.indexOf(tipo)].cantidadUsada-=1;
    plaza.estado = true;
    }
    return ticketEntrada;
}
