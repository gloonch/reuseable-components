import React from 'react'
import { NavLink, Outlet, isActive } from 'react-router-dom'

export default function Dashboard() {
  return (
    <>
        <div className='flex flex-row justify-between max-w-lg items-center mt-20 ms-80'>
            {/* { isAuthenticated && webinar... } */}
            <NavLink to={'webinar'} className={({ isActive }) => isActive ? 'text-xl font-bold underline' : 'text-md'} >
                Webinar's Dashboard
            </NavLink>
            <NavLink to={'videoplayer'} className={({ isActive }) => isActive ? 'text-xl font-bold underline' : 'text-md'} >
                Video player's Dashboard
            </NavLink>
        </div>
        <Outlet />
    </>
  )
}
