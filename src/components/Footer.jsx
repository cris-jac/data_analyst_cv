import React from 'react'
import {SiGithub} from 'react-icons/si'

const Footer = () => {
  return (
    <div className='w-full min-h-30 bg-slate-800 mt-6 flex flex-col bottom-0'>

      <div className='flex justify-between items-center py-2'>
        <div className='mx-10 flex flex-col'>
          <p className='text-slate-50 font-bold'>About this website</p>
          <p className='text-slate-50 text-sm'>This website was built with React and other libraries by me</p>
          {/* <SiReact className='text-white'></SiReact> */}
        </div>
        
        <div className='px-10 flex flex-col sm:items-end'>
          <p className='text-slate-50 font-bold'>Networks</p>
          <p className='text-slate-50 text-sm'>You can follow me on:</p>
          <SiGithub className='text-slate-50 '></SiGithub>
        </div>
      </div>

      <div className='flex items-center justify-center py-2'>
        <p className='text-slate-50 text-sm '>©2023 - All rights reserved</p>
      </div>

      
    </div>
  )
}

export default Footer
