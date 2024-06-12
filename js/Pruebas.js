// Función para hacer una pregunta y verificar la respuesta
function hacerPregunta(pregunta, respuestaCorrecta) {
    const respuestaUsuario = prompt(pregunta);
    if (respuestaUsuario.toLowerCase() === respuestaCorrecta.toLowerCase()) {
        alert("¡Muy bien! Respuesta correcta.");
        console.log("¡Muy bien! Respuesta correcta.");
        return 1;
    } else {
        alert("Respuesta incorrecta. La respuesta correcta era: " + respuestaCorrecta);
        console.log("Respuesta incorrecta. La respuesta correcta era: " + respuestaCorrecta);
        return 0;
    }
}

// Preguntas sobre gustos personales
let respuestasCorrectasUsuario = 0;
respuestasCorrectasUsuario += hacerPregunta("¿Te gusta el fútbol?", "si");
respuestasCorrectasUsuario += hacerPregunta("¿Tu segundo nombre es Renato?", "no");
respuestasCorrectasUsuario += hacerPregunta("¿Te gusta el rock?", "si");
respuestasCorrectasUsuario += hacerPregunta("¿Tienes un perro?", "si");
respuestasCorrectasUsuario += hacerPregunta("¿Tocas guitarra?", "no");

// Conteo de respuestas correctas
console.log("Respondiste correctamente a " + respuestasCorrectasUsuario + " pregunta(s) sobre tus gustos personales.");

// Juego de adivinar un color favorito
const maxNumeroDeIntentos = 6;
const respuestasCorrectasColores = ["Rojo", "Naranja", "Morado"];
let contadorDeIntentos = 0;

console.log("Mis colores favoritos son: Rojo, Naranja, Morado");

while (contadorDeIntentos < maxNumeroDeIntentos) {
    const respuestaUsuario = prompt("Adivina uno de mis colores favoritos");

    if (respuestasCorrectasColores.includes(respuestaUsuario)) {
        alert("¡Felicidades! Adivinaste uno de mis colores favoritos: " + respuestaUsuario);
        console.log("¡Felicidades! Adivinaste uno de mis colores favoritos: " + respuestaUsuario);
        console.log("Lo lograste en " + (contadorDeIntentos + 1) + " intentos");
        console.log("Respuestas era Rojo, Naranja o Morado");
        break;
    } else {
        contadorDeIntentos++;
        if (contadorDeIntentos === maxNumeroDeIntentos) {
            alert("Llegaste al límite de intentos :(");
            console.log("Llegaste al límite de intentos :(");
        }
    }
}
