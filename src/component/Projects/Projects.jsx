import React, { useState } from 'react'
import Card from '../Card/Card'
import "./Projects.css"
import dairybasket from "../../assets/dairybasket.png"
import roomify from "../../assets/roomify.png"
import website from "../../assets/websiteclone.png" 
import todolist from "../../assets/to-do-list.png"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { FiChevronDown } from 'react-icons/fi'
gsap.registerPlugin(ScrollTrigger)

function Projects() {
  const [showLinks, setShowLinks] = useState(false);

  useGSAP(()=>{
    gsap.from("#sizing",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1, 
      scrollTrigger:{
        trigger:"#sizing",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"
      }
    })
    gsap.from("#sizing2",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1, 
      scrollTrigger:{
        trigger:"#sizing2",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"
      }
    })
    gsap.from(".slider",{
      y:100,
      duration:1,
      opacity:0,
      stagger:1, 
      scrollTrigger:{
        trigger:"slider",
        scroll:"body",
        scrub:2,
        start:"top 60%",
        end:"top 30%"
      }
    })
  })  

  return (
    <div id='projects'>
      
      <h1 id='sizing'>FRESHER</h1>
      <h2 id='sizing2'>COMPLETE 3 MONTHS ONLINE INTERNSHIP</h2>
      {/* Top Box with Links */}
      <div className="project-links-box">
        <button 
          className="fancy-link-btn" 
          onClick={() => setShowLinks(!showLinks)}
        >
          Project Links <FiChevronDown className={`chevron ${showLinks ? 'rotate' : ''}`} />
        </button>
        {showLinks && (
          <div className="links-dropdown">
            <a href="https://github.com/Priyanxhu01/To-Do-App" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt /> To-Do App
            </a>
            <a href="https://github.com/Priyanxhu01/Roombooking" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt /> Room Booking
            </a>
            <a href="https://prisc808.pythonanywhere.com/" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt /> PythonAnywhere App
            </a>
            <a href="https://priyanxhu01.github.io/basic_website/" target="_blank" rel="noopener noreferrer">
              <FaExternalLinkAlt /> Basic Website
            </a>
          </div>
        )}
      </div>


      <div className='slider'>
        <Card title='Dairy Basket' image={dairybasket}/>
        <Card title='Roomify' image={roomify}/>
        <Card title='WebsiteClone' image={website}/>
        <Card title='ToDoList' image={todolist}/>
      </div>
    </div>
  )
}

export default Projects
