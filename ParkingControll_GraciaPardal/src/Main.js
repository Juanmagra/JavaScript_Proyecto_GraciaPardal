import { bbdd } from "./Datos.js";
import { bd } from "./Datos.js";
import { Vehiculo, TIPO, Cliente, Tipo, Plaza,Ticket, Parking, } from "./Models.js";



console.log(bd.listaClientes[0].vehiculo);
console.log(bd);
console.log(bd.parking.Plaza[0]);

var MotoM = new Vehiculo("0002",TIPO.MOTO);
var cliente = new Cliente("Paco",654654,5649,MotoM,4);
bd.listaClientes.push(cliente);

console.log(bd.listaClientes);