

// REFERNCIAS HTML
const btnNuevoJuego = document.querySelector('#btnNuevoJuego');
const btnPedirCarta = document.querySelector('#btnPedirCarta');
const btnDetener = document.querySelector('#btnDetener');
const imgCartas = document.querySelectorAll('img');
const imgCartasJugador = document.querySelector('.cartasJugador');
const imgCartasComputadora = document.querySelector('.cartasComputadora');
const puntosJugador = document.querySelectorAll('small')[0];
const puntosComputadora = document.querySelectorAll('small')[1];
const cartasJugador = document.querySelector('.cartasJugador');

// VARIABLES
let mazo = [];
let totalPuntosJugador = 0;
let totalPuntosComputadora = 0;

// EVENTOS
btnNuevoJuego.addEventListener('click', () => {
   console.clear();
   mazo = [];
   crearMazo();
   imgCartasJugador.innerHTML = '';
   imgCartasComputadora.innerHTML = '';
   totalPuntosJugador = 0;
   puntosJugador.textContent = totalPuntosJugador;
   totalPuntosComputadora = 0;
   puntosComputadora.textContent = totalPuntosComputadora;
   btnPedirCarta.removeAttribute('disabled');
   btnPedirCarta.classList.remove('btn-disabled');
   btnPedirCarta.classList.add('bg-blue');
});

// OPTIMIZAR FUNCION (JUGADOR Y COMPUTADORA SON SIMILARES)
// OPTIMIZAR LA CREACION DE LA CARTA
btnPedirCarta.addEventListener('click', () => {
   const carta = crearCarta();
   totalPuntosJugador += valorCarta(carta);
   puntosJugador.textContent = totalPuntosJugador;
   if (totalPuntosJugador > 21) {
      juegoPerdidoJugador();
   }
})

btnDetener.addEventListener('click', () => {
   const carta = pedirCarta();
   imgCartasComputadora.innerHTML += `<img src="./assets/cartas/${carta}.png">`
   totalPuntosComputadora += valorCarta(carta);
   puntosComputadora.textContent = totalPuntosComputadora;
})

// FUNCIONES
const crearMazo = () => {
   let especiales = ['A', 'J', 'Q', 'K'];
   let palo = ['H', 'S', 'D', 'C'];

   for (let n = 2; n <= 10; n++) {
      for (let p of palo) {
         mazo.push(n + p)
      }
   }
   for (let e of especiales) {
      for (let p of palo) {
         mazo.push(e + p);
      }
   }
   mazo = _.shuffle(mazo);
   console.log(mazo)
}

const crearCarta = () => {
   const carta = document.createElement('img');
   const valor = pedirCarta();
   const src   = `./assets/cartas/${valor}.png`;
   carta.src = src;
   cartasJugador.append(carta)
   return valor;
}

const pedirCarta = () => {
   return mazo.shift();
}

const valorCarta = (carta) => {
   let valor = carta.substring(0, carta.length - 1);
   if (isNaN(valor)) {
      valor = (valor === 'A') ? 11 : 10;
   } else {
      valor *= 1
   }
   return valor;
}

const juegoPerdidoJugador = () => {
   console.log('el jugador ya perdio');
   btnPedirCarta.setAttribute('disabled', true);
   btnPedirCarta.classList.remove('bg-blue');
   btnPedirCarta.classList.add('btn-disabled');
}

// INICIO
crearMazo();