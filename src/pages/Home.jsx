
// import { Linkedin } from "react-feather";
// import { GitHub } from "react-feather";
// import React from "react";
import myPic from '../assets/my.png';
// import { github, linkedin } from "../assets/icons";
// import linkedin1 from '../assets/icons/linkedin1.svg';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from 'react-scroll';
import { ReactTyped } from "react-typed";


function Home() {

  return (
    <section id="home" className="flex flex-col-reverse lg:flex-row gap-5 lg:gap-2 w-full h-[700px] md:h-[750px] xl:h-screen bg-primary/5  dark:bg-primary/85 justify-end items-center text-textBase">


        
        <div className="flex lg:flex-col lg:w-1/2 lg:h-full justify-center items-end font-poppins gap-2">
            <div className="w-[500px] h-auto "> 
            <div className="flex flex-col gap-2 text-center w-full p-2">
                <p className=" text-xl md:text-2xl font-normal text-gray-600/85">Hello, I'm</p>
                <p className="text-6xl md:text-7xl font-bold text-textBase/85">Sanjith</p>
                {/* Typewriter effect here */}
            <p className="pt-1 text-3xl md:text-4xl font-normal text-gray-600/65 text-left md:pl-14 pl-24">
  <ReactTyped
    strings={[
      "Full Stack Developer",
      "Frontend Developer",
    ]}
    typeSpeed={90}
    backSpeed={90}
    backDelay={1500}
    loop
    showCursor={true} // keeps the blinking cursor at the end
    cursorChar="|"   // optional: customize cursor
  />
</p>

            </div>
            <div className="flex flex-row gap-3 font-medium justify-center p-2">
            <a
              href="/Sanjith_Resume.pdf"
              download
              className="rounded-3xl border-solid border-2 border-textBase text-sm font-normal text-textBase/85 px-4 py-3 hover:bg-textBase/85 hover:text-primary/85 transition-all duration-500"
            >
                Download CV
              </a>                
              <Link
                  to="contact"
                  smooth={true}
                  duration={600}
                  offset={-70}
                  className="rounded-3xl bg-textBase/85 border-solid border-2 border-textBase/85 text-sm font-normal text-primary/85 px-4 py-3 hover:bg-primary/5 hover:text-textBase/85 transition-all duration-500"
                >
                  Contact Info
                </Link>
            </div>
            <div className="flex justify-center gap-5 pt-1">
                 {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/nagaraja-sanjith" target="_blank" rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/0 text-textBase hover:bg-textBase/85 hover:text-primary/85 transition-colors">
                  <FaLinkedin className="w-6 h-6 object-contain" />
                </a>

                {/* GitHub */}
                <a href="https://github.com/player127-monster" target="_blank" rel="noopener noreferrer"
                  className="p-2 rounded-full bg-primary/0 text-textBase hover:bg-textBase/85 hover:text-primary/85 transition-colors">
                  <FaGithub className="w-6 h-6" />
                </a>
            </div>
            </div>
        </div>


        <div className="group lg:w-1/2 lg:h-full flex flex-col justify-center items-start bg-opacity-75 p-5 pt-10 lg:pt-0 ">
                <div className="relative w-80 h-80 md:w-96 md:h-96 m-0 rounded-full z-5 bg-slate-50/85  flex justify-center items-center border-2 border-solid  group-hover:border-slate-50/85 group-hover:border-2 group-hover:border-solid  border-zinc-800/85 md:group-hover:border-zinc-800/85 transition-all duration-500">
                    <img
                        src={myPic}
                        alt="Sanjith"
                        className="w-full h-full object-cover rounded-full rounded-b-none mr-6 absolute -bottom-1"
                    />
        </div>

        </div>

        
    </section>
  )
}

export default Home;
