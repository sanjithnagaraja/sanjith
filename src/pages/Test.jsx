import React, { useEffect, useState } from "react";
import { Link } from 'react-scroll';
import ThemeToggle from "../components/ThemeToggle";


function Test() {


  

    const [toggleMenu,setToggleMenu]=useState(false);

    const navLinks=[
        {href:"about", name:"About"},
        {href:"experience", name:"Experience"},
        {href:"projects", name:"Projects"},
        {href:"contact", name:"Contact"}
    ]

  return (
    <section className="w-full flex justify-around bg-primary/5 p-7 pb-0">
    <div className="bg-primary/85 text-textBase/85 p-4 rounded-lg">
  <p>This text and background changes with theme.</p>
</div>


        <div>
            <ThemeToggle/>
        </div>
    </section>
  )
}

export default Test;
