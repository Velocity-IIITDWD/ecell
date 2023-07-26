import React from 'react'
import Navbar from "../components/Navbar/Navbar"
import TeamsLandingPage from '../components/TeamsLanding/TeamsLandingPage';
import TeamsListContainer from '../components/TeamsListContainer/TeamsListContainer';
import Member1 from "../images/TeamMemberImage/Member1.jpeg";
import Member2 from "../images/TeamMemberImage/Member2.jpeg";
import Member3 from "../images/TeamMemberImage/Member3.jpeg";

const Teams = () => {
  //SocialMediaTeamData
  const SocialMediaTeamData = [
    {
      id:1,
      name:"Avinash Trivedi",
      position:"Manage Facebook Pages",
      img:Member1
    },
    {
      id:2,
      name:"Sudha Verma",
      position:"Manage Facebook Pages",
      img:Member2
    },
    {
      id:3,
      name:"Suraj Kumar",
      position:"Manage Facebook Pages",
      img: Member3
    },
    {
      id:4,
      name:"Sudha Verma",
      position:"Manage Facebook Pages",
      img:Member2
    },
  ]

  const EventTeamData = [
    {
      id:1,
      name:"Avinash Trivedi",
      position:"Manage Facebook Pages",
      img:Member1
    },
    {
      id:2,
      name:"Sudha Verma",
      position:"Manage Facebook Pages",
      img:Member2
    },
    {
      id:3,
      name:"Suraj Kumar",
      position:"Manage Facebook Pages",
      img: Member3
    },
    {
      id:4,
      name:"Sudha Verma",
      position:"Manage Facebook Pages, Content Manager, CopyWriter ",
      img:Member2
    },
  ]

  return (
    <main className='main'>
      <img src={process.env.PUBLIC_URL +'/Background_vector.png'} className='bg-img' alt="background vector"/>
      <Navbar />
      <TeamsLandingPage/>
      <TeamsListContainer heading={"Social Media Management Team"} ManagementTeamData={SocialMediaTeamData}/>
      <TeamsListContainer heading={"Event Management Team "} ManagementTeamData={EventTeamData}/>
    </main>
  );
};
export default Teams;