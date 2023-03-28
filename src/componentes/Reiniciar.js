import Boton from './Boton';

function Reiniciar({ onClick }) {
  return (
    <Boton
      activo={true}
      className="btn btn-success volver-a-empezar"
      onClick={onClick}
    >
      Reiniciar
    </Boton>
  );
}

export default Reiniciar;
