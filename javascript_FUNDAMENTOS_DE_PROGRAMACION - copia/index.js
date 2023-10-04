//Declaración de variables en JavaScript
//let
//const
// let numero = 0;
// numero = 8;
// const constante = 4;
// constante = 10;

//Alerta en JavaScript
// alert('Hola desde una alerta en JavaScript');
// console.log('Esto es Javascript desde la consola');
// console.log(numero);
// console.log(constante);

//Concatenación
let nombre = 'Lisandra';
let apellido ='Duran';
console.log("Mi nombre es:" + " " + nombre + apellido);

// document.write('Hola en el documento de JavaScript');
// document.write('Mi nombre es :' + " " + nombre + apellido);

let seleccion = document.querySelector('#seccion1');

seleccion.innerHTML = 'Mi nombre es :' + " " + nombre + apellido;