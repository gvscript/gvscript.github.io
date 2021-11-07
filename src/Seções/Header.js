import React from 'react';
import Type from 'react-typed';

const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <h1>Desenvolvedor Web Full-Stack</h1>
        <Type 
          className="typed-text"
          strings={[
            'VScode',
            'HTML5',
            'CSS3',
            'JavaScript',
            'React',
            'Redux',
            'Context API',
            'Jest',
            'MongoDB',
            'MySQL',
            'NodeJS',
            'Express',
            'NPM',
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
        <a href="#" className="btn-main-offer">CONTATO</a>
      </div>
    </div>
  )
};

export default Header