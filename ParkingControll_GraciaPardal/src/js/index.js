const TIPO = Object.freeze({
    MOTO:   "MOTO",
    COCHE:  "COCHE",
    CARABANA: "CARABANA"
});

class Tipo{
    constructor(nombre, cantida){
        this.nombre = nombre;
        this.cantida = cantida;
    }
}
class Vehiculo{
    constructor(matricula, Tipo) {
        this.matricula = matricula;
        this.Tipo = Tipo;
      }
}
class Plaza{
    constructor(id, tipo){
        this.id=id;
        this.tipo = tipo;
    }   
}
class Parking{
    constructor(Plaza){
        this.Plaza = Plaza;
    }
}

let coche = new Vehiculo(0000, TIPO.COCHE);
let tipoCoche = new Tipo (TIPO.COCHE, 20);
let plaza = new Plaza (100, tipoCoche);

console.log(plaza);


