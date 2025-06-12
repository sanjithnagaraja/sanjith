import React, { useEffect, useState } from "react";
import myAPic from '../assets/my.png';
import badge from '../assets/about/badge.png';
import badgeD from '../assets/about/badgeD.png';
import book from '../assets/about/book.png';
import bookD from '../assets/about/bookD.png';
import { BookOpen } from 'react-feather';
import { electron,react,nodejs,express,mongodb,threejs, tailwindcss } from "../assets/icons";
import Portfolio1 from '../assets/projects/portfolio.png'
import posSystem from '../assets/projects/posgif.gif'
import mernEC from '../assets/projects/mernECgif.gif'
import gobigif from '../assets/projects/gobigif.gif'


function Projects() {

const projects = [
  {
    title: ["MERN Stack", "Ecommerce Site"],
    description: "🛒 An offline e-commerce-like billing system tailored for hardware stores, built using the MERN stack and Electron. Features include customer and item management, invoice creation, and exportable PDFs — optimized for local desktop use without internet dependency.",
    image: mernEC,
    tech: [react, nodejs, express, mongodb],
    links: {
      video: "https://your-website-link.com/mern-ecommerce",
      note: "A foundational full-stack learning project accelerated through YouTube tutorials."
    }
  },
  {
    title: ["React, LokiJS & ElectronJS", "Offline Billing System"],
    description: "🧾 A desktop-based POS system built with React, Electron, and LokiJS. Enables seamless invoice generation, real-time item/customer updates, and PDF printing — fully offline, lightweight, and ideal for small businesses.",
    image: posSystem,
    tech: [react, electron, "LokiJS"],
    links: {
      video: "https://your-website-link.com/offline-billing",
      note: "Source code and installer kept private due to project confidentiality."
    }
  },
  {
    title: ["React & Three.js", "3D Developer Portfolio"],
    description: "🌐 An interactive 3D portfolio using React and Three.js to showcase skills in web-based 3D graphics. The project explores camera animations, lighting, model integration, and responsive design using Three.js in React.",
    image: Portfolio1,
    tech: [react, threejs],
    links: {
      video: "https://your-website-link.com/3d-portfolio",
      note: "An experimental 3D web experience guided by ChatGPT and YouTube resources."
    }
  },
  {
    title: ["React & Tailwind CSS", "Static Studio Website"],
    description: "🎨 A visually engaging static website built using React and Tailwind CSS, featuring both scroll-based sections and router-based navigation. Integrated with Spline 3D scenes to enhance visual storytelling and user interaction — optimized for modern design presentation.",
    image: gobigif,
    tech: [react, tailwindcss],
    links: {
      video: "https://gobistudio.pages.dev/",
      note: "An independently developed project exploring advanced front-end design patterns, routing, and 3D integration using Spline."
    }
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
            {project.links.video && (
              <a href={project.links.video} target="_blank" rel="noopener noreferrer" className="text-blue-400/85 block mt-4">
                🔗 Visit project
              </a>
            )}
            {project.links.note==="Source code and installer kept private due to project confidentiality."? 
            <p className="text-sm text-textBase/65 mt-2">{project.links.note}</p>
            :
            <p className="text-sm text-textBase/85 mt-2">{project.links.note}</p>}
          </div>
        ))}
      

        
      </div>

    
    </section>
  );
}

export default Projects;
