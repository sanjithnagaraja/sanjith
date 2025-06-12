import React, { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import ThemeToggle from "../components/ThemeToggle";


function Footer() {




    const navLinks=[
        {href:"about", name:"About"},
        {href:"experience", name:"Experience"},
        {href:"projects", name:"Projects"},
        {href:"contact", name:"Contact"}
    ]

  return (
    <section className="w-full flex-col font-poppins justify-around bg-primary/5 dark:bg-primary/85 p-5 pt-2 md:pt-1">

   
        
        <div className="w-full hidden md:flex gap-7 font-light text-textBase/75 justify-center">
            {navLinks.map((navLink,index)=>(
                    <Link
                    key={index}
                    to={navLink.href}
                    smooth={true}
                    duration={600}
                    offset={-70}
                    className={`cursor-pointer px-4 py-1 font-poppins rounded-xl text-3xl font-light lg:hover:scale-110 transition-all duration-700`}
                  >
                    {navLink.name}
                  </Link>
            ))
            }
        </div>

        

        <div className="flex gap-2 justify-center w-full pt-10 p-2">
          <p className="text-center text-xs xl:text-sm font-medium text-textBase/75">Copyright  &copy; 2025 Sanjith </p>
          <p className="text-center text-xs xl:text-sm font-medium text-textBase/75">|</p>
          <p className="text-center text-xs xl:text-sm font-medium text-textBase/75">All rights Reserved</p>
        </div>
    </section>
  )
}

export default Footer;
