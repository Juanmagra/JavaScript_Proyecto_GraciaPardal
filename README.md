# ParkingControll

En este primer proyecto de JavaScript se intenta diseñar la gestion de un parking. La zona de los usuarios que permite: registrarse, depositar un vehiculo siendo o no cliente y retirar un vehiculo siendo o no cliente. Y la zona del admin, que permite revisar la lista de clientes, registrar a un cliente, revisar el total de cobros del parking y ver el estado de todas las plazas con todos sus datos.


## Archivos del proyecto 📋

Antes de ejecutar el proyecto a lo loco vamos a explicar por encima que contiene cada archivo del proyecto. Más adelante explicaremos a fondo cada archivo y sus funciones.
Para empezar tendriamos el archivo "Models.js" en este archivo se encuentran todas las clases necesarias. Seguimos y tenemos el archivo "Datos.js", se podria decir que este archivo funciona como base de datos donde se consultaran y guardaran todos los datos. Los archivos "Admin.js", "User.js" y "Parking.js" son donde se encuentra el 90% de la logica de negocio, con las funciones para ejecutar el programa.
Por ultimo y el archivo que se debe ejecutar para arrancar el programa, en el archivo "Main.js" se encuentra el menu y se llaman a todas las funciones del proyecto.


## Arrancamos el proyecto 🔧

Lo primero es lo primero, abre el proyecto que se encuentra dentro del repositorio. Si estas en una terminal prueba con: 
```
code .
```
Una vez abierto necesitaremos instalar el paquete "/node_modules", este directorio se ignora en la subida por su gran tamaño. Para instalarlo solo necesitamos ejecutar:
```
npm i
```
Ya solo falta entrar en la carpeta "src/" y ejecutar el comando:
```
node Main.js
```
Si todo ha salido bien, en la consola ya nos estara dando la bienvenida y preguntando nuestro rol.


## Ejecucion normal 🚀

**Se recomienda seguir los siguientes pasos para generar datos. La base de datos se encuentra solo con la lista de plazas y los tipos.**

A continuación le daremos una guía de pasos para probar el proyecto y comprobar todas sus funcionalidades.
 1. Como usuario no registrado, depositaremos dos vehiculos.
 2. Registraremos los uruarios necesarios para ocupar un tipo de plaza.
 *  En la base de datos "Datos.js" podremos modificar este numero para facilitar este paso.
 ```
 var tipoCarabana = new Tipo(TIPO.CARABANA,3,0,0); -> var tipoCarabana = new Tipo(TIPO.CARABANA,1,0,0);
 ```
 3. A partir de aqui, podemos retirar los vechiculos para sacar los tickets, depositar vehiculos como cliente, probar errores de falta de plazas al crear cliente o al querer depositar un tipo de vehiculo, retirar coches que no estan, etc.
 4. Ya solo faltaria comprobar las funciones de admin.


## Archivo por archivo 📖

### Models.js 📄
Aqui encontramos todas las clases models de nuestro proyecto:
* **const TIPO:** Un diccionario usado para asignar el valor y eliminar errores gramaticales.
* **Class Tipo:** es el tipo asignado a una plaza, que consta con la cantidad total de disponibles, en uso y reservados.
* **Class Vehiculo:** con matricula y el string del tipo.
* **Class Plaza:** con id, el string del tipo, si esta o no en uso y reservada.
* **Class Parking:** con lista de plazas y de clientes.
* **Class Ticket:** con id, matricula del vehiculo, fecha de entrada y de salida, el pin para retirar, el id de la plaza, el precio final que se calcula en la salida y el cliente que puede ser undefined.
* **Class Cliente:** con nombre, dni, el pin de su abono, su vehiculo como objeto, el id de su plaza fija, fecha de alta y de expiración. 


### Datos.js 💾
Aqui esta nuestra base de datos, lo primero que encontramos son los 3 Tipos creados a mano, las listas que necesitaremos más adelante y un id que nos servirá para no tener ids repetidos.
Para inicializar la lista de las plazas recorremos la lista de tipos y en cada tipo nos detenemos en su segundo atributo "disponibles" y creamos un numero de plazas igual a este numero. Esto se consigue con el *while* dentro del *for*, que nos dice que se ejecute ese pedazo de codigo dentro del bucle mientras la variable contador sea menor que el numero del atributo "disponibles". Por ultimo, el parking con la lista de plazas generadas y la de clientes vacia.
* **Class BBDD:** esta es la clase que nos da acceso a, no solo todas las listas, si no a consultas especificas para la busqueda de un objeto en concreto dentro de las listas.
     * **aumentarId():** aumenta el idGenerator en uno.
     * **buscarClientePorNombre(nombre):** devuelve el cliente buscado por su atributo nombre.
     * **buscarTicketPorPin(pin):** devuelve el ticket buscado por su atributo pin.
     * **encontrarClientePorDni(dni):** devuelve el cliente buscado por su atributo dni.
     * **encontrarTipoPorNombre(tipoNombre):** devuelve el tipo buscado por su atributo nombre.
     * **todasLasPlazasPorTipo(tipoPlaza):** devuelve la lista de plazas filtradas por su atributo tipo.
     * **plazasPorId(idPlaza):**  devuelve una plaza buscada por su atributo id.   

Por ultimo, instanciamos la variable **bd** con todos los datos y la exportamos. Esta variable sera la encargada de manejar toda la base de datos y deberemos importarla alli donde necesitemos acceder a algun dato y/o modificarlo.


### Admin.js 👤

En este archivo encontraremos funcionalidades propias del admin, como listar todos los clientes o plazas.

 * **listarPlazas(bd):** este metodo recibe como parametro la base de datos, se consultan todas las plazas del parking, y se devuelven con un formato mas legible para el administrador.
 * **totalCobros(bd):** este metodo recibe como parametro la base de datos, consulta la lista de tickets en el sistema y suma la cantidad del cobro de cada uno. El total se guarda en una variable y se devuelve.
 * **listaAbonados(bd):** este metodo recibe como parametro la base de datos y devuelve la lista de clientes abonados en el parking.


### User.js 👥

En este archivo tenemos las funciones correspondientes a las funcionalidades de usuario.

* **depositarSinCliente(bd):** este metodo recibe la base de datos en los parametros y devuelve un ticket de entrada.
Instanciamos todas las variables necesarias para crear un ticket de entrada y las preguntamos por teclado.
Aseguramos que hay plaza disponible para ese tipo de vehiculo y procedemos a setear los datos. Guardamos el ticket y lo devolvemos.
* **retirarVehiculoSinCliente(bd):** este metodo recibe la base de datos en los parametros y devuelve un ticket de salida. Instanciamos las variables necesarias para buscar el ticket de salida, seteamos la fecha de salida y llamamos al metodo *parking.calcularCobro(ticketEntrada);* para calcular el cobro. Seteamos el ticket, no guardamos uno nuevo y lo devolvemos.

* **depositarConCliente(bd):** este metodo recibe la base de datos en los parametros y devuelve un ticket de entrada. Instanciamos todas las variables necesarias para crear un ticket de entrada y las preguntamos por teclado. Los demas datos se asignan en funcion al cliente que es. En este caso solo aumentamos en uno la cantidad usada de plazas, guardamos el ticket y lo devolvemos.

* **retirarVehiculoConCliente(bd):** este metodo recibe la base de datos en los parametros y devuelve un ticket de salida. Instanciamos las variables para buscar el vehiculo asignado al cliente y restamos en 1 las plazas usadas. Seteamos la hora de salida y el cobro a 0 porque es cliente abonado. Seteamos el ticket, no guardamos uno nuevo y lo devolvemos.


### Parking.js 🏬

En este arvhivo se encuentras las funciones correspondientes al parking, como registrar un cliente, que necesitaremos para algunas funciones de usuario y calcular cobro para los no  clientes.

* **calcularCobro(ticketEntrada):** en este metodo se recibe el ticket de entrada, seteando sus valores de fecha de salida y se devuelve el cobro, diferenciando el tipo de plaza y aplicando la tarifa correspondiente. Estas tarifas entan declaradas al principio del archivo como constantes ***CONST***.
* **crearCliente(bd):** este metodo recibe la base de datos como entrada y devuelve el cliente creado.  
Expliquemos este metodo paso a paso para comprenderlo al completo:
    1. Listamos los tipos de plaza y pedimos el nombre del tipo del vehiculo.
    2. Creamos las fechas de alta y de expiracion, la de expiracion la setearemos mas adelante.
    3. Preguntamos y generamos datos necesarios para el cliente.
    4. Creamos el vehiculo que se asignara a cliente.
    5. Comprobamos que hay plaza desponible para reservar. Se guarda el id de la plaza y aseguramos que hay plaza con un boolean.
    6. Si se cumple la condicion *hayPlaza && plazaId!=undefined*, se pasa a preguntar el tipo de abono y se setea la fecha de expiración. Este proceso se repetira hasta que el usuario introduzca un valor valido.
    7. Ahora cambiaremos los datos del tipo de plaza a: 
        * Plazas disponibles -1.
        * Plazas reservadas +1.
    8. Creamos el cliente y lo guardamos en la lista de clientes de la base de datos.
    9. Si las condiciones no se cumplen se asignara *undefined* a cliente.
    10. Por ultimo, devolvemos el cliente.


### Main.js 🖥️
Llegamos por ultimo, al archivo principal de nuestro programa y en el que se encuentra el menu y se llaman a todas las funciones y clases definidas en este documento.
Encontramos una bienvenida donde elegimos nuestro rol. Primer *switch* elegimos entre admin y user. En los *switch* del usuario y admin se listan las funciones del cada uno. Despues de terminar cada opcion volveremos al primer *switch*.
Si en la seleccion de rol, se eligiera una opcion no valida, se entiende que se intenta cerrar el programa.

Hasta aqui la explicación del proyecto, esperamos que le haya servido para comprender el 100% de este programa.




