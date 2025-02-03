// Array para almacenar los nombres de los amigos
let amigos = [];
console.log("Array inicial de amigos:", amigos);

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    console.log("Nombre ingresado:", nombre);

    if (nombre === "") {
        alert("Por favor, ingresa un nombre.");
        console.log("Nombre vacío, alerta mostrada.");
        return;
    }

    // Convertir el nombre a minúsculas para la comparación
    const nombreEnMinusculas = nombre.toLowerCase();
    console.log("Nombre en minúsculas:", nombreEnMinusculas);

    // Verificar si el nombre ya existe en la lista
    if (amigos.some(amigo => amigo.toLowerCase() === nombreEnMinusculas)) {
        alert("Este nombre ya ha sido ingresado.");
        console.log("Nombre duplicado, alerta mostrada.");
        input.value = "";
        return;
    }

    amigos.push(nombre);
    console.log("Nombre agregado:", nombre);
    console.log("Estado del array de amigos:", amigos);
    mostrarAmigos();
    input.value = "";
}

// Función para mostrar los nombres de los amigos en la lista
function mostrarAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";
    console.log("Mostrando amigos:", amigos);

    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Función para sortear un amigo al azar
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        console.log("Array de amigos vacío, alerta mostrada.");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
    console.log("Índice sorteado:", indiceSorteado);
    console.log("Amigo sorteado:", amigoSorteado);

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}
