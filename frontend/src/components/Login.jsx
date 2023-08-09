import React, {useState} from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {authActions} from "../store";

export default function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [data, setData] = useState({
        email: '',
        password: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(()=> dispatch(authActions.login())).then(()=> navigate("/"));
    }

    const sendRequest = async () => {
        console.log('sending request...')
        const res = await axios.post('http://localhost:4000/api/login', {
            email: data.email,
            password: data.password
        }).catch(err => console.log(err));

        const response = await res.data;

        return response;
    }

    const handleChange = (e) => {
        setData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    }

    return (
        <div className='p-6 pt-14 flex flex-col items-center'>
            <form onSubmit={handleSubmit} className='items-center flex flex-col space-y-3 w-full '>
                <p className='text-4xl'>Log in</p>
                <input name='email' onChange={handleChange} type="email" value={data.email} className='p-3 w-1/4 rounded-2xl border-2 border-slate-300' placeholder='Email' />
                <input name='password' onChange={handleChange} type="password" value={data.password} className='p-3 w-1/4 rounded-2xl border-2 border-slate-300' placeholder='Password' />

                <button className='px-6 py-3 rounded-xl bg-amber-400' type="submit">Login</button>
            </form>
        </div>
    )
}
