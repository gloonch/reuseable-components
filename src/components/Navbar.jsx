import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className=" mt-6 rounded-3xl relative container mx-auto p-6 bg-slate-200">
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-20">
                {/* <img src="images/logo.svg" alt="" /> */}
                <div className=" space-x-8 font-bold ">
                    <NavLink to={'/'} className="opacity-70 hover:opacity-100">
                        Home
                    </NavLink>
                    <NavLink to={'/dashboard'} className="opacity-70 hover:opacity-100">
                        Dashboard
                    </NavLink>
                    
                </div>
            </div>
            <div className=" items-center space-x-6 font-bold text-grayishViolet ">
                <a href='#' className="font-bold opacity-50 hover:opacity-90">Login</a>
                <a href="#" className="px-8 py-3 font-bold opacity-50 hover:opacity-90">Sign Up</a>
            </div>
             
        </div>
    </nav>
  )
}
