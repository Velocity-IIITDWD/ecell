import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import TeamsLandingPage from '../components/TeamsLanding/TeamsLandingPage';
import TeamsListContainer from '../components/TeamsListContainer/TeamsListContainer';


const Teams = () => {
  return (
    <main className='main'>
      <img src={process.env.PUBLIC_URL +'/Background_vector.png'} className='bg-img' alt="background vector"/>
      <Navbar />
      <TeamsLandingPage/>
      <TeamsListContainer heading={"Social Media Management Team"}/>
      <TeamsListContainer heading={"Event Management Team "}/>
    </main>
  );
};
export default Teams;