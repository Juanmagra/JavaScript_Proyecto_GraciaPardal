import { bd } from "./Datos.js";
import { Cliente, Vehiculo } from "./Models.js";
import rl  from 'readline-sync';
import moment from 'moment';


const precioTurismo = 0.12;
const precioMoto = 0.08;
const precioCarabana = 0.45;

export function calcularCobro(ticketEntrada){
    var cobro;
    var entrada = ticketEntrada.entrada;
    var salida = ticketEntrada.salida;
    var diff=Math.abs(new Date(salida)) - Math.abs(new Date (entrada));
    console.log(diff);
    var minutes = Math.floor((diff/1000)/60);
    console.log(minutes);
    if(bd.plazasPorId(ticketEntrada.plazaId).tipo == "MOTO"){
        cobro = minutes*precioMoto;
    }
    if(bd.plazasPorId(ticketEntrada.plazaId).tipo == "TURISMO"){
        cobro = minutes * precioTurismo;
    }
    if(bd.plazasPorId(ticketEntrada.plazaId).tipo == "CARABANA"){
        cobro = minutes * precioCarabana;
    }
    return cobro;
}

export function crearCliente(bd){

        console.table(bd.listaTipos);
        var tipoPlaza= rl.question("Introduzca el nombre del tipo de su vehiculo: ");
        var fechaAlta = new Date (moment().format());
        var fechaExp= new Date();
        var nombre= rl.question("Introduzca su nombre: ");
        var dni= rl.question("Introduzca su DNI: ");
        var abonoPin =Math.floor( Math.random() * (9999 - 1000) + 1000);
        var matricula= rl.question("Introduzca matricula del vehiculo: ");
        var vehiculo = new Vehiculo(matricula,tipoPlaza.toUpperCase());
        var plazaId;
        var hayPlaza;
        var cliente;

        var plazasDisponibles = bd.todasLasPlazasPorTipo(tipoPlaza.toUpperCase());
        plazasDisponibles.forEach(plazaL=>{
            if(!plazaL.reservada && plazaL.estado){
            hayPlaza = true;
            plazaId = plazaL.id;
        }
    });
    if (hayPlaza && plazaId!=undefined){
        bd.plazasPorId(plazaId).reservada=true;
        var correcto = false;
        while(!correcto){
        var tipoBono = rl.question("Introduzca el tipo de abono:\n1. Mensual\n2. Trimestral\n3. Semestral\n4. Anual\n");
        switch (tipoBono) {
            case "1":
                fechaExp.setDate(fechaAlta.getDate() + 30);
                correcto=true;
                break;
            case "2":
                fechaExp.setDate(fechaAlta.getDate() + 90);
                correcto=true;
                break;
            case "3":
                fechaExp.setDate(fechaAlta.getDate() + 180);
                correcto=true;
                break;
            case "4":
                fechaExp.setDate(fechaAlta.getDate() + 365);
                correcto=true;
                break;
            default:
                console.log("Incorrecto");
                correcto=false;
                break;
          }
        }
        var index=bd.listaTipos.indexOf(bd.encontrarTipoPorNombre(tipoPlaza.toUpperCase()))
        bd.listaTipos[index].cantidaDisponible-=1;
        bd.listaTipos[bd.listaTipos.indexOf(bd.encontrarTipoPorNombre(tipoPlaza.toUpperCase()))].cantidadReservada+=1;
        cliente = new Cliente(nombre,dni,abonoPin,vehiculo,plazaId,fechaAlta,fechaExp);
        bd.listaClientes.push(cliente);
        }else{
            cliente = undefined;
        }
   
    return cliente;
}
