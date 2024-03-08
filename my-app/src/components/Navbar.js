import React, { useState } from 'react';
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai';

const Navbar = () => {
  
  const [nav,setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav)
  }

  
  return (
    <div className="items-center h-24 text-white max-w-[1240px] mx-auto px-4 flex justify-between">
        <h1 className=" w-full text-3xl text-[#00df9a] font-bold">React.</h1>
        <ul className={nav ? "hidden md:flex" : "hidden md:flex"}>
          <li className="p-4 font-bold">Home</li>
          <li className="p-4 font-bold">Company</li>
          <li className="p-4 font-bold">Resources</li>
          <li className="p-4 font-bold">About</li>
          <li className="p-4 font-bold">Contact</li>
        </ul>
        <div className="block p-2 ml-6 mr-2 hover:bg-gray-700 md:hidden" onClick={handleNav}>
          {nav ? <AiOutlineMenu size={20}/> : <AiOutlineClose size={20} />}
        </div>
        <div className={nav ? "fixed left-[-100%]" : "fixed top-0 left-0 w-[40%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500 md:hidden"}>
          <h1 className=" w-full text-3xl text-[#00df9a] font-bold p-4">React.</h1>
          <ul className="p-4 uppercase"> 
            <li className="p-4 font-bold border-b border-gray-500">Home</li>
            <li className="p-4 font-bold border-b border-gray-500">Company</li>
            <li className="p-4 font-bold border-b border-gray-500">Resources</li>
            <li className="p-4 font-bold border-b border-gray-500">About</li>
            <li className="p-4 font-bold">Contact</li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar;