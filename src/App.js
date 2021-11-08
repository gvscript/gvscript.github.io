import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Header,
  Sobre,
  Habilidades
} from './Seções'

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
