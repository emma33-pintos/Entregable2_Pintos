const mensajes= {
    motivacion: [
        "La vida es un viaje, no un destino.",
        "Eres valioso y fuerte. Sigue adelante.",
        "Cada paso cuenta. ¡CONFÍA EN VOS!",
        "Tus emociones son válidas. Cuida de ti mismo.",
        "Lo importante es que te permitas sentir y crecer.",
    ] ,
    aceptacion:[
        "Eres suficiente tal como eres. No necesitas cambiar para encajar.",
        "Tu identidad es válida y hermosa. Nunca dejes que nadie te haga dudar de ello.",
        "El amor propio significa aceptarse sin miedo. Sé quien eres con orgullo.",
        "No hay una única forma de ser feliz. Encuentra tu camino y abrázalo con confianza.",
        "La diversidad es lo que hace al mundo hermoso. Celebra tu singularidad y la de los demás.",
    ] ,
    apoyo:[
        "No estás solo. Siempre hay alguien dispuesto a escucharte.",
        "Hablar sobre tus sentimientos es un gran paso. Sigue adelante.",
        "Es normal sentirte así a veces. Permítete procesarlo con calma.",
        "Recuer que pedir ayuda es un signo de valentía, no de debilidad.",
        "La empatía y el apoyo mutuo son fundamentales. Estamos aquí para ti.",
    ]
} ;
function obtenerMensaje(event){
    event.preventDefault();
    let nombre = document.getElementById("nombre").value.trim();
    let apellido = document.getElementById("apellido").value.trim();
    let estadoAnimo = document.getElementById("estadoAnimo").value;
    let tipoMensaje = document.getElementById("tipoMensaje").value;
    
    if (!nombre || !apellido) {
        alert("Por favor, completa tu nombre y apellido.");
        return;
    }
    
    if (estadoAnimo == "mal"){
        alert("Recuerda que es importante acudir a un profesional. NO ESTAS SOLX.");
    }

    let mensajeFinal = mensajes[tipoMensaje][Math.floor(Math.random()* mensajes[tipoMensaje].length)];
    document.getElementById("mensajeMotivador").textContent = `✨ ${mensajeFinal} ✨`;
    let usuario = { nombre, apellido};
    let usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios") || []);
    usuariosRegistrados.push(usuario);
    localStorage.setItem ("usuarios", JSON.stringify(usuariosRegistrados));
}
document.getElementById("simuladorForm").addEventListener("submit", obtenerMensaje);