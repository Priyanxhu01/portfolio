import React from 'react'
import Card from '../Card/Card'
import "./Projects.css"
import chatbot from "../../assets/chatbot.png"
import todoapp from "../../assets/todoapp.png"
import shutdown from "../../assets/shutdown.png"
import website from "../../assets/websiteclone.png" 
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

function Projects() {

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
      // markers: true,
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
      // markers: true,
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
      // markers: true,
      start:"top 60%",
      end:"top 30%"
    }

  })
})  
  return (
    <div id='projects'>
      <h1 id='sizing'>FRESHER</h1>
      <h2 id='sizing2'>COMPLETE 3 MONTHS ONLINE INTERNSHIP</h2>
      <div className='slider'>
        <Card title='INTERNSHIP{CHATBOT}' image={chatbot}/>
        <Card title='TO-DO-APP' image={todoapp}/>
        <Card title='SHUTDOWN' image={shutdown}/>
        <Card title='WEBSITECLONE' image={website}/>
      </div>
    </div>
  )
}

export default Projects