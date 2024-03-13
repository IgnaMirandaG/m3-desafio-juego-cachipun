//TRABAJADO EN SALA 3 CON EL APOYO DE DAROLD


// Solicitar información al usuario sobre la cantidad de jugadas desea jugar contra la maquina 
let jugadas = ['piedra', 'papel', 'tijera'];
let puntajeUsuario = 0;
let puntajeMaquina = 0;

// Solicitar al ususario que ingrese su opción de jugada (piedra, papel, tijera)
let numeroJuagadas = parseInt(prompt('¿Cuántas veces deseas jugar en este torneo?'));

for(let i = 0; i < numeroJuagadas; i++) {
    let jugadaUsuario = prompt('Ingrese la jugada que deseas jugar (piedra, papel, tijera): ').toLowerCase();
    if(!jugadas.includes(jugadaUsuario)) {
        alert('Opción no válida');
    }
    
    // Aplicar Math.random para la selección de la jugada de la máquina

    let indiceMaquina = Math.floor(Math.random() * jugadas.length);

    // Capturar jugada de máquina 
    
    let opcionMaquina = jugadas[indiceMaquina];

    // Evaluar respuestas y agregar contador de juego

    if(jugadaUsuario === opcionMaquina) {
        alert(`Empate - La máquina elige ${opcionMaquina} y tu elegiste ${jugadaUsuario}`);
    } else if (
        (jugadaUsuario === 'piedra' && opcionMaquina === 'tijera') ||
        (jugadaUsuario === 'papel' && opcionMaquina === 'piedra') ||
        (jugadaUsuario === 'tijera' && opcionMaquina === 'papel')
    ){
        puntajeUsuario +=1;
        alert(`Ganaste - La máquina elige ${opcionMaquina} y tu elegiste ${jugadaUsuario}`);
    } else {
        puntajeMaquina +=1;
        alert(`Perdiste - La máquina elige ${opcionMaquina} y tu elegiste ${jugadaUsuario}`);
    }
}

// Indicar resultado del juego

if (puntajeUsuario === puntajeMaquina) {
    alert('Empate');
} else if (puntajeUsuario > puntajeMaquina){
    alert(`Ganaste el Torneo puntajes: Jugador ${puntajeUsuario} - Máquina ${puntajeMaquina}`);
} else {
    alert(`Perdiste el Torneo puntajes: Jugador ${puntajeUsuario} - Máquina ${puntajeMaquina}`);
}
