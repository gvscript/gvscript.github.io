import React from 'react';


function CardHability ({site, name, icon}) {
  return (
    <a href={ site } target="_blank" rel='noreferrer'>
      <li className="hability-card">
        <img alt={ name } src={ icon } />
      </li>
    </a>
  );
};

export default CardHability;