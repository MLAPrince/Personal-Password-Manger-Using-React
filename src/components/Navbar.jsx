
import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className='flex sticky mb-5 bg-black py-3 px-4 md:px-6 lg:px-10 h-[9vh] text-white items-center justify-between flex-wrap'>
            <div className="flex items-center justify-center text-4xl sm:text-5xl lg:text-6xl font-extrabold flex-shrink-0">
                <span className="text-white italic -skew-x-6 transform">MLA</span>
                <span className="text-lime-400 ml-2 sm:ml-4 skew-x-6 transform">Pass</span>
            </div>
            <div className='flex items-center justify-center gap-2 sm:gap-8 text-sm sm:text-base mt-2 sm:mt-0'>
                <NavLink className={(e) => { return e.isActive ? "navbarElements w-13 text-lime-400 p-1.5 underline flex items-center justify-center" : "flex w-13 items-center justify-center hover:font-bold cursor-pointer transition-all duration-150" }} to="/">
                    Home
                </NavLink>
                <NavLink className={(e) => { return e.isActive ? "navbarElements w-13 text-lime-400 p-1.5 underline flex items-center justify-center" : "flex w-13 items-center justify-center hover:font-bold cursor-pointer transition-all duration-150" }} to="/passwords">
                    Passwords
                </NavLink>
                <NavLink className={(e) => { return e.isActive ? "navbarElements w-13 text-lime-400 p-1.5 underline flex items-center justify-center" : "flex w-13 items-center justify-center hover:font-bold cursor-pointer transition-all duration-150" }} to="/about">
                    About
                </NavLink>
                
            </div>

        </nav>
    )
}

export default Navbar;




