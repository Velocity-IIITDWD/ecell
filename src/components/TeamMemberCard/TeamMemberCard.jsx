import React from 'react';
import './TeamMemberCard.css';

const TeamMemberCard = (props) => {
  return (
    <div className="teamMemberCard-wrapper">
      <div className="teamMember-pic">
        <img src={props.data.img} alt="" />
      </div>
      <div className="teamMember-detail">
        <div className="name-position">
          <p className="teamMember-name">{props.data.name}</p>
          <hr />
          <p className="teamMember-position">{props.data.position}</p>
        </div>
        <div className="teamMember-profile-btn">Learn More</div>
      </div>
    </div>

  )
}

export default TeamMemberCard;