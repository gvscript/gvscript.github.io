import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Children } from 'react';
import Context from './context';

function Provider({ cildren }) {
  const [dataHabilitys, setDataHabilitys] = useState([]);
  
  const context = {
    dataHabilitys,
    setDataHabilitys
  };
  
  return(
    <Context.Provider value={ context }>
      { Children }
    </Context.Provider>
  )
};

export default Provider;

Provider.proTypes = {
  children: PropTypes.node,
}.isRequired

