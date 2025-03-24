import React from "react";
import "./About.css";
import Card from "../Card/Card";
import frontend from '../../assets/frontend.png'
import python from '../../assets/python.png'
import mysql from '../../assets/mysql.png'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger)
function About() {

useGSAP(()=>{
  gsap.from(".circle",{
    x:-100,
    duration:1,
    opacity:0, 
    stagger:1,
    scrollTrigger:{
      trigger:".circle",
      scroll:"body",
      scrub:2,
      // markers: true,
      start:"top 60%",
      end:"top 30%"
    }

  })
  gsap.from(".line",{
    x:-100,
    duration:1,
    opacity:0,
    stagger:1, 
    scrollTrigger:{
      trigger:".line",
      scroll:"body",
      scrub:2,
      // markers: true,
      start:"top 60%",
      end:"top 30%"
    }

  })
  gsap.from(".aboutdetails h1",{
    x:-100,
    duration:1,
    opacity:0,
    stagger:1, 
    scrollTrigger:{
      trigger:".aboutdetails h1",
      scroll:"body",
      scrub:2,
      // markers: true,
      start:"top 60%",
      end:"top 30%"
    }

  })
  gsap.from(".aboutdetails ul",{
    y:100,
    duration:1,
    opacity:0,
    stagger:1, 
    scrollTrigger:{
      trigger:".aboutdetails ul",
      scroll:"body",
      scrub:2,
      // markers: true,
      start:"top 60%",
      end:"top 30%"
    }

  })
  gsap.from(".rightabout",{
    x:100,
    duration:1,
    opacity:0,
    stagger:1, 
    scrollTrigger:{
      trigger:".rightabout",
      scroll:"body",
      scrub:2,
      // markers: true,
      start:"top 60%",
      end:"top 30%"
    }

  })
}) 
  return (
    <div id="about">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
      </div>
      <div className="aboutdetails">
       <div className="personalinfo">
        <h1>Personal Info</h1>
        <ul>
            <li>
            <span>NAME</span> : PRIYANSHU VERMA
            </li>
            <li>
            <span>AGE</span> : 20 YEARS
            </li>
            <li>
            <span>GENDER</span> : MALE
            </li>
            <li>
            <span>LANGUAGE KNOWN</span> : HINDI,ENGLISH
            </li>
        </ul>
        </div>
        <div className="education">
        <h1>Education</h1>
        <ul>
            <li>
            <span>DEGREE</span> : BCA 'PURSUING'
            </li>
            <li>
            <span>BRANCH</span> : COMPUTER SCIENCE
            </li>
            <li>
            <span>SGPA</span> : 7.4
            </li>
        </ul>
        </div>
        <div className="skills">
        <h1>Skills</h1>
        <ul>
            <li>FRONT-END DEVELOPER</li>
            <li>PYTHON DEVELOPER</li>
            <li>MYSQL</li>
        </ul>
        </div>
      </div>
    </div>

      <div className="rightabout">
        <Card title='FRONT-END DEVELOPER' image={frontend}/>
        <Card title='PYTHON DEVELOPER' image={python}/>
        <Card title='MYSQL' image={mysql}/>
      </div>
    </div>
  );
}

export default About;
