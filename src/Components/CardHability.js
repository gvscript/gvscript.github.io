import React from 'react';
import habilitys from '../Utilis/habilitys.json';

const Habilidades = () => {
  return (
    <div>
      {
        habilitys.map( (h) => (
          <div>
            <img alt={h.name} src={h.icon} />
          </div>
        ))
      }
    </div>
  );
};

export default Habilidades;