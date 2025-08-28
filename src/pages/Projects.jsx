import React, { useEffect, useState } from "react";
import myAPic from '../assets/my.png';
import badge from '../assets/about/badge.png';
import badgeD from '../assets/about/badgeD.png';
import book from '../assets/about/book.png';
import bookD from '../assets/about/bookD.png';
import { BookOpen } from 'react-feather';
import { electron,react,nodejs,express,mongodb,threejs, tailwindcss, github, typescript, vercel, javascript } from "../assets/icons";
import Portfolio1 from '../assets/projects/portfolio.png';
import posSystem from '../assets/projects/posgif.gif'
import mernEC from '../assets/projects/mernECgif.gif'
import ecommerceBoat from '../assets/projects/allinone.png'
import gobigif from '../assets/projects/gobigif.gif'
import PersonalPortfolio from '../assets/projects/127gif.gif'
import Portfolio3D from '../assets/projects/3dgif.gif'
import { FaGithub } from "react-icons/fa";



function Projects() {
 const [fullscreenImg, setFullscreenImg] = useState(null);

const projects = [
  {
    title: ["MERN Stack", "Ecommerce Site"],
    description: "🛍️ A full-stack web app built with the MERN stack. Features include JWT auth, Stripe payments, cart management, admin panel, and user reviews — designed as a capstone project focused on clean, scalable full-stack architecture.",
    image: mernEC,
    tech: [react, nodejs, express, mongodb, javascript],
    links: {
      website: false,
      github:"https://github.com/player127-monster/ecommerce",
      note: "A foundational full-stack learning project accelerated through YouTube tutorials."
    },
    link:true
  },
  {
    title: ["React, LokiJS & ElectronJS", "Offline Billing System"],
    description: "🧾 A lightweight POS desktop app using React, Electron, and LokiJS. Enables real-time item tracking, customer records, and invoice PDF generation — fully offline, fast, and ideal for small businesses needing simple billing.",
    image: posSystem,
    tech: [react, electron, javascript, "LokiJS"],
    links: {
      website: false,
      github:false,
      note: "Source code and installer kept private due to project confidentiality."
    },
    link:false
  },
  {
  title: ["MERN Stack - TypeScript", "Ecommerce Site"],
description: "🛒 A scalable ecommerce site with MERN and TypeScript. Deployed both frontend and backend using Vercel, with database hosted on MongoDB Atlas, supporting Google OAuth2.0 login and secure checkout flow with cash on delivery.",
  image: ecommerceBoat,
  tech: [react, nodejs, express, mongodb, typescript, vercel ],
  links: {
    website: "https://all-in-one-rosy.vercel.app/",
    github: "https://github.com/player127-monster/ecommerce",
    note: "Exploring Bolt AI, prompt engineering, and low-code workflows — includes Google OAuth2.0.",
  },
  link:false
  },
  {
    title: ["React & Three.js", "3D  Portfolio"],
    description: "🌐 A dynamic portfolio built using React and Three.js. Features 3D models, animations, and camera movement to present web dev skills in an engaging way. Optimized for desktop, mobile, and responsive screen sizes.",
    image: Portfolio3D,
    tech: [react, threejs, javascript],
    links: {
      website: false,
      github:"https://github.com/player127-monster/portfolio",
      note: "An experimental 3D web experience guided by ChatGPT and YouTube resources."
    },
    link:true
  },
  {
    title: ["React & Tailwind CSS", "Static Studio Website"],
    description: "🎨 A static site created with React and Tailwind CSS. Combines modern layout, smooth scroll, router navigation, and Spline 3D visuals for creative presentation — ideal for personal branding or studio portfolios.",
    image: gobigif,
    tech: [react, tailwindcss, javascript],
    links: {
      website: "https://gobistudio.pages.dev/",
      github:"https://github.com/player127-monster/gobi_studio",
      note: "An independently developed project exploring advanced front-end design patterns, routing, and 3D integration using Spline."
    },
    link:true
  },
  {
    title: ["React & Tailwind CSS", "Personal Portfolio"],
    description: "🧑‍💻 A clean developer portfolio with React and Tailwind CSS. Includes light/dark mode, scroll-based sections, responsive layout, and EmailJS integration — styled using a minimal palette with focus on UI clarity.",
    image: PersonalPortfolio,
    tech: [react, tailwindcss, javascript],
    links: {
      website: "https://sanjith.vercel.app/",
      github:false,
      note: "A fully responsive and interactive personal portfolio showcasing developer skills and project highlights."
    },
    link:false
  },

];




  return (
    <section  className="flex flex-col w-full h-auto font-poppins justify-center bg-primary/5 dark:bg-primary/85 pt-28">
      <div id="projects" className="flex flex-col items-center">
        <p className="text-lg font-light text-textBase/75">Browse My Recent</p>
        <p className="text-6xl font-extrabold text-textBase/85 mt-2">Projects</p>
      </div>

     <div className="flex flex-wrap gap-10 w-full justify-center p-10 pt-28 ">
        

        {projects.map((project, index) => (
          <div key={index} className="md:w-[80%] lg:w-[400px] h-auto rounded-2xl border-2 border-solid border-textBase/25 p-7 flex flex-col space-y-5">
            <h3 className="text-2xl font-light text-center  text-gray-600/85 dark:text-textBase/45">
              {project.title[0]}<br /><span className="text-3xl font-light text-center text-textBase/85 dark:text-textBase/75">{project.title[1]}</span>
            </h3><div className="overflow-hidden rounded-xl mt-4 w-full h-52">
             <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-contain transition-transform duration-300 ease-in-out hover:scale-110"
                onClick={() => setFullscreenImg(project.image)} // open fullscreen on click
              />
            </div>

            <p className="text-textBase/30 mt-2 text-justify">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {project.tech.map((t, i) => ( t!=="LokiJS"?
                <img src={t} key={i} className="bg-gray-200 text-xs px-2 py-1 rounded w-8 h-8 object-contain">
                  
                </img>
                :
                <span key={i} className="bg-gray-200 text-textBase/85 dark:text-primary/85 text-xs px-2 py-1 pt-2 rounded">
                  {t}
                </span>
              ))}
            </div>
            {(
               
              <div className="flex md:flex-row flex-col justify-between">
                {project.links.website && <a href={project.links.website} target="_blank" rel="noopener noreferrer" className="py-2 px-2 w-[60%] md:w-auto md:pr-3 rounded-full bg-primary/0 text-textBase hover:bg-textBase/85 hover:text-primary/85 transition-colors mt-2">
                  🔗 View project
                </a>}

                {project.links.github && <a href={project.links.github} target="_blank" rel="noopener noreferrer"
                  className="py-2 px-2 rounded-full w-[60%] md:w-auto bg-primary/0 text-textBase hover:bg-textBase/85 hover:text-primary/85 transition-colors mt-2">
                  <div className="flex gap-2 ">
                    <FaGithub className="w-6 h-6" /><span> Visit project</span>
                  </div>
                </a>}
              </div>
            )}
            {project.links.note==="Source code and installer kept private due to project confidentiality."? 
            <p className="text-sm text-textBase/65 mt-2">{project.links.note}</p>
            :
            <p className="text-sm text-textBase/85 mt-2">{project.links.note}</p>}
          </div>
        ))}
       {fullscreenImg && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 cursor-zoom-out p-4"
          onClick={() => setFullscreenImg(null)}
        >
          <div className="max-w-[80vw] max-h-[80vh]">
            <img
              src={fullscreenImg}
              alt="Enlarged project"
              className="w-full h-full object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}

        
      </div>

    
    </section>
  );
}

export default Projects;
