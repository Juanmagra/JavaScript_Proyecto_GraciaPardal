
export const TIPO = Object.freeze({
    MOTO:   "MOTO",
    TURISMO:  "TURISMO",
    CARABANA: "CARABANA"
});

export class Tipo{
    constructor(nombre, cantidad){
        var nombre = nombre;
        var cantidad = cantidad;
        this.getNombre = function() {return nombre;}
        this.getCantidad = function() {return cantidad;}
        this.setNombre = function(a) {nombre = a;}
        this.setCantidad = function(a) {cantidad = a;}

    }
}
export class Vehiculo{
    constructor(matricula, tipo) {
        var matricula = matricula;
        var tipo = tipo;
        this.getMatricula = function() {return matricula;}
        this.getTipo = function() {return tipo;}

      }
}

export class Plaza{
    constructor(id, tipo, estado){
        var id = id;
        var tipo = tipo;
        var estado = estado;
        this.getId = function() {return id;}
        this.getTipo = function() {return tipo;}
        this.getEstado = function() {return estado;}

    }   
}
export class Parking{
    constructor(listaPlazas, clientes){
        var listaPlazas = listaPlazas;
        var clientes = clientes;
        this.getListaPlazas = function() {return listaPlazas;}
        this.getClientes = function() {return clientes;}
    }
}
export class Ticket{
    constructor(id,matricula, entrada, salida, pin, plazaId){
        var id = id;
        var matricula=matricula;
        var entrada = entrada;
        var salida = salida;
        var pin = pin;
        var plazaId = plazaId;
        this.getId = function() {return id;}
        this.getMatricula = function() {return matricula;}
        this.getEntrada = function() {return entrada;}
        this.getSalida = function() {return salida;}
        this.getPin = function() {return pin;}
        this.getPlazaId = function() {return plazaId;}

    }
}
export class Cliente{
    constructor(nombre, dni, abonoPin, vehiculo, plazaId){
        var nombre = nombre;
        var dni = dni;
        var abonoPin = abonoPin;
        var vehiculo = vehiculo;
        var plazaId = plazaId;
        this.getNombre = function() {return nombre;}
        this.getDni = function() {return dni;}
        this.getAbonoPin = function() {return abonoPin;}
        this.getVehiculo = function() {return vehiculo;}
        this.getPlazaId = function() {return plazaId;}
    }
}




