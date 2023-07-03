import React from 'react';
import  './StartUps.css'
import img1 from '../../images/startUpImg1.svg'
import img2 from '../../images/startUpImg2.svg'
import img3 from '../../images/startUpImg3.svg'

const StartUps = () => {
  const StartUpData = [
    {
      id:1,
      image:img1,
      name:"SOFTPEDIA",
      top:"2%",
      bottom:"unset"
    },
    {
      id:2,
      image:img2,
      name:"BOOKSKEEP",
      bottom:"-2%",
      top:"unset"
    },
    {
      id:3,
      image:img3,
      name:"CARTO",
      top:"2%",
      bottom:"unset"
    },
    {
      id:4,
      image:img3,
      name:"CARTO",
      top:"unset",
      bottom:"-2%"
    }
  ]

  return (
    <div className="startUp-wrapper">
    <div className="startUp-page">
        <div className="startUp-page-title">
            STARTUPS <br className='breakline' /> UNDER <br className='breakline'/> ECELL
        </div>
        <div className="startup-cards">
          {
            StartUpData.map((data)=>(
              <div className="startup-card" key={data.id}>
                <img src={data.image} alt="img" />
               <div className="startUp-name" style={{bottom:`${data.bottom}`, top:`${data.top}`}}>{data.name}</div>
              </div>
            ))
          }
        </div>
    </div>
    </div>
  )
}

export default StartUps;