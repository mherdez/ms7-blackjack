

// REFERNCIAS HTML
const buttons   = document.querySelectorAll('.btn');
const imgCartas = document.querySelectorAll('img'); 
const imgCartasJugador = document.querySelector('.cartasJugador');
const imgCartasComputadora = document.querySelector('.cartasComputadora');
const puntosJugador = document.querySelector('small');

// VARIABLES
let mazo = [];

// EVENTOS
buttons[0].addEventListener('click', () => {
   imgCartasJugador.innerHTML = '';
   imgCartasComputadora.innerHTML = '';
});

buttons[1].addEventListener('click', () => {
   const carta = pedirCarta()
   imgCartasJugador.innerHTML += `<img src="./assets/cartas/${carta}.png">`
   valorCarta(carta)
})

buttons[2].addEventListener('click', () => {
   imgCartasComputadora.innerHTML += `<img src="./assets/cartas/${pedirCarta()}.png">`
})

// FUNCIONES
const crearMazo = () => {
   let especiales = ['A','J','Q','K'];
   let palo       = ['H','S','D','C'];

   for(let n=2; n <= 10; n++) {
      for(let p of palo) {
         mazo.push(n+p)
      }
   }
   for(let e of especiales) {
      for(let p of palo) {
         mazo.push(e+p);
      }
   }
   mazo = _.shuffle(mazo);
   console.log(mazo)
}

const pedirCarta = () => {
   return mazo.shift();
}


// SI VALOR ES UN NUMERO ENTONCES SE DEVUELVE LA DENOMINACION DEL NUMERO
// SI ES UNA A EL VALOR ES 11
// SI ES UNA J,Q,K EL VALOR ES 10
const valorCarta = (carta) => {
   let valor = carta.substring(0, carta.length - 1);
   if( isNaN(valor) ) {
      valor = (valor === 'A') ? 11 : 10; 
   } else {
      valor *= 1
   }
   console.log(valor)
}

// INICIO
crearMazo();