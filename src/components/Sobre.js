import React from 'react';
import foto from '../img/Gabis2.jpeg'

const Sobre = () => {
  return(
    <div id="sobre" class= "about">
      {/* <h2>Sobre</h2> */}
      <div className="content-container">

        <img alt="Foto Gabriel" src={foto}/>
        <div className="about-me">
          <h3>I have a dream</h3>
          <h3>I´m a dreamer</h3>
          <p>
            Eu sou o Gabriel, paulistano residente da Brasilândia zona norte de SP.<br/>
            Um apaixonado por histórias de pessoas reais com o objetivo de utilizar a tecnologia como ferramenta de transformação e inclusão social para um mundo melhor e mais igualitário.
            <br/>
            Sou formado em Publicidade e Propaganda pela PUC/SP e estudante de Desenvolvimento Web Full-Stack na Trybe.
          </p>
          <div className="quality-hooby">
            <div>
              <h4>Qualidades:</h4>
              <ul>
                <li>Empatia</li>
                <li>Humildade</li>
                <li>Comunicação</li>
                <li>Senso coletivo</li>
              </ul>
            </div>
            <div>
              <h4>O que curto:</h4>
              <ul>
                <li>Música</li>
                <li>Cozinhar</li>
                <li>Bares</li>
                <li>Dar risada</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Sobre