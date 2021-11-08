import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Seções/Navbar';
import Header from './Seções/Header';
import Sobre from './Seções/Sobre';
import Habilidades from './Seções/Habilidades';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Sobre />
      <Habilidades />
    </>
  );
}

export default App;
