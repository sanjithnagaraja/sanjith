import React, { useEffect, useState } from "react";
import myAPic from '../assets/my2.png';
import badge from '../assets/about/badge.png';
import badgeD from '../assets/about/badgeD.png';
import book from '../assets/about/book.png';
import bookD from '../assets/about/bookD.png';
import { BookOpen } from 'react-feather';


function About() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const checkDark = () => setIsDark(root.classList.contains('dark'));

    // Initial check
    checkDark();

    // Listen to dark mode changes (optional if you toggle class manually)
    const observer = new MutationObserver(checkDark);
    observer.observe(root, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="flex flex-col w-full h-auto font-poppins lg:justify-center bg-primary/5 dark:bg-primary/85 pt-20">
      <div className="flex flex-col items-center">
        <p className="text-lg font-light text-textBase/75">Get to Know more</p>
        <p className="text-5xl font-extrabold text-textBase/85">About Me</p>
      </div>

      <div className="flex flex-col lg:flex-row font-poppins justify-center items-center pt-16">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className=" w-80 h-80 m-0 rounded-3xl  bg-slate-50/85 flex justify-center items-center border-2 border-solid border-primary/85 hover:border-primary/5 transition-all duration-500">
            <div className="relative z-5  w-[80%] h-[80%] mt-16">
              <img
              src={myAPic}
              alt="Sanjith"
              className="absolute bottom-0 w-full h-full object-cover opacity-95 z-10"
            />
            </div>
          </div>
        </div>

        <div className="w-full md:w-2/3 flex flex-col justify-center md:mr-10 p-5">
          <div className="flex flex-col  lg:flex-row gap-7 md:mr-10 p-5 w-full">
            <div className="w-full lg:w-1/2 border-solid border-2 border-textBase/45 rounded-3xl p-5 flex flex-col items-center transition-all">
              <img src={isDark? badgeD: badge} alt="experience" className="w-8 h-8 object-contain" />
              <p className="text-2xl text-textBase/85 font-bold pt-2 hover:scale-105 transition-all duration-300">Experience</p>
              <p className="text-lg font-light text-textBase/65 text-center dark:text-gray-600/85">As a Freelancer</p>
              <p className="text-lg font-light text-textBase/65 text-center dark:text-gray-600/85">Frontend Development</p>
            </div>
            <div className="w-full lg:w-1/2 border-solid border-2 border-textBase/45 rounded-3xl py-5 sm-xs:py-5 sm-xs:p-5 flex flex-col items-center">
              <img src={isDark? bookD: book} alt="experience" className="w-8 h-8 object-contain" />
              <p className="text-2xl text-textBase/85 font-bold pt-2 hover:scale-105 transition-all duration-300">Education</p>
              <p className="text-lg font-light text-textBase/65 text-center dark:text-gray-600/85">Pursuing HND in IT</p>
              <p className="text-lg font-light text-textBase/65 text-center dark:text-gray-600/85">Self-Taught MERN Developer</p>
            </div>
          </div>

          <div className="w-full mr-10 p-5">
            <p className="text-sm font-light text-textBase/55 text-justify hover:scale-105 hover:textBase transition-all duration-300">
              I specialize in building full-stack billing systems using the MERN stack and React + Electron. 
              My offline-first desktop apps feature real-time PDF generation, local data storage, and intuitive UIs. 
              From POS solutions to 3D web portfolios, 
              I blend scalable architecture with practical problem-solving across both web and desktop environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
