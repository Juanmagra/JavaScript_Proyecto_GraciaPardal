
export const TIPO = Object.freeze({
    MOTO:   "MOTO",
    TURISMO:  "TURISMO",
    CARABANA: "CARABANA"
});

export class Tipo{
    constructor(nombre, cantidaDisponible, cantidadReservada, cantidadUsada){
        this.nombre = nombre;
        this.cantidaDisponible = cantidaDisponible;
        this.cantidadReservada = cantidadReservada;
        this.cantidadUsada = cantidadUsada;
    }
}
export class Vehiculo{
    constructor(matricula, tipo) {
        this.matricula = matricula;
        this.tipo = tipo;
      }
}

export class Plaza{
    constructor(id, tipo, estado, reservada){
        this.id=id;
        this.tipo = tipo;
        this.estado = estado;
        this.reservada = reservada;
    }   
}
export class Parking{
    constructor(listaPlazas, listaclientes){
        this.listaPlazas = listaPlazas;
        this.listaclientes = listaclientes;
    }
}
export class Ticket{
    constructor(id,matricula, entrada, salida, pin, plazaId,precioFinal,cliente){
        this.id = id;
        this.matricula=matricula;
        this.entrada = entrada;
        this.salida = salida;
        this.pin = pin;
        this.plazaId = plazaId;
        this.precioFinal=precioFinal;
        this.cliente = cliente;

    }
}
export class Cliente{
    constructor(nombre, dni, abonoPin, vehiculo, plazaId,fechaAlta, fechaExpiracion){
        this.nombre = nombre;
        this.dni = dni;
        this.abonoPin = abonoPin;
        this.vehiculo = vehiculo;
        this.plazaId = plazaId;
        this.fechaAlta = fechaAlta;
        this.fechaExpiracion = fechaExpiracion;
    }
}




