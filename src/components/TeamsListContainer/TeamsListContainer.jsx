import React, { useRef } from 'react';
import './TeamsListContainer.css';
import TeamMemberCard from '../TeamMemberCard/TeamMemberCard';
import { BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';

function TeamsListContainer(props) {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -100, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 100, behavior: 'smooth' });
    }
  };

  return (
    <div className='teams-list-container'>
      <div className='scroll-button-left' onClick={scrollLeft}>
        <BsCaretLeftFill />
      </div>
      <div className='hr' />
      <div className='heading'>{props.heading}</div>
      <div className='teams-list-scroll' ref={scrollContainerRef}>
          {props.ManagementTeamData.map((data) => (
            <div className='TeamDataCard' key={data.id}>
              <TeamMemberCard data={data} />
            </div>
          ))}
      </div>
      <div className='scroll-button-right' onClick={scrollRight}>
        <BsCaretRightFill />
      </div>
    </div>
  );
}

export default TeamsListContainer;
