import React from 'react';
import ServImg from '../assets/dummy264.png';
import statsSvg from '../assets/serv_img/statistics-svgrepo-com.svg'
import reportSvg from '../assets/serv_img/report-svgrepo-com.svg'
import pieSvg from '../assets/serv_img/pie-chart-svgrepo-com.svg'
import repoSvg from '../assets/serv_img/data-svgrepo-com.svg'
import buriedSvg from '../assets/serv_img/data-buried-svgrepo-com.svg'
import bookshelfSvg from '../assets/serv_img/bookshelf-svgrepo-com.svg'
import analyzeSvg from '../assets/serv_img/analyze-svgrepo-com.svg'

const servs = [
    {id: 1, logo: bookshelfSvg, title: "Data collection", descr: "Data is everywhere, however the first need to be obtained. The data comes out in different ways (sources, formats and conditions), for which the right set of tools need to be employed"},
    {id: 2, logo: repoSvg, title: "Data trasformation", descr: "Since data is such a comodity, it usually is used in different analysis through different tools, for that the same data needs to be prepared in different formats"},
    {id: 3, logo: reportSvg, title: "Data Exploration", descr: "The true power of data can be obtained from the findings that lies hidden in the bits"},
    {id: 4, logo: pieSvg, title: "Statistical analysis", descr: "The reason of data's popularity in these days it's due to it's usefulnes for decision-making, commonly through statistical studies"},
    {id: 5, logo: analyzeSvg, title: "Dashboards", descr: "Analysed data can be not only bet transformed into different forms of data, but also into visualsthat provid insights"},
    {id: 6, logo: buriedSvg, title: "Web Development", descr: "The world moves through the internet, thus you need to do it too, whether the information obtained by data analysis or any other service"}
]

const Services = () => {
  return (
    <div name='services' className='h-min-screen w-full py-10'>

        <div className='flex items-center text-2xl font-semibold bg-gradient-to-r from-slate-500 via-slate-400 to-slate-600 bg-clip-text text-transparent px-10 max-w-screen-lg mx-auto'>
            <p className='py-6'>Services</p>
        </div>

        <div className='flex items-center'>
            <div className='max-w-screen-lg mx-auto px-10 grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 items-start'>

            {servs.map(({ logo, title, descr })=>(
                <div className='flex flex-col w-full justify-center mx-auto'>
                    <img src={logo} className='z-[-1] grayscale h-1/2 md:h-2/5'/>
                    <p className='text-lg font-semibold text-center'>{title}</p>
                    <p className='text-sm text-justify'>{descr}</p>
                </div>
            ))}

            </div>
        </div>

        
    </div>
  )
}

export default Services
