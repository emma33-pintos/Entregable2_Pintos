const mensajesMotivadores = [
    "Eres valioso y fuerte. Sigue adelante.",
    "Cada paso cuenta. ¡Confía en ti!",
    "Tus emociones son válidas. Cuida de ti mismo.",
    "Lo importante es que te permitas sentir y crecer."
];

const mensajesAutoaceptacion = [
    "Eres suficiente tal como eres. No necesitas cambiar para encajar.",
    "Tu identidad es válida y hermosa. Nunca dejes que nadie te haga dudar de ello.",
    "El amor propio significa aceptarse sin miedo. Sé quien eres con orgullo.",
    "No hay una única forma de ser feliz. Encuentra tu camino y abrázalo con confianza."
];

const mensajesApoyoEmocional = [
    "No estás solo. Siempre hay alguien dispuesto a escucharte.",
    "Hablar sobre tus sentimientos es un gran paso. Sigue adelante.",
    "Es normal sentirte así a veces. Permítete procesarlo con calma.",
    "Recuerda que pedir ayuda es un signo de valentía, no de debilidad."
];

const preguntas = [
    "¿Cómo te sientes hoy? (bien/mal)",
    "¿Qué tipo de mensaje te gustaría recibir? (motivación/aceptación/apoyo)"
];

function iniciarSimulador() {
    let nombre = prompt("Por favor, ingresa tu nombre:");
    let apellido = prompt("Ahora, ingresa tu apellido:");
    alert(`Bienvenido, ${nombre} ${apellido}. Vamos a comenzar.`);

    let estadoAnimo = prompt(preguntas[0]).toLowerCase();
    if (estadoAnimo === "mal") {
        alert("Recuerda que es importante acudir a un profesional.");
    }

    let continuar = true;

    while (continuar) {
        let tipoMensaje = prompt(preguntas[1]).toLowerCase();
        let mensajeFinal;

        if (tipoMensaje === "motivación") {
            mensajeFinal = mensajesMotivadores[Math.floor(Math.random() * mensajesMotivadores.length)];
        } else if (tipoMensaje === "aceptación") {
            mensajeFinal = mensajesAutoaceptacion[Math.floor(Math.random() * mensajesAutoaceptacion.length)];
        } else if (tipoMensaje === "apoyo") {
            mensajeFinal = mensajesApoyoEmocional[Math.floor(Math.random() * mensajesApoyoEmocional.length)];
        } else {
            mensajeFinal = "Opción no reconocida. Pero recuerda: eres valioso tal como eres.";
        }

        alert(mensajeFinal);

        let respuesta = confirm("¿Quieres leer otro mensaje motivador?");
        if (!respuesta) {
            continuar = false;
            alert("¡Gracias por participar! Siempre recuerda tu valor. 💙");
        }
    }
}

iniciarSimulador();