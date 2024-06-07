'use strict';

//Saludo.
let question = prompt("¿Cual es tu nombre?");
alert("Hola, " + question + " un gusto que estes aqui");


// Respuestas:
const respuestaFutbol = "si";
const respuestaRenato = "no";
const respuestaRock = "si";
const respuestaPerro = "si";
const respuestaGuitarra = "no";


//Preguntas:
const question1 = prompt("Me gusta el Futbol?");
if (respuestaFutbol.toLowerCase() === question1.toLowerCase()) { 
    alert("Muy Bien");
    console.log(" Muy Bien")
} else {
    alert("Respuesta Incorrrecta");
    console.log("Respuesta Incorrecta")
}

const question2 = prompt("Mi segundo nombre es Renato?");
if (respuestaRenato.toLowerCase() === question2.toLowerCase()) { 
    alert("Muy Bien");
    console.log(" Muy Bien")
} else {
    alert("Respuesta Incorrrecta");
    console.log("Respuesta Incorrecta")
}

const question3 = prompt("Me gusta el Rock?");
if (respuestaRock.toLowerCase() === question3.toLowerCase()) { 
    alert("Muy Bien");
    console.log(" Muy Bien")
} else {
    alert("Respuesta Incorrrecta");
    console.log("Respuesta Incorrecta")
}

const question4 = prompt("Tengo un perro?");
if (respuestaPerro.toLowerCase() === question4.toLowerCase()) { 
    alert("Muy Bien");
    console.log(" Muy Bien")
} else {
    alert("Respuesta Incorrrecta");
    console.log("Respuesta Incorrecta")
}

const question5 = prompt("Toco guitarra?");
if (respuestaGuitarra.toLowerCase() === question5.toLowerCase()) { 
    alert("Muy Bien");
    console.log(" Muy Bien")
} else {
    alert("Respuesta Incorrrecta");
    console.log("Respuesta Incorrecta")
}

