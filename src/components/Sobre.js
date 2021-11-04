import React from 'react';
import foto from '../img/Gabis2.jpeg'
import Type from 'react-typed';

const Sobre = () => {
  return(
    <div class= "about">
      <h2>Sobre</h2>
      <div className="content-container">

        <img alt="Foto Gabriel" src={foto}/>
        <div className="about-me">
        <h3>I have a dream</h3>
        <h3>I´m a dreamer</h3>
        <p>
          Eu sou o Gabriel, paulistano residente da Brasilândia zona norte de SP.<br/>
          Um apaixonado por histórias de pessoas reais com o objetivo de utilizar a tecnologia como ferramenta de transformação, de inclusão social para um mundo melhor e mais igualitário.
          <br/>
          Sou formado em Publicidade e Propaganda pela PUC/SP e estudante de Desenvolvimento Web Full-Stack na Trybe.
        </p>
        <p>
          Uma palavra: Gratidão - por cada dia cheio de possibilidades de me tornar um ser humano melhor que ontem<br/>
          Uma frase: "Amar e mudar as coisas me interesa mais" - Belchior
        </p>
        <h4>Qualidades:</h4>
        <Type 
          className="about-typeText"
          strings={[
            'Comunicação',
            'Respeito',
            'Empatia',
            'Humildade',
            'Senso coletivo',
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
        </div>
      </div>
    </div>
  )
};

export default Sobre