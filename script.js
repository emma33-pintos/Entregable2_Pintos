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
function validarEntrada(texto) {
    return texto && texto.trim().length > 0;
}
function normalizarTexto(texto) {
    return texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, ""); 
}
function iniciarSimulador() {
    let nombre, apellido;
    do {
        nombre = prompt("Por favor, ingresa tu nombre:");
        if (!validarEntrada(nombre)) {
            alert("El nombre no puede estar vacío. Inténtalo de nuevo.");
        }
    } while (!validarEntrada(nombre));

    do {
        apellido = prompt("Ahora, ingresa tu apellido:");
        if (!validarEntrada(apellido)) {
            alert("El apellido no puede estar vacío. Inténtalo de nuevo.");
        }
    } while (!validarEntrada(apellido));

    alert(`Bienvenido, ${nombre} ${apellido}. Vamos a comenzar :D.`);

    let estadoAnimo;
    do {
        estadoAnimo = normalizarTexto(prompt("¿Cómo te sientes hoy? (bien/mal)"));
        if (!validarEntrada(estadoAnimo) || (estadoAnimo !== "bien" && estadoAnimo !== "mal")) {
            alert("Por favor, ingresa 'bien' o 'mal' para continuar.");
        }
    } while (estadoAnimo !== "bien" && estadoAnimo !== "mal");

    if (estadoAnimo === "mal") {
        alert("Recuerda que es importante acudir a un profesional.");
    }

    let continuar = true;

    while (continuar) {
        let tipoMensaje;
        do {
            tipoMensaje = normalizarTexto(prompt("¿Qué tipo de mensaje te gustaría recibir? (motivacion/aceptacion/apoyo)"));
            if (!validarEntrada(tipoMensaje) || (!tipoMensaje.includes("motivacion") &&
                 !tipoMensaje.includes("aceptacion") && !tipoMensaje.includes("apoyo"))) {
                alert("Por favor, ingresa 'motivacion', 'aceptacion' o 'apoyo' para continuar.");
            }
        } while (!tipoMensaje.includes("motivacion") && !tipoMensaje.includes("aceptacion") && !tipoMensaje.includes("apoyo"));

        let mensajeFinal;
        if (tipoMensaje.includes("motivacion")) {
            mensajeFinal = mensajesMotivadores[Math.floor(Math.random() * mensajesMotivadores.length)];
        } else if (tipoMensaje.includes("aceptacion")) {
            mensajeFinal = mensajesAutoaceptacion[Math.floor(Math.random() * mensajesAutoaceptacion.length)];
        } else if (tipoMensaje.includes("apoyo")) {
            mensajeFinal = mensajesApoyoEmocional[Math.floor(Math.random() * mensajesApoyoEmocional.length)];
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