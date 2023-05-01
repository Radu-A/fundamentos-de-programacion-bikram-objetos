/*1-4 Declaracion*/
const Coche = {
    marca : '',
    modelo : '',
    matricula : ''
};
const Casa = {
    codPostal : '',
    calle : '',
    portal : '',
    piso : ''
};
const FullStackDeveloper = {
    lenguajes : [],
    proyectos : []
};
const Perro = {
    nombre : '',
    raza : '',
    color : '',
    edad : '',
    ladrar() {
        console.log("Guau, guau");
    },
    popo() {
        return(Math.random() * 3);
    }
};
/*5-8 Lectura propiedades*/
const marcaPortatil = Portatil.marca;
const marcaPortatil2 = Portatil['marca'];
const grupos = Concierto.grupos;
let RGB = [];
RGB.push(Led.rojo, Led.verde, Led.azul);
/*9-12 Modificación propiedades*/
Portatil.modelo = 'P345';
Concierto.cartelera.push("Guns N' Roses");
Concierto.fecha = new Date();
const objeto = {
    nombreArchivo : '',
    copias : '',
    numPaginas : ''
};
Impresora.imprimiendo = objeto;
/*13-17 Declaracion */
const Noticia = {
    titular : '',
    cuerpo : ''
};
const Persona = {
    nombre : '',
    apellidos : '',
    edad : ''
};
const Avion = {
    numPasajeros : '',
    despegar() {
        console.log('despegando');
    },
    volar() {
        console.log('llegando al destino');
    },
    aterrizar() {
        console.log('aterrizando');
    } 
};
const Paquete = {
    contenido : []
};
const Pais = {
    numHabitantes : '',
    continente : '',
    gentilicio : ''
};
/*18-22 Lectura*/
const codError = O_Error.codigo;
const integrantes = Grupo.integrantes;
const nivelesTinta = Impresora.tinta;
const pixeles = Pantalla.pixeles;
const especificaciones = Movil.especificaciones;
/*23-26 Modificación*/
Grupo.numIntegrantes = 5;
Pantalla.dimensiones = '1920x1080';
Led.encendido = !Led.encendido;
Movil.temperatura = '20º';