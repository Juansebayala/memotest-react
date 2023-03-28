import { useEffect, useState } from 'react';

const aumentarTiempoJugado = (tiempoJugado) => {
  tiempoJugado[1]++;

  if (tiempoJugado[1] < 10) {
    tiempoJugado[1] = '0' + tiempoJugado[1];
  }
  if (tiempoJugado[1] >= 60) {
    tiempoJugado[0]++;
    tiempoJugado[1] = '00';
  }
  if (tiempoJugado[0] < 10 && tiempoJugado[1] === '00') {
    tiempoJugado[0] = '0' + tiempoJugado[0];
  }
};

function Cronometro({ juegoIniciado }) {
  const [tiempoJugado, setTiempoJugado] = useState('00:00');
  const [intervalID, setIntervalID] = useState();

  useEffect(() => {
    if (juegoIniciado) {
      const tiempoInicial = ['00', '00'];
      let letIntervalID = setInterval(() => {
        aumentarTiempoJugado(tiempoInicial);
        const $tiempoJugado = `${tiempoInicial[0]}:${tiempoInicial[1]}`;
        setTiempoJugado($tiempoJugado);
        setIntervalID(letIntervalID);
      }, 1000);
    } else {
      setTiempoJugado('00:00');
      clearInterval(intervalID);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [juegoIniciado]);

  return (
    <p>
      Tiempo jugado: <span id="tiempo-jugado">{tiempoJugado}</span>
    </p>
  );
}

export default Cronometro;
