import mainLogo from '../assets/logo_cv.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoCloseSharp, IoMenuSharp } from 'react-icons/io5';
import { useLocation } from 'react-router-dom';
import * as Scroll from 'react-scroll';

const NavBar = () => {

    const [nav, setNav] = useState(false);

    const navigate = useNavigate();
    const path = useLocation().pathname;
    const location = path.split('/')[1]
    const scroller = Scroll.scroller;

    const scrollToSection = (section) => {
        scroller.scrollTo(section, {
            smooth: true,
            offset: -60
        })
    }
    const goToHomeAndScroll = async (section) => {
        await navigate('/');
        await scroller.scrollTo(section, {
            smooth: true,
            offset: -60
        })
    }

    const links = [
        {id:1, section: 'home', name: 'Home'},
        {id:2, section: 'services', name: 'Services'},
        {id:3, section: 'about', name: 'About'},
        {id:4, section: 'projects', name: 'Projects'},
        {id:5, section: 'contact', name: 'Contact'},
        {id:6, section: 'skills', name: 'Skills'},
    ]

  return (
    <div className='w-full h-20 fixed bg-slate-800 flex justify-between z-10'>
        {/* <Link to='' smooth duration={200} className='cursor-pointer flex'>
            <div className='flex flex-row items-center gap-4 px-10'>
                <img src={mainLogo} className='h-12'/>
                <p className='text-md font-semibold text-slate-50'>Cristian <br></br>Apaza</p>
            </div>
        </Link> */}


        {
            location ? 
            <div className='flex flex-row items-center gap-4 px-10 cursor-pointer' onClick={()=>goToHomeAndScroll('home')}>
                <img src={mainLogo} className='h-12' alt=''/>
                <p className='text-md font-semibold text-slate-50'>Cristian <br></br>Apaza</p>
            </div> :
            <div className='flex flex-row items-center gap-4 px-10 cursor-pointer' onClick={()=>scrollToSection('home')}>
                <img src={mainLogo} className='h-12' alt=''/>
                <p className='text-md font-semibold text-slate-50'>Cristian <br></br>Apaza</p>
            </div>
        }

        
{/* 
        { location ? <button className='bg-white' onClick={() => goToHomeAndScroll("services")}>vamos a home</button> : <button className='bg-white' onClick={()=>scrollToSection("services")}>no estoy aca</button> } */}

        
        <div className='hidden md:flex flex-row items-center gap-4 px-10'>
        {/* {links.map(({ section, name})=>(
            <NavLinks link={section} className='text-lg md:text-xl font-thin md:font-normal uppercase text-slate-50 tracking-tight list-none cursor-pointer' name={name}/>
        ))} */}
        {links.map(({section, name})=>(
            location ? 
            <li className='text-md font-semibold uppercase text-slate-50 tracking-tight list-none cursor-pointer' onClick={()=>goToHomeAndScroll(section)}>{name}</li> :
            <li className='text-md font-semibold uppercase text-slate-50 tracking-tight list-none cursor-pointer' onClick={()=>scrollToSection(section)}>{name}</li>
        ))}

        </div>





        <div onClick={()=>setNav(!nav)} className='md:hidden  z-10 text-slate-50 '>
            {nav ? 
            <button className='fixed top-5 right-5'> <IoCloseSharp size={30} /> </button> :
            <button className='fixed top-5 right-5'> <IoMenuSharp size={30}/> </button>}
        </div>

        { nav && 
        <ul className='flex flex-col justify-center items-center h-screen w-full top-0 left-0 absolute gap-4 bg-gradient-to-tr from-slate-500 via-slate-400 to-slate-600 opacity-95'>
            {links.map((link)=>(
                // <NavLinks link={link.section} className="cursor-pointer text-2xl font-normal text-slate-800" name={link.name} onClick={() => setNav(!nav)}/>

                location ? 
                <li className='cursor-pointer text-2xl font-semibold text-slate-800' onClick={()=>{goToHomeAndScroll(link.section); setNav(!nav)}}>{link.name}</li> :
                <li className='cursor-pointer text-2xl font-semibold text-slate-800' onClick={()=>{scrollToSection(link.section); setNav(!nav)}}>{link.name} </li>
            ))}
        </ul> 
        
        }

    </div>
  )
}

export default NavBar
