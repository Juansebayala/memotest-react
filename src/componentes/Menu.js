import Boton from './Boton';
import '../css/Menu.css';
import {
  agregarParImagenes,
  vaciarImagenesCartas,
  mostrarCartas,
  manejarCartas,
} from './Tablero';
import ModalJuegoGanado from './Modal-juego-ganado';
import { useState } from 'react';
import Cronometro from './Cronometro';
import Reiniciar from './Reiniciar';

const manejarRonda = (inicioJuego) => {
  vaciarImagenesCartas();
  agregarParImagenes();
  const $cartas = document.querySelectorAll('.carta');
  if (inicioJuego) {
    $cartas.forEach(($carta) => {
      $carta.onclick = manejarCartas;
    });
  } else {
    $cartas.forEach(($carta) => ($carta.onclick = () => {}));
  }
};

function Menu() {
  const [botonActivo, setBotonActivo] = useState(true);
  const [juegoIniciado, setJuegoIniciado] = useState(false);

  const comenzarJuego = () => {
    setJuegoIniciado(true);
    setBotonActivo(false);
    manejarRonda(true);
  };

  const reiniciar = () => {
    setJuegoIniciado(false);
    setBotonActivo(true);
    mostrarCartas();
    manejarRonda(false);
  };

  return (
    <div id="menu" className="col menu text-center rounded">
      <ModalJuegoGanado onClick={reiniciar} />
      <div>
        <h2>Menú</h2>
        <Boton
          id="jugar"
          activo={botonActivo}
          className="btn btn-success"
          onClick={comenzarJuego}
        >
          Jugar
        </Boton>
        <Cronometro juegoIniciado={juegoIniciado} cronometro />
        <Reiniciar onClick={reiniciar} />
      </div>
    </div>
  );
}

export default Menu;
