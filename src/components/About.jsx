import React from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const About = () => {

useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className=' min-h-screen w-screen'>
        <div className=' relative mb-8 mt-36 flex flex-col items-center gap-5'>
          <h2 className=' font-mono text-sm uppercase md:text-[15px]'>
              Welcome Call Of Duty
          </h2>
          <div className='mt-5 text-center text-4xl  uppercase leading-[0.8] md:text-[6rem]'>
              Discover the world's largest shared adventure
          </div>
         <div className="about-subtext ">
             <p>A fast-paced, military-grade FPS experience</p>

             <p className="text-gray-500">
                 Step into the boots of elite soldiers across gritty battlegrounds worldwide.
                 Master powerful weapons, outmaneuver your enemies, and dominate every mission
                  through strategy, precision, and pure combat skill.
           </p>
     </div>
   </div>
   <div className="h-dvh w-screen" id="clip">
         <div className="mask-clip-path about-image">
           <img
            src="img/about.jpeg"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
 </div>
  )
}

export default About