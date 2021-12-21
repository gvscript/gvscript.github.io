import React from 'react';
import CardTimeline from '../Components/CardTimeline';
// import dataTimeline from '../Utilis/dataTimeline';


function Experiencia () {
  return(
    <div id='experiencias' className='exp-container'>
      <h2>Experiência</h2>
      <CardTimeline />

    </div>
    // <div>
    //   {
    //     dataTimeline.map((d) => (
    //       <CardTimeline 
    //         key={d.id}
    //         company={d.company}
    //         area = {d.area}
    //         tasks = {d.tasks}
    //         year = {d.year}
    //         period = {d.period}
          
    //       />)
          
    //     ) 
    //   }
    // </div>
  )
};

export default Experiencia;
