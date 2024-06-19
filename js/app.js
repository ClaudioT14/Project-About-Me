'use strict';

function comprararRespuesta(textoDePregunta) {
    const question = prompt(textoDePregunta);
    if (afirmacion.toLowerCase() === question.toLowerCase()) {
        alert("Muy Bien");
        console.log(" Muy Bien")
    } else {
        alert("Respuesta Incorrrecta");
        console.log("Respuesta Incorrecta")
    }

}

//Saludo.
function preguntarNombre() {
    let question = prompt("¿Cual es tu nombre?");
    alert("Hola, " + question + " un gusto que estes aqui");
}
//Para ejecutar una funcion debemos llamar a esta.


//Podemos crear una variable para opcion de afirmacion y otra para la negacion.
//Usar camellCase cuando creemos variables.
//Respuestas:
const afirmacion = "Si"
const negacion = "No"
//VERSION1
//Preguntas:
//function preguntarFutbol() {
//  comprararRespuesta("Me gusta el Futbol?")
//}

//function preguntarSegundoNombre() {
//    comprararRespuesta("Me gusta viajar?")
//}

//function preguntarRock() {
//    comprararRespuesta("Me gusta el Rock?")
//}

//function preguntarPerro() {
//    comprararRespuesta("Tengo un perro?")
//}

//function preguntarGuitarra() {
//    comprararRespuesta("Vivo en Lima?")
//}
//VERSION2
//preguntarNombre();
//preguntarFutbol();
//preguntarSegundoNombre();
//preguntarRock();
//preguntarPerro();
//preguntarGuitarra();
//VERSION3
//preguntarNombre();
//comprararRespuesta("Me gusta el Futbol?")
//comprararRespuesta("Me gusta viajar?")
//comprararRespuesta("Me gusta el Rock?")
//comprararRespuesta("Tengo un perro?")
//comprararRespuesta("Vivo en Lima?")
//VERSION3
const preguntas = [
    "Me gusta el Futbol?",
    "Me gusta viajar?",
    "Me gusta el Rock?",
    "Tengo un perro?",
    "Vivo en Lima?"
];
preguntarNombre();

for (let i = 0; i < preguntas.length; i++) {
    comprararRespuesta(preguntas[i]);
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




