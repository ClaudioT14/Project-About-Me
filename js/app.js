'use strict';

//Saludo.
let question = prompt("¿Cual es tu nombre?");
alert("Hola, " + question + " un gusto que estes aqui");


// Respuestas: usar function para reducir
const respuestaFutbol = "si";
const respuestaRenato = "no";
const respuestaRock = "si";
const respuestaPerro = "si";
const respuestaGuitarra = "no";


//Preguntas: usar function para reducir
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


const maxNumeroIntentos = 4;
const numeroCorrecto = 7;
let contadorIntentos = 1;

while (contadorIntentos <= maxNumeroIntentos) {
    const numeroUsuario = Number(prompt("Ingrese un numero del 1 al 10"));

    if (numeroUsuario === numeroCorrecto) {
        alert("Felicidades conseguiste adivinar el numero " + numeroCorrecto)
        console.log("Felicidades conseguiste adivinar el numero " + numeroCorrecto);
        console.log("Lo lograste en " + contadorIntentos + " intentos");
        break;
    } else {
        contadorIntentos++;
        if (contadorIntentos === maxNumeroIntentos + 1) {
            console.log("Llegaste al limite de intentos :(");
            alert("El número correcto era " + numeroCorrecto);
        } else {
            if (numeroUsuario < numeroCorrecto) {
                alert("El numero correcto es mayor que " + numeroUsuario);
            } else {
                alert("El numero correcto es menor que " + numeroUsuario);
            }
        }

    }
}

const respuestasCorrectas = ["rojo", "naranja", "morado"];
let contadorDeIntentos = 0;
let condicion = false;

for (let i = 0; i < 6; i++) {
    const respuestaUsuario = prompt("Adivina uno de mis colores favoritos");
    contadorDeIntentos++;
    for (let j = 0; j < respuestasCorrectas.length; j++) {
        if (respuestaUsuario.toLowerCase() === respuestasCorrectas[j].toLowerCase()) {
            alert("Lo lograste en " + contadorDeIntentos + " intentos");
            condicion = true;
            break;
        }
    }

    if (condicion) {
        alert("¡Felicidades! Adivinaste uno de mis colores favoritos!");
        break;
    } else if (contadorDeIntentos === 5) {
        alert("te quedastes sin intentos");
    } else {
        alert("sigue intentado");
    }

}
/*// usar for
const maxNumeroDeIntentos = 6;
const respuestasCorrectas = ["rojo", "naranja", "morado"];
let contadorDeIntentos = 1;

while (contadorDeIntentos < maxNumeroDeIntentos) {
    const respuestaUsuario = prompt("Adivina uno de mis colores favoritos");

    if (respuestasCorrectas.includes(respuestaUsuario)) {
        alert("¡Felicidades! Adivinaste uno de mis colores favoritos: " + respuestaUsuario);
        console.log("Felicidades conseguiste adivinar uno de mis colores favoritos " + respuestaUsuario);
        console.log("Lo lograste en " + (contadorDeIntentos + 1) + " intentos");
        console.log("Las respuestas eran Rojo, Naranja o Morado")
        break;
    } else {
        contadorDeIntentos++;
        if (contadorDeIntentos === maxNumeroDeIntentos) {
        alert("Llegaste al límite de intentos :(");
        }
    }
}


/*
const maxNumeroDeIntentos = 6;
const respuestasCorrectas = ["Rojo", "Naranja", "Morado"];

for (let contadorDeIntentos = 1; contadorDeIntentos < maxNumeroDeIntentos; contadorDeIntentos++) {
    const respuestaUsuario = prompt("Adivina uno de mis colores favoritos");

    if (respuestasCorrectas.includes(respuestaUsuario)) {
        alert("¡Felicidades! Adivinaste uno de mis colores favoritos: " + respuestaUsuario);
        console.log("Felicidades conseguiste adivinar uno de mis colores favoritos " + respuestaUsuario);
        console.log("Lo lograste en " + contadorDeIntentos + " intentos");
        console.log("Las respuestas eran Rojo, Naranja o Morado")
        break;
    } else if (contadorDeIntentos === maxNumeroDeIntentos - 1) {
        alert("Llegaste al límite de intentos :(");
    }
}
*/




