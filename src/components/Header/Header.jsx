import React, { useEffect, useState } from 'react'
import {Link ,NavLink} from 'react-router-dom'



function Header() {
    const [menuopen,setmenuopen] = useState(false); 
    const [isScrolled,setisScrolled] = useState(false);

    const handleScroll = () => {
        if(window.scrollY > 20){
            setisScrolled(true);
        }else{
            setisScrolled(false);
        }
    };

    useEffect( () => {
        const handleScroll = () => {
            if(window.scrollY > 20){
                setisScrolled(true);
            }else{
                setisScrolled(false);
            }
        };

        window.addEventListener("scroll",handleScroll);

        return () => {
            window.addEventListener("scroll",handleScroll);
        };
    },
    []);



  return (
    <header className='fixed w-full top-0 z-50 p-0 '>
        <nav className={`p-0 ${isScrolled?"bg-black bg-opacity-90 shadow-lg":"bg-transparent"}`}>
            <div className='bg-black bg-opacity-90 shadow-lg sm:bg-transparent flex justify-between items-center text-white px-4 m-0'>
                <div className='m-2'>
                    <Link to="/" className='text-3xl text-white font-semibold '>
                        As.
                    </Link>
                </div>

                <div className='sm:hidden'>
                    <button  type="button" className="flex items-center p-2 w-10 h-10 text-sm text-white rounded-lg sm:hidden  focus:outline-none focus:ring-2 focus:ring-transparent "
                       onClick={() => {
                        setmenuopen(!menuopen)
                       }} 
                    >
                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                        </svg>
                    </button>
                </div>
                
                <div className= {`${menuopen ? 'flex bg-black m-0 bg-opacity-90 shadow-lg ' : 'hidden'}
                flex-col justify-center items-center sm:flex sm:flex-row sm:items-center sm:static absolute top-12 right-0 w-full sm:bg-transparent sm:top-auto sm:w-auto`}
                >
                    <ul className='flex flex-col justify-center sm:flex sm:flex-row px-2 mx-2 text-xl'>
                        <li className='flex items-center mx-3'>
                        <i className="fa-solid fa-house"></i>
                            <NavLink 
                            to="/"
                            className={({isActive}) => `
                                ${isActive?"text-purple-400 underline":"text-white"}
                                hover:text-purple-400
                                p-4 block
                            `}
                            >
                            Home
                            </NavLink>
                        </li>

                        <li className='flex items-center mx-3'>
                            <i className="fa-regular fa-user"></i>
                            <NavLink 
                            to="/about"
                            className={({isActive}) => `
                                ${isActive?"text-purple-400 underline" :"text-white"}
                                hover:text-purple-400
                                p-4 block

                            `}
                            >
                            About
                            </NavLink>
                        </li>

                        <li className='flex items-center mx-3'>
                            <i className="fa-solid fa-diagram-project"></i>
                            <NavLink 
                            to="/projects"
                            className={({isActive}) => `
                                ${isActive?"text-purple-400 underline" :"text-white"}
                                hover:text-purple-400
                                p-4 block 

                            `}
                            >
                            Projects
                            </NavLink>
                        </li>

                        <li className='flex items-center mx-3'> 
                            <i class="fa-regular fa-file"></i>
                            <NavLink 
                            to="/resume"
                            className={({isActive}) => `
                                ${isActive?"text-purple-400 underline" :"text-white"}
                                hover:text-purple-400
                                p-4 block

                            `}
                            >
                            Resume
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header