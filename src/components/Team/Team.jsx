import React, { useEffect, useState } from 'react';import "./Team.css";
import Slider from "react-slick";
import pic1 from "../../images/1.svg";
import pic2 from "../../images/2.svg";
import pic3 from "../../images/3.svg";
import pic4 from "../../images/4.svg";
import pic5 from "../../images/5.svg";
import pic6 from "../../images/6.jpg";
import pic7 from "../../images/7.jpeg";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

const Team = ()=> {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const NextArrow = ({onClick}) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    )
  }

  const PrevArrow = ({onClick}) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    )
  }

const [imgIndex,setImgIndex] = useState(0)

useEffect(() => {
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  window.addEventListener('resize', handleResize);

  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);

const settings = {
  infinite:true,
  lazyLoad: true,
  speed: 300,
  slidesToShow:(windowWidth < 670)?1:5,
  centerMode: true,
  centerPadding: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  beforeChange: (current, next) => setImgIndex(next), 
  innerHeight:0
};

const TeamData = [
    {
        id:1,
        name:"Aniket Raj",
        position: "Team head",
        email:"xyz@gmail.com",
        image:pic1
    },
    {
        id:2,
        name:"A Raj",
        position: "Team head",
        email:"xyz@gmail.com",
        image:pic2
    },
    {
        id:3,
        name:"B Raj",
        position: "Team head",
        email:"xyz@gmail.com",
        image: pic3
    },
    {
        id:4,
        name:"C Raj",
        position: "Team head",
        email:"xyz@gmail.com",
        image:pic4
    },
    {
        id:5,
        name:"Aniket Raj",
        position: "Team head",
        email:"xyz@gmail.com",
        image:pic5
    },
    {
        id:6,
        name:"D Raj",
        position: "Team head",
        email:"xyz@gmail.com",
        image:pic6
    },
    {
        id:7,
        name:"W Raj",
        position: "Team head",
        email:"xyz@gmail.com",
        image:pic7
    },
]

  return (
    <div className="TeamDetails">
      <Slider {...settings} >
        {TeamData.map((data,idx) => (
          <div className={idx === imgIndex ? "slide activeSlide" : "slide"} key={data.id}>  
            <img src={data.image} alt={idx} className="imgSize" />
            <div className="info">
                <p className="name">{data.name}</p>
                <p><span>Position : </span>{data.position} </p>
                <p><span>Email : </span>{data.email}</p>
            </div>
          </div>
        ))}
      </Slider>
      <div className="our-tem">
            <div className="team-btn"> Our team</div>
      </div>
    </div>
  );
}

export default Team;