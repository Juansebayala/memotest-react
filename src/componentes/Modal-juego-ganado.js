import Reiniciar from './Reiniciar';
import '../css/Modal.css';
import bootstrap from '../../node_modules/bootstrap/dist/js/bootstrap';

const crearModalJuegoGanado = () => {
  const $modal = new bootstrap.Modal(
    document.querySelector('#modal-juego-ganado')
  );
  return $modal;
};

export const mostrarMensajeJuegoGanado = () => {
  const $modal = crearModalJuegoGanado();
  $modal.show();
};

export function agregarTiempoJugadoAMensajeFinal() {
  const $tiempoJugado = document.querySelector('#tiempo-jugado');
  const $tiempoJugadoModal = document.querySelector('#tiempo-jugado-span');
  $tiempoJugadoModal.textContent = $tiempoJugado.textContent;
}

function ModalJuegoGanado({ onClick }) {
  return (
    <div
      id="modal-juego-ganado"
      className="modal fade"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-body mx-auto text-center">
            <div className="alert alert-success" role="alert">
              Haz ganado!!!
            </div>
            <p className="tiempo-jugado-modal">
              Tiempo jugado: <span id="tiempo-jugado-span">00:00</span>
            </p>
            <Reiniciar onClick={onClick} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalJuegoGanado;
