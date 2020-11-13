import { bd } from "./Datos.js";
import { Vehiculo, TIPO, Cliente, Tipo, Plaza,Ticket, Parking, } from "./Models.js";
import moment from 'moment';
import rl  from 'readline-sync';
import * as user from  './User.js';
import * as parking from  './Parking.js';

//bucle para probar funcionalidades
while(false){
}
  
//Registrar un nuevo cliente
    var nuevoCliente = parking.crearCliente(bd);
    if(nuevoCliente==undefined){
    console.log("Lo sentimos pero no puede registrarse con ese tipo de plaza.")
    }else{
    console.log("Felicidades! Ya es usted usuario de este parking.")
    console.log(nuevoCliente);
    }

//Depositar un coche con cliente
    var nuevoTicketCliente = user.depositarConCliente(bd);

    if(nuevoTicketCliente == undefined){
    console.log("Ha ocurrido un error. Esa plaza ya esta ocupada.")
    }else{
    console.log("Proceso exitoso. Su ticket:\n")
    console.log(nuevoTicketCliente);
    }

//Retirar un coche con cliente
    var nuevoTicketClienteSalida = user.retirarVehiculoConCliente(bd);

    if(nuevoTicketClienteSalida==undefined){
        console.log("Ha ocurrido un error. Esa plaza no esta ocupada.")
    }else{
        console.log("Proceso exitoso. Su ticket:\n")
        console.log(nuevoTicketClienteSalida);
    }

//Depositar un vehiculo sin cliente
    var tickeEntrada = user.depositarSinCliente(bd);
    if(tickeEntrada.plazaId==undefined){
        console.log("Lo sentimos pero no tenemos ese tipo de plaza ahora mismo\n"+
        "Intentelo mas tarde.")
    }else{
        console.log("Su ticket gracias: ");
        console.log(tickeEntrada);
    }

//Retirar un coche sin ser cliente;
    var ticketSalida = user.retirarVehiculoSinCliente(bd);
    console.log("El total de su estancia en el parking es de : "+ ticketSalida.precioFinal+"€");
    console.log("Su ticket: ");
    console.log(ticketSalida);
    console.log("Gracias vuelva pronto.");
