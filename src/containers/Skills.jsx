import React from 'react';
import { SiPython, SiR, SiJavascript, SiMysql, SiMicrosoftsqlserver, SiMicrosoftexcel, SiLibreoffice, SiTableau, SiPowerbi, SiArcgis, SiQgis, SiGithub } from 'react-icons/si';

const skills = [
  {id: 1, Skill: SiPython, iName: "Python", iColor: "group-hover:fill-[#fccc3c]"},
  {id: 2, Skill: SiR, iName: "R", iColor: "group-hover:fill-[#2066b8]"},
  {id: 3, Skill: SiJavascript, iName: "JavaScript", iColor: "group-hover:fill-[#f0dc4e]"},
  {id: 4, Skill: SiGithub, iName: "Github", iColor: "group-hover:fill-[#000000]"},
  {id: 5, Skill: SiMysql, iName: "MySQL", iColor: "group-hover:fill-[#f8981e]"},
  {id: 6, Skill: SiMicrosoftsqlserver, iName: "MS SQL Server", iColor: "group-hover:fill-[#d34149]"},
  {id: 7, Skill: SiMicrosoftexcel, iName: "Excel", iColor: "group-hover:fill-[#1c975b]"},
  {id: 8, Skill: SiLibreoffice, iName: "Libre Office", iColor: "group-hover:fill-[#5bdd4a]"},
  {id: 9, Skill: SiTableau, iName: "Tableau", iColor: "group-hover:fill-[#345278]"},
  {id: 10, Skill: SiPowerbi, iName: "PowerBI", iColor: "group-hover:fill-[#f5b821]"},
  {id: 11, Skill: SiArcgis, iName: "ArcGIS", iColor: "group-hover:fill-[#1178d9]"},
  {id: 12, Skill: SiQgis, iName: "QGIS", iColor: "group-hover:fill-[#6DA633]"} 
]

const Skills = () => {
  return (
    <div name='skills' className='md:h-screen w-full'>
      <div className='max-w-screen-lg mx-auto px-10 align-middle'>

        <div className='flex items-center text-2xl font-semibold bg-gradient-to-r from-slate-500 via-slate-400 to-slate-600 bg-clip-text text-transparent'>
          <p className='py-6'>Skills</p>
        </div>

        <p className='pb-6'>Behind a good data analysis is a better set of tools, and here is mine</p>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6'>
          
          {skills.map(({ Skill, iName, iColor }) => (
            <div className='flex flex-col mx-auto items-center group'>
              <Skill size={80} className={`fill-gray-400 ${iColor} transition group-hover:ease-in`} />
              <p className='text-md font-semibold text-transparent group-hover:text-black transition group-hover:ease-in'>{iName}</p>  
            </div>  
          ))}
          
        </div>
      </div>
    </div>
  )
}

export default Skills
