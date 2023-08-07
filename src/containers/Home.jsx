import React from 'react';
import HomeImg from '../assets/cloud.png';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='h-screen w-full flex items-center'>

        {/* <div className='max-w-screen-lg mx-auto flex-row'></div> */}

        <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row md:justify-between px-10 my-10 items-center'>

            <div className='flex flex-col md:w-1/2 w-full md:justify-items-center h-full content-between items-center md:items-stretch'>
                <p className='text-xl font-bold'>Cristian Apaza</p>
                <p className='text-lg font-semibold my-6'>Data Analyst</p>
                <button type='button' className='rounded-full bg-gradient-to-tr from-slate-950 via-slate-700 to-slate-800 hover:bg-gradient-to-bl text-white font-bold text-center text-md py-2.5 px-5 w-fit'>
                  <Link to='contact' smooth duration={200} offset={-60}>
                    <p>Let's talk</p>
                  </Link>
                </button>
            </div>

            <div className='w-4/5 sm:w-3/5 md:w-1/2 my-12 z-0'>
                <img className='opacity-25 hover:opacity-100 transition ease-in-out ' src={HomeImg} alt=''/>
            </div>
        </div>
      
    </div>
  )
}

export default Home
