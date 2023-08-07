import React from 'react';
import MapChart from '../components/Map';

const Contact = () => {
  return (
    <div name='contact' className='md:h-screen w-full items-center'>
      <div className='flex items-center text-2xl font-semibold bg-gradient-to-r from-slate-500 via-slate-400 to-slate-600 bg-clip-text text-transparent px-10 max-w-screen-lg mx-auto'>
          <p className='py-6'>Contact</p>
        </div>

      <p className='pb-6 px-10 max-w-screen-lg mx-auto'>Now that you know me, let me know you... Let's talk</p>

      <div className='max-w-screen-lg mx-auto flex flex-col md:flex-row px-10'>
        
        <div className='flex flex-col md:w-1/2 w-full mx-auto gap-2'>
            <form className='w-full my-10' action="https://getform.io/f/3c13342c-f8d9-4d88-bd27-ef18163c1ff9" method="POST">
                <div>
                    <label htmlFor="text" className='text-md font-semibold text-gray-900 mb-2'>Name</label>
                    <input type="text" name='name' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5' placeholder='Robert B. Weide' required/>
                </div>

                <div>
                    <label htmlFor="email" className='text-md font-semibold text-gray-900 mb-2'>Email</label>
                    <input type="email" name='mail' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5' placeholder='name@data.com' required/>
                </div>

                <div>
                    <label htmlFor="msg" className='text-md font-semibold text-gray-900 mb-2'>Message</label>
                    <textarea rows='4' name='message' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5' placeholder='I would like to...'/>
                </div>

                <button type='submit' className='text-md rounded-lg px-5 py-2.5 text-center text-white bg-black'>Send</button>
            </form>
        </div>

        <div className='md:w-1/2 w-full'>
            <MapChart></MapChart>
        </div>

      </div>
    </div>
  )
}

export default Contact
