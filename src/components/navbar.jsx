import React, {useState} from 'react'


import { FaHome } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";
import { GiCookingPot } from "react-icons/gi";
import { FaRunning } from "react-icons/fa";


const categories = [

    {id:1, name:'home', icon: <FaHome size={30} className='text-lg block  cursor-pointer '/>},
    {id:2, name:'calculator', icon: <FaCalculator size={30} className='text-lg block  cursor-pointer'/>},
    {id:3, name:'cooking book', icon:<GiCookingPot size={30} className='text-lg block  cursor-pointer'/>},
    {id:4, name:'training book', icon:<FaRunning size={30} className='text-lg block  cursor-pointer'/>}
]


const Calculator = () => {

    const [nav,setNav] = useState(true)


    return (
    <div className="flex absolute left-0 top-0  z-20">
 <div className={`flex justify-between items-center flex-col ${nav ? "w-72 h-screen" : 'w-20 h-screen '} bg-red-500 duration-700`}
   onMouseEnter={() => setNav(true)}
   onMouseLeave={() => setNav(false)}
>
    <div className=" cursor-pointer">Logo </div>
    <div className="flex flex-col cursor-pointer">
        {categories.map(({id,name,icon})=> (
            <div key={id} className="my-5 flex ">
                {icon}
                <a href="null" className={`mx-2 text-lg uppercase ${!nav && 'hidden'}`}>{name}</a>
            </div>
        ))}
    </div>
    <div className="cursor-pointer">Change </div>
 </div>
 </div>
     );
}
 
export default Calculator;


