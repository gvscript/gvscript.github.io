import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Header,
  Sobre,
  Habilidades,
  Experiencia,
} from './Seções/index'

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Sobre />
      <Habilidades />
      <Experiencia />
    </>
  );
}

export default App;
