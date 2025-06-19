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
};

function mostrarMensajeConZoom(texto){
    const el = document.getElementById("mensajeMotivador");
    el.textContent = `✨ ${texto} ✨`;
    el.style.animation = "zoomIn 0.6s ease-in-out";
}

function actualizarReproductorMusical(categoria) {
    const audioElement = document.getElementById("audioMensaje");
    const canciones = {
        motivacion: "Audios/Sia-Unstoppable.mp3",
        aceptacion: "Audios/Melody-Esa-Diva.mp3",
        apoyo: "Audios/ZAZ-Cerca-de-ti.mp3"
    };
    if (canciones[categoria]){
        audioElement.src = canciones[categoria];
        audioElement.play();
    }
}

function guardarMensajeEnHistorial(texto, categoria) {
    let historial = JSON.parse(localStorage.getItem("historialMensajes")) || [];
    historial.push({ texto, categoria, fecha: new Date().toLocaleString() });
    historial.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    localStorage.setItem("historialMensajes", JSON.stringify(historial));
}

function mostrarHistorialMensajes() {
    const historial = JSON.parse(localStorage.getItem("historialMensajes")) || [];
    const contenedor = document.getElementById("historial");
    contenedor.innerHTML = "";
    historial.forEach(mensaje =>{
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("mensaje-historial");
        tarjeta.innerHTML = `
            <p><strong>${mensaje.texto}</strong></p>
            <p><em>Categoría: ${mensaje.categoria}</em></p>
            <p><em>Fecha: ${mensaje.fecha}</em></p>
            `;
            contenedor.appendChild(tarjeta); 
        
    });
}

function agregarMensajeDestacado(texto, usuario, audioSrc) {
    const contenedor = document.getElementById("mensajesDestacados");
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("mensaje-destacado");
    tarjeta.innerHTML = `
     <p><strong>${texto}</strong></p>
     <p><em>Mensaje de usuario: ${usuario}</em></p>
     <audio autoplay><source src="${audioSrc}" type="audio/mpeg"></audio>
     `;
     contenedor.appendChild(tarjeta);
}

function toggleModoOscuro() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("modoOscuro", document.body.classList.contains("dark-mode"));
}

document.addEventListener("DOMContentLoaded",() => {
    if (localStorage.getItem("modoOscuro") === "true"){
        document.body.classList.add("dark-mode");
    }
    mostrarHistorialMensajes();
});

document.getElementById("simuladorForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const estado = document.getElementById("estadoAnimo").value;
    const tipo = document.getElementById("tipoMensaje").value;
    const mensajeTexto = document.getElementById("mensajeUsuario").value.trim();
    const sobrenombre = document.getElementById("sobrenombre").value.trim() || "Anónimo";
    const compartir = document.getElementById("compartirMensaje").checked;

    if (!nombre || !apellido) {
        alert("Por favor, completá tu nombre y apellido.");
        return;
    }

    if (mensajeTexto.length = 0 || mensajeTexto.length > 5000) {
        alert("El mensaje debe tener entre 1 y 5000 caracteres.");
        return;
    }

    if (estado === "mal") {
        alert ("Recuerda que también podés pedir ayuda profesional.NO ESTAS SOLX.");
    }

    const mensajeFinal = mensajes [tipo][Math.floor(Math.random() * mensajes[tipo].length)];
    mostrarMensajeConZoom (mensajeFinal);

    guardarMensajeEnHistorial(mensajeTexto, tipo);

    if (compartir) {
        actualizarReproductorMusical(tipo);
        agregarMensajeDestacado(mensajeTexto, sobrenombre, seleccionarCancion(tipo));
    }

    document.getElementById("simuladorForm").reset();
});

function seleccionarCancion (categoria) {
    const canciones = {
        motivacion : "Audios/Sia-Unstoppable.mp3",
        aceptacion: "Audios/Melody-Esa-Diva.mp3",
        apoyo: "Audios/ZAZ-Cerca-de-ti.mp3"
    };
    return canciones [categoria] || "";
}