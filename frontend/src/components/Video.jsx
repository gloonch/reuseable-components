import React from 'react'
import { NavLink, Outlet, isActive } from 'react-router-dom'

export default function Video() {
  return (
    <>
        <div className='items-center justify-between space-x-8 max-w-full mt-10 ms-20'>
            {/* { isAuthenticated && webinar... } */}
            <NavLink to={'webinar'} className={({ isActive }) => isActive ? 'text-xl font-bold underline' : 'text-md'} >
                Webinar's Dashboard
            </NavLink>
            <NavLink to={'videoplayer'} className={({ isActive }) => isActive ? 'text-xl font-bold underline' : 'text-md'} >
                Video player's Dashboard
            </NavLink>
        </div>
        <div className='w-full items-center p-30'>
            <Outlet />
        </div>
    </>
  )
}
