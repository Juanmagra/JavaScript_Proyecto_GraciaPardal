import { bd } from "./Datos.js";
import { Vehiculo, TIPO, Cliente, Tipo, Plaza,Ticket, Parking, } from "./Models.js";
import moment from 'moment';
import rl  from 'readline-sync';
import * as user from  './User.js';
import * as parking from  './Parking.js';

var ejecucion=true;

while(true){

    var admin = rl.question("Bienvenido a DamParking!. ¿Es usted usuario o administrador?\n1. Usuario\n2. Administrador\n");
    switch (admin) {
        //Usuario
        case "1":
            var opcion = rl.question("¿Que desea hacer?\n1. Registrarse\n2. Depositar sinendo cliente\n3. Retirar siendo clinte\n4. Depositar sin ser cliente\n5. Retirar sin ser cliente\n ");
                switch(opcion){
                    //Registrarse
                    case "1":
                        var nuevoCliente = parking.crearCliente(bd);
                        if(nuevoCliente==undefined){
                        console.log("Lo sentimos pero no puede registrarse con ese tipo de plaza.");
                        }else{
                        console.log("Felicidades! Ya es usted usuario de este parking.");
                        console.log(nuevoCliente);
                        }
                        break;
                    //Depositar con cliente
                    case "2":
                        var nuevoTicketCliente = user.depositarConCliente(bd);
                        if(nuevoTicketCliente == undefined){
                        console.log("Ha ocurrido un error. Esa plaza ya esta ocupada.");
                        }else{
                        console.log("Proceso exitoso. Su ticket:\n");
                        console.log(nuevoTicketCliente);
                        }
                        break;
                    //Retirar con cliente
                    case "3":
                        var nuevoTicketClienteSalida = user.retirarVehiculoConCliente(bd);

                        if(nuevoTicketClienteSalida==undefined){
                            console.log("Ha ocurrido un error. Esa plaza no esta ocupada.");
                        }else{
                            console.log("Proceso exitoso. Su ticket:\n");
                            console.log(nuevoTicketClienteSalida);
                        }
                        break;
                    //Depositar sin cliente
                    case "4":
                        var tickeEntrada = user.depositarSinCliente(bd);
                        if(tickeEntrada.plazaId==undefined){
                            console.log("Lo sentimos pero no tenemos ese tipo de plaza ahora mismo\n"+
                            "Intentelo mas tarde.")
                        }else{
                            console.log("Su ticket gracias: ");
                            console.log(tickeEntrada);
                        }
                        break;
                    //Retirar sin cliente
                    case "5":
                        var ticketSalida = user.retirarVehiculoSinCliente(bd);
                        console.log("El total de su estancia en el parking es de : "+ ticketSalida.precioFinal+"€");
                        console.log("Su ticket: ");
                        console.log(ticketSalida);
                        console.log("Gracias vuelva pronto.");
                        break;
                    default:
                        console.log("Opcion no valida.");
                        break;
                      }
            break;
        //Admin
        case "2":


            break;

        default:
            console.log("Opcion no valida.");
            break;
        }
                        
}

        
        
         
/*
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
*/