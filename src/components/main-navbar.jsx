import React, {useState} from 'react'
import { FaBars } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import '../assets/styles/navbar.css'

const sides = [
    { id:1, name:"Cennik"},
    {id:2, name:'Akutalności'},
    {id:3, name:'Kontakt'},
    {id:4, name:'O nas'},
]



const Test = () => {

    const [nav, setNav] = useState(false)

   

    return ( 

        <div className="flex justify-end items-center w-full h-20 px-4 text-white bg-black/75  fixed z-10">
            <ul className="hidden md:flex">
                {sides.map(({id,name}) => (
                    <a href='a' className='px-10 uppercase' key={id}>{name}</a>
                 ))}
            </ul>
            <div 
                className={`cursor-pointer pr-4 z-10 text-gray-500 ${nav ? 'rotate-90 px-4' : 'rotate-0'} duration-500 md:hidden`}
                onClick={() => setNav(!nav)}
            >
                {nav ? <FaBars size={30} className={`text-white `} /> : <FaBars size={30} />}
            </div>

          
      {nav && (
        <ul className={`flex flex-col justify-center items-center absolute top-20 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500 duration-300 ${nav ? 'slide-right' : 'slide-left'}`}>
          {sides.map(({ id, name, path }) => (
            <Link
              key={id}
              to={path}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"


            >
              {name}
            </Link>
          ))}
        </ul>
            )}
        </div>
      );
}
 
export default Test;