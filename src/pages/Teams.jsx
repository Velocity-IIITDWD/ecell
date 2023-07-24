import React from 'react'
import './Teams.css'
import Navbar from "../components/Navbar/Navbar"


const Descrp = () => {
  
  const containerStyle = {
  display: 'flex',
  position: 'relative'
  }

  const imageStyle = {
    height: '650px',
    width: '1000px',
    borderRadius: '10px', 
    marginLeft: '270px', 
    marginTop: '70px'
  };
   
  const boxStyle = {
    backgroundColor: '#FFFFFF',
    width: '500px',
    height: '270px',
    padding: '20px',
    borderRadius: '30px',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
    textAlign: 'center',
    position: 'absolute', 
    top: '210%', 
    left: '70%', 
    transform: 'translate(-50%, -50%)', 
  };

  return (
    <main>
      <Navbar/>
     <div style={containerStyle}>
      <div style={{ width: '400px', height: '300px' }}>
        <img src="/unsplash_g1Kr4Ozfoac.png" alt="Descrpimg" style={imageStyle} />
      </div>
    <div style={boxStyle}>
      <p>Description box with text inside it</p>
      </div>
    </div>
      </main>
  );
};

export default Descrp;