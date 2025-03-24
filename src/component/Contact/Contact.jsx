import React from "react";
import contact from "../../assets/contact.png"
import "./Contact.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)


function Contact() {

  useGSAP(()=>{
    gsap.from(".leftcontact img",{
      x:-100,
      duration:1,
      opacity:0,
      stagger:1, 
      scrollTrigger:{
        trigger:".leftcontact img",
        scroll:"body",
        scrub:2,
        // markers: true,
        start:"top 60%",
        end:"top 30%"
      }
  
    })  
    gsap.from("form",{
      x:100,
      duration:1,
      opacity:0,
      stagger:1, 
      scrollTrigger:{
        trigger:"form",
        scroll:"body",
        scrub:2,
        // markers: true,
        start:"top 60%",
        end:"top 30%"
      }
  
    })  
  })

  return (
   <div id="contact">
   <div className="leftcontact">
    <img src={contact} alt=""/>
   </div>
   <div className="rightcontact">
   <form action='https://formspree.io/f/xqapqnnl' method="POST">
    <input type="text" placeholder="Name" name='Username'></input>
    <input type="email" placeholder="Email" name='Email'></input>
    <textarea name="message" id='textarea' placeholder="Message Me"></textarea>
    <input type="submit" id='btn' value='Submit'></input>
   </form>

   </div>

  </div>
  )
}
export default Contact;
