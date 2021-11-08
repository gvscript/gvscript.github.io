import React from 'react';


function CardHability ({site, name, icon}) {
  return (
    <a href={ site } target="_blank" rel='noreferrer'>
      <div className="hability-card">
        <img alt={ name } src={ icon } />
      </div>
    </a>
  );
};

export default CardHability;