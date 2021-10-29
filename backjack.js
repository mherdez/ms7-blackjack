

// REFERNCIAS HTML
const buttons   = document.querySelectorAll('.btn');
const imgCartas = document.querySelectorAll('img'); 
const imgCartasJugador = document.querySelector('.cartasJugador');
const imgCartasComputadora = document.querySelector('.cartasComputadora');

// EVENTOS
buttons[0].addEventListener('click', () => {
   imgCartasJugador.innerHTML = '';
   imgCartasComputadora.innerHTML = '';
});

buttons[1].addEventListener('click', () => {
   imgCartasJugador.innerHTML += '<img src="./assets/cartas/QD.png">'
})

buttons[2].addEventListener('click', () => {
   imgCartasComputadora.innerHTML += '<img src="./assets/cartas/KC.png">'
})
