import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {authActions} from "../store";
axios.defaults.withCredentials = true;
export default function Navbar() {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const dispatch = useDispatch();
    const sendLogoutRequest = async () => {
        const res = await axios.post('http://localhost:4000/api/logout', null, {
            withCredentials: true
        });
        if (res.status == 200)
            return res

        return new Error('Unable to logout. Please try again.');
    }
    const handleLogout = () => {
        sendLogoutRequest().then(() => {
            dispatch(authActions.logout())
        });
    }

  return (
    <nav className=" mt-6 rounded-3xl relative mx-6 p-6 bg-slate-200">
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-20">
                {/* <img src="images/logo.svg" alt="" /> */}
                <div className=" space-x-8 font-bold ">
                    <NavLink to={'/'} className="opacity-70 hover:opacity-100">
                        Home
                    </NavLink>
                    <NavLink to={'/video'} className="opacity-70 hover:opacity-100">
                        Video
                    </NavLink>
                    <NavLink to={'/date'} className="opacity-70 hover:opacity-100">
                        Date Comparison
                    </NavLink>
                    <NavLink to={'/skeleton'} className="opacity-70 hover:opacity-100">
                        Skeleton
                    </NavLink>
                    <NavLink to={'/lottie'} className="opacity-70 hover:opacity-100">
                        Lottie
                    </NavLink>
                    <NavLink to={'/parallax'} className="opacity-70 hover:opacity-100">
                        Parallax
                    </NavLink>
                    <NavLink to={'/modal'} className="opacity-70 hover:opacity-100">
                        Modal
                    </NavLink>
                    <NavLink to={'/custom-hook'} className="opacity-70 hover:opacity-100">
                        custom-hook
                    </NavLink>

                </div>
            </div>
            <div className=" items-center space-x-6 font-bold text-grayishViolet ">
                {isLoggedIn && (
                    <NavLink onClick={handleLogout} to={'/'} className="px-8 py-3 font-bold opacity-50 hover:opacity-90">Log out</NavLink>
                )}
                {!isLoggedIn && (
                    <>
                        <NavLink to={'login'} className="font-bold opacity-50 hover:opacity-90">Login</NavLink>
                        <NavLink to={'signup'} className="px-8 py-3 font-bold opacity-50 hover:opacity-90">Sign Up</NavLink>
                    </>
                )}
        </div>
             
        </div>
    </nav>
  )
}
