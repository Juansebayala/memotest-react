import Carta from './Carta';
import sonidoSeleccionado from '../audios/seleccionar-carta.mp3';
import sonidoEncontrado from '../audios/par-encontrado.mp3';
import sonidoGanado from '../audios/juego-ganado.mp3';
import {
  mostrarMensajeJuegoGanado,
  agregarTiempoJugadoAMensajeFinal,
} from './Modal-juego-ganado';

function comprobarImagenesRepetidas(
  indiceImagen,
  referenciaImagen,
  contadorImagenes
) {
  const $imagenesCartas = document.querySelectorAll('.reverso');
  if (Object.values(contadorImagenes)[indiceImagen]) {
    return true;
  }

  $imagenesCartas.forEach(($imagen) => {
    if ($imagen.src.includes(referenciaImagen)) {
      contadorImagenes[indiceImagen + 1] = true;
    }
  });
}

function conseguirImagenAleatoria(contadorImagenes) {
  const imagenes = {
    1: 'csharp-logo.png',
    2: 'go-logo.png',
    3: 'java-logo.png',
    4: 'javascript-logo.png',
    5: 'kotlin-logo.png',
    6: 'php-logo.png',
    7: 'postgresql-logo.png',
    8: 'python-logo.png',
    9: 'react-logo.png',
    10: 'ruby-logo.png',
    11: 'swift-logo.png',
    12: 'typescript-logo.png',
  };

  const indiceAleatorio = Math.floor(Math.random() * 12);
  const imagenAleatoria = Object.values(imagenes)[indiceAleatorio];
  const hayMasDeUnaRepetida = comprobarImagenesRepetidas(
    indiceAleatorio,
    imagenAleatoria,
    contadorImagenes
  );

  if (hayMasDeUnaRepetida) {
    return conseguirImagenAleatoria(contadorImagenes);
  }

  return imagenAleatoria;
}

export function agregarParImagenes() {
  const contadorImagenes = {
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
    10: '',
    11: '',
    12: '',
  };

  const $imagenesCartas = document.querySelectorAll('.reverso');
  $imagenesCartas.forEach(($imagen) => {
    const $imagenAleatoria = conseguirImagenAleatoria(contadorImagenes);
    $imagen.src = './img/' + $imagenAleatoria;
  });
}

let cartasSeleccionadas = [];
let paresEncontrados = [];

const revelarImagenCarta = (carta) => {
  carta.childNodes[0].style.opacity = '1';
};

function ocultarParCartas(primeraCarta, segundaCarta) {
  primeraCarta.style.opacity = '0';
  segundaCarta.style.opacity = '0';
}

function desabilitarParCartas(primeraCarta, segundaCarta) {
  primeraCarta.style.visibility = 'hidden';
  segundaCarta.style.visibility = 'hidden';
}

function ocultarImagenesParCartas(primeraCarta, segundaCarta) {
  primeraCarta.childNodes[0].style.opacity = '0';
  segundaCarta.childNodes[0].style.opacity = '0';
}

function vaciarCartasSeleccionadas() {
  cartasSeleccionadas = [];
}

function desabilitarClicCartasSeleccionadas() {
  cartasSeleccionadas.forEach(function ($carta) {
    $carta.onclick = function () {};
  });
}

function comprobarParCartas(cartas) {
  const imagenPrimeraCarta = cartas[0].childNodes[0].src;
  const imagenSegundaCarta = cartas[1].childNodes[0].src;
  if (imagenPrimeraCarta === imagenSegundaCarta) {
    const sonidoParEncontrado = new Audio(sonidoEncontrado);
    sonidoParEncontrado.play();
    desabilitarClicCartasSeleccionadas();
    setTimeout(function () {
      ocultarParCartas(cartas[0], cartas[1]);
    }, 800);
    setTimeout(function () {
      desabilitarParCartas(cartas[0], cartas[1]);
    }, 1600);
    paresEncontrados.push(imagenPrimeraCarta);
  } else {
    setTimeout(function () {
      ocultarImagenesParCartas(cartas[0], cartas[1]);
    }, 800);
  }
  vaciarCartasSeleccionadas();
}

export const manejarCartas = (event) => {
  const sonidoSeleccionCarta = new Audio(sonidoSeleccionado);
  sonidoSeleccionCarta.play();
  const $cartaSeleccionada = event.target.parentNode;
  if (cartasSeleccionadas[0] !== $cartaSeleccionada) {
    cartasSeleccionadas.push($cartaSeleccionada);
  }
  revelarImagenCarta($cartaSeleccionada);
  if (cartasSeleccionadas.length === 2) {
    comprobarParCartas(cartasSeleccionadas);
  }
  if (paresEncontrados.length === 12) {
    const sonidoJuegoGanado = new Audio(sonidoGanado);
    sonidoJuegoGanado.play();
    agregarTiempoJugadoAMensajeFinal();
    mostrarMensajeJuegoGanado();
  }
};

export function vaciarImagenesCartas() {
  const $imagenesCartas = document.querySelectorAll('.reverso');
  $imagenesCartas.forEach(function ($imagen) {
    $imagen.setAttribute('src', '');
  });
}

function ocultarImagenCarta($carta) {
  const $imagenCarta = $carta.childNodes[0];
  $imagenCarta.style.opacity = '0';
}

export function mostrarCartas() {
  paresEncontrados = [];
  const $cartas = document.querySelectorAll('.carta');
  $cartas.forEach(function ($carta) {
    ocultarImagenCarta($carta);
    setTimeout(function () {
      $carta.style.opacity = '1';
      $carta.style.visibility = 'visible';
    }, 300);
  });
}

function Tablero() {
  let key = 1;
  const getCartas = () => {
    const cartas = [];
    const CARTAS_POR_FILA = 8;
    for (let i = 0; i < CARTAS_POR_FILA; i++) {
      cartas.push(<Carta key={key} />);
      key++;
    }
    return cartas;
  };

  return (
    <div id="tablero" className="col-10">
      <div className="row">{getCartas()}</div>
      <div className="row">{getCartas()}</div>
      <div className="row">{getCartas()}</div>
    </div>
  );
}

export default Tablero;
