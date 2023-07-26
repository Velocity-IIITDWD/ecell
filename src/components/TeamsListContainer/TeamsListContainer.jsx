import React from 'react'
import './TeamsListContainer.css'
import TeamMemberCard from '../TeamMemberCard/TeamMemberCard';

function TeamsListContainer(props) {
  return (
    <div className='teams-list-container'>
        <div className='hr'/>
        <div className='heading'>{props.heading}</div>
        <div className='teams-list-scroll'>
          {
            props.ManagementTeamData.map((data)=>(
              <div className="TeamDataCard" key={data.id}>
                <TeamMemberCard data = {data}/>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default TeamsListContainer;