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
        <p>Veja só as propriedades unidas e como o texto para definição e/ou alteração da borda de um site fica:

        border: border-width border-style border-color (ou seja: tamanho da borda estilo da borda cor utilizada na borda)
        No entanto, na hora de montar o texto, é  preciso que a sintaxe de cada uma das propriedades seja feita de forma resumida. Por exemplo:

        border: border-width border-style border-color” ficaria “border: 5px solid black”;
        Para aplicar a largura da borda, é usado o atributo border-width. Veja como ficaria:</p>
        <h3>Qualidades:</h3>
        <Type />
        </div>
      </div>
    </div>
  )
};

export default Sobre