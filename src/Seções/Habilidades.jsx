import React from 'react';
import CardHability from '../Components/CardHability.jsx';
import habilitys from '../Utilis/habilitys.json'


function Habilidades () {
  return (
    <div id="habilidades" className="habilitys-container">
      <h2>Linguagens e Ferramentas</h2>
      <div className="cards-container">
        {
          habilitys.map((h) => (
            <CardHability
            key={ h.id }
            site={ h.site }
            name={ h.name }
            icon={ h.icon }
            />
            ))
          }
      </div>
    </div>
  )
}

export default Habilidades