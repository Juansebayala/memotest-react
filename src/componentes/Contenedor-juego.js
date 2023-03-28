import Menu from './Menu';
import Tablero from './Tablero';

function ContenedorJuego() {
  return (
    <div id="contenedor-juego" className="container-fluid">
      <div className="row">
        <Menu />
        <Tablero />
      </div>
    </div>
  );
}

export default ContenedorJuego;
