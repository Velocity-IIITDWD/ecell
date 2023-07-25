import React from 'react'
import './TeamsListContainer.css'

function TeamsListContainer({heading,content}) {
  return (
    <div className='teams-list-container'>
        <div className='hr'/>
        <div className='heading'>{heading}</div>
        <div className='teams-list-scroll'></div>
    </div>
  )
}

export default TeamsListContainer