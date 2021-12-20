import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function CardTimeline ({company, area, tasks, year, period}) {
  return (
  <VerticalTimeline >
    <VerticalTimelineElement
      // data = {data}
      className="vertical-timeline-element--work"
      contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date={`${year} - ${period}`}
      iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
    >
      <h3 className="vertical-timeline-element-title">{company}</h3>
      <h4 className="vertical-timeline-element-subtitle">{area}</h4>
      <ul>
        {
          tasks.map((task) => <li >{task}</li>)
        }
      </ul>
    </VerticalTimelineElement>
  </VerticalTimeline>
  );
};

export default CardTimeline;