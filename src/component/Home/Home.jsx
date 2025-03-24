import React from "react";
import "./Home.css";
// import coder from '../../assets/coder.png'
import photo from "../../assets/photo.webp";
import { TypeAnimation } from "react-type-animation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Home() {

useGSAP(()=>{
  let tl1 = gsap.timeline();
  tl1.from(".line1",{
    y:50,
    duration:1,
    opacity:0
  })
  tl1.from(".line2",{
    y:50,
    duration:1,
    opacity:0
  })
  tl1.from(".line3",{
    y:50,
    duration:1,
    opacity:0
  })
  // gsap.fromTo(
  //   "#button",
  //   { scale: 1 },
  //   {
  //     scale: 1.1,
  //     duration: 0.3,
  //     ease: "power1.inOut",
  //     paused: true,
  //     yoyo: true,
  //     repeat: -1,
  //   }
  // );
  gsap.from(".righthome img",{
    x:200,
    duration:1,
    opacity:0
  })
})  
  return (
    <div id="home">
      <div className="lefthome">
        <div className="homedetails">
          <div className="line1"> 🖐️ I'm</div>
          <div className="line2">PRIYANSHU VERMA</div>
          <div className="line3">
            <TypeAnimation
              sequence={[
                "PYTHON DEVELOPER👨‍💻",
                1000,
                "FRONT-END DEVELOPER👨‍💻",
                1000,
                "CODER",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          <a
            href="https://github.com/Priyanxhu01"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>GitHub</button>
          </a>
        </div>
      </div>
      <div className="righthome">
        <img src={photo} alt="priyanshu" />
      </div>
    </div>
  );
}

export default Home;
