import React, { useEffect, useState } from "react";
import {skills} from '../components/Constants';




function Experience() {

  return (
    <section  className="flex flex-col w-full h-auto font-poppins justify-center bg-primary/5 dark:bg-primary/85 p-5 pt-28">
      <div id="experience" className="flex flex-col items-center w-full">
        <p className="text-lg font-light text-textBase/75">Explore My</p>
        <p className="text-5xl font-extrabold text-textBase/85 pt-1">Experience</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 w-full justify-center items-center pt-20 p-2">
        <div className="w-full md:w-[80%] lg:w-[480px] h-[350px] rounded-3xl border-2 border-solid border-textBase/25 p-5 overflow-auto">
            <p className="text-2xl font-light text-center text-textBase/85 dark:text-textBase/65">Frontend Development</p>
            <div className="grid grid-cols-2 gap-5 mt-5 px-4">
              {skills
                .filter((skill) => skill.type.toLowerCase() === "frontend")
                .map((skill, index) => (
                  <div key={index} className="flex items-center md:gap-3">
                    <div className="flex items-center md:pl-10">
                      {
                      skill.name==="TailwindCSS"
                        ?
                        <img src={skill.imageUrl} alt={skill.name} className="w-7 h-7 md:w-6 md:h-6 object-contain xs:scale-150 sm-xs:scale-100" />
                        :
                        <img src={skill.imageUrl} alt={skill.name} className="w-7 h-7 md:w-6 md:h-6 object-contain" />
                      }                    </div>
                    <div className="flex-col p-2 gap-1">
                      <p className="text-sm font-medium text-textBase/85">{skill.name}</p>
                      <p className="text-xs font-light text-textSecondary/50 dark:text-textSecondary/25">{skill.level}</p>
                    </div>

                  </div>
               ))}
            </div>
        </div>

        <div className="w-full md:w-[80%] lg:w-[480px] h-[350px] rounded-3xl border-2 border-solid border-textBase/25 p-5 overflow-auto">
            <p className="text-2xl font-light text-center text-textBase/85 dark:text-textBase/65">Backend Development</p>
            <div className="grid grid-cols-2 gap-4 mt-5 px-4">
              {skills
                .filter((skill) => skill.type.toLowerCase() === "backend")
                .map((skill, index) => (
                  <div key={index} className="flex items-center md:gap-3">
                    <div className="flex items-center md:pl-10">
                      <img src={skill.imageUrl} alt={skill.name} className="w-6 h-6 object-contain" />
                    </div>
                    <div className="flex-col p-2 gap-1">
                      <p className="text-sm font-medium text-textBase/85">{skill.name}</p>
                      <p className="text-xs font-light text-textSecondary/50 dark:text-textSecondary/25">{skill.level}</p>
                    </div>

                  </div>
               ))}
            </div>
        </div>

        
      </div>

      <div className="flex flex-col lg:flex-row gap-10 w-full justify-center items-center mt-5 md:mt-10 p-2">
        <div className="w-full md:w-[80%] lg:w-[480px] h-[350px] rounded-3xl border-2 border-solid border-textBase/25 p-5 overflow-auto">
            <p className="text-2xl font-light text-center text-textBase/85 dark:text-textBase/65">DataBase and Version Control</p>
            <div className="grid grid-cols-2 gap-4 mt-5 px-4">
              {skills
                .filter((skill) =>
                      ["version control", "database"].includes(skill.type.toLowerCase())
                    ).map((skill, index) => (
                  <div key={index} className="flex items-center md:gap-3">
                    <div className="flex items-center md:pl-10">
                      <img src={skill.imageUrl} alt={skill.name} className="w-6 h-6 object-contain" />
                    </div>
                    <div className="flex-col p-2 gap-1">
                      <p className="text-sm font-medium text-textBase/85">{skill.name}</p>
                      <p className="text-xs font-light text-textSecondary/50 dark:text-textSecondary/25">{skill.level}</p>
                    </div>

                  </div>
               ))}

            </div>
        </div>

        <div className="w-full md:w-[80%] lg:w-[480px] h-[350px] rounded-3xl border-2 border-solid border-textBase/25 p-5 overflow-auto">
            <p className="text-2xl font-light text-center text-textBase/85 dark:text-textBase/65">Extra Programming Languages</p>
            <div className="grid grid-cols-2 gap-4 mt-5 px-4">
              {skills
                .filter((skill) => skill.type.toLowerCase() === "pl")
                .map((skill, index) => (
                  <div key={index} className="flex items-center md:gap-3">
                    <div className="flex items-center md:pl-10">
                      <img src={skill.imageUrl} alt={skill.name} className="w-6 h-6 object-contain" />
                    </div>
                    <div className="flex-col p-2 gap-1">
                      <p className="text-sm font-medium text-textBase/85">{skill.name}</p>
                      <p className="text-xs font-light text-textSecondary/50 dark:text-textSecondary/25">{skill.level}</p>
                    </div>

                  </div>
               ))}
            </div>
        </div>

      </div>


    </section>
  );
}

export default Experience;
