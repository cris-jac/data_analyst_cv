import React from 'react';
import ProjectImg from '../assets/dummy560360.png';
import { Link } from 'react-router-dom';
import NavLinks from '../components/NavLinks';

const projects = [
    {id: 1, name:'p01', title: "Exploratory Data Analysis", descr: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit tempora repudiandae corporis non consequatur dolorem neque praesentium est! Iusto, veritatis?", img: ProjectImg}
]

const Projects = () => {
  return (
    <div name="projects" className='min-h-screen w-full '>

        <div className='flex items-center text-2xl font-semibold bg-gradient-to-r from-slate-500 via-slate-400 to-slate-600 bg-clip-text text-transparent px-10 max-w-screen-lg mx-auto'>
            <p className='py-6'>Projects</p>
        </div>

        <p className='pb-6 px-10 max-w-screen-lg mx-auto'>I'm continously doing new stuff, whether visuals, analysis, or just exploring data. Here some of my uploaded projects</p>

        <div className='flex'>
            <div className='max-w-screen-lg mx-auto'>
                <div className='sm:grid sm:grid-cols-2 sm:gap-x-6 gap-y-4 px-10 '>
                
                    {projects.map(({title, name, descr, img}) => (
                        <Link to={name}>
                            <div className='flex flex-col mx-auto py-4 sm:py-0 gap-2'>
                                <img src={img} />
                                <p className='text-lg font-semibold text-center'>{title}</p>
                                <p className='text-sm text-justify'>{descr}</p>
                            </div>
                        </Link>
                        // <NavLinks></NavLinks>
                        
                    ))}


                </div>
            </div>
        </div>
        
        
    </div>
  )
}

export default Projects
