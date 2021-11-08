import React from 'react';
import CardHability from '../Components/CardHability';
import habilitys from '../Utilis/habilitys.json'


function Habilidades () {
  return (
    <ul className="habilitys-container">
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
    </ul>
  )
}

export default Habilidades