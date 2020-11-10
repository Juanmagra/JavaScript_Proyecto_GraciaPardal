
export const TIPO = Object.freeze({
    MOTO:   "MOTO",
    TURISMO:  "TURISMO",
    CARABANA: "CARABANA"
});

export class Tipo{
    constructor(nombre, cantida){
        this.nombre = nombre;
        this.cantida = cantida;
    }
}
export class Vehiculo{
    constructor(matricula, tipo) {
        this.matricula = matricula;
        this.tipo = tipo;
      }
}

export class Plaza{
    constructor(id, tipo, estado){
        this.id=id;
        this.tipo = tipo;
        this.estado = estado;
    }   
}
export class Parking{
    constructor(listaPlazas, listaclientes){
        this.listaPlazas = listaPlazas;
        this.listaclientes = listaclientes;
    }
}
export class Ticket{
    constructor(id,matricula, entrada, salida, pin, plazaId){
        this.id = id;
        this.matricula=matricula;
        this.entrada = entrada;
        this.salida = salida;
        this.pin = pin;
        this.plazaId = plazaId;
    }
}
export class Cliente{
    constructor(nombre, dni, abonoPin, vehiculo, plazaId){
        this.nombre = nombre;
        this.dni = dni;
        this.abonoPin = abonoPin;
        this.vehiculo = vehiculo;
        this.plazaId = plazaId;
    }
}




