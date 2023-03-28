import './App.css';
import ContenedorJuego from './componentes/Contenedor-juego';
import Footer from './componentes/Footer';

function App() {
  return (
    <div className="App">
      <h1 className="text-center">Juego de memotest</h1>
      <ContenedorJuego />
      <Footer />
    </div>
  );
}

export default App;
