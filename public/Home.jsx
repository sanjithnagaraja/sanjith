import React from "react";
import myPic from '../assets/my.png';

function Home() {

  return (
    <section id="home" className="flex gap-2 w-full h-screen bg-primary/5 justify-end items-center">

        
        <div className="flex lg:flex-col lg:w-1/2 lg:h-full justify-center items-end font-poppins gap-2">
            <div className="w-[500px] h-auto "> 
            <div className="flex flex-col gap-2 text-center w-full p-2">
                <p className="text-2xl font-normal text-gray-600/85">Hello, I'm</p>
                <p className="text-7xl font-bold text-textBase/85">Sanjith</p>
                <p className="pt-1 text-4xl font-normal text-gray-600/65">Frontend Developer</p>
            </div>
            <div className="flex flex-row gap-3 font-medium justify-center p-2">
                <button className="rounded-3xl border-solid border-2 border-secondary text-sm font-normal text-black/85 px-4 py-3 hover:bg-zinc-800/85 hover:text-white/85 transition-all duration-500">Download CV</button>
                <button className="rounded-3xl bg-black/85 border-solid border-2 border-black/85 text-sm font-normal text-white/85 px-4 py-2 hover:bg-white/5 hover:text-black/85 transition-all duration-500">Contact Info</button>
            </div>
            <div className="hero-section">

            </div>
            </div>
        </div>


        <div className="group lg:w-1/2 lg:h-full flex flex-col justify-center items-start bg-opacity-75 p-5 pt-0">
                <div className="w-96 h-96 m-0 rounded-full z-5 bg-slate-50/85  flex justify-center items-center border-2 border-solid border-slate-50/85 group-hover:border-2 group-hover:border-solid group-hover:border-zinc-800/85 transition-all duration-500">
                    <img
                        src={myPic}
                        alt="Sanjith"
                        className="w-full h-full object-cover rounded-full rounded-b-none mr-6 "
                    />
        </div>

        </div>

    </section>
  )
}

export default Home;
