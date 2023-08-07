import React from 'react';
import FirstAboutImg from '../assets/book_shp.png';
import SecondAboutImg from '../assets/leaf_shp.png';
import { RiFileUserLine } from 'react-icons/ri';

const About = () => {
  return (
    <div name="about" className='h-screen w-full  items-center '>

        <div className='max-w-screen-lg mx-auto px-10 flex-col'>

        <div className='flex items-center text-2xl font-semibold bg-gradient-to-r from-slate-500 via-slate-400 to-slate-600 bg-clip-text text-transparent'>
            <p className='py-6'>About me</p>
        </div>

            <div className='md:mx-auto mt-4 mb-8 relative'>
                <p className='text-lg'>I'm Cristian, a data analysis enthusiast. I'm an Engineer and also a Software Development student. 
                I like to discover new things, I feel like I do it every day, and when I have something in my sights, I don't hesitate to use all my resources to get there.</p>
                <img src={FirstAboutImg} alt="about" className='opacity-25 absolute top-0 left-20 md:left-10 w-1/4'/>
            </div>

            <p className='italic font bold text-xl'>"Exploring new worlds of information is not only an enjoyable activity, but also helps to make better decisions... this becomes important when these decisions are transformed into benefits"</p>

            <div className='md:mx-auto mt-8 mb-4 relative'>
                <p className='text-lg  '>My interests often relate to cultural and environmental issues, especially when they raise moral dilemmas.
                When I'm not exploring data, programming or learning something new, I like to read books, play videogames, watch movies or just deepen into the lore of these</p>
                <img src={SecondAboutImg} alt="about" className='opacity-25 absolute bottom-0 right-20 md:right-10 w-1/4'/>
            </div>

            
        </div>
      
        <div className='flex flex-col items-center bg-gradient-to-r from-slate-500 via-slate-400 to-slate-600 my-10 py-4 gap-4 opacity-90'>
            <a href="" target='_blank' rel='noreferrer' className='flex flex-col items-center '>
              <p className='text-lg'>Take a look at my CV</p>
              <RiFileUserLine size={60} className='text-slate-800'/>
            </a>              
          </div>
    </div>
  )
}

export default About
