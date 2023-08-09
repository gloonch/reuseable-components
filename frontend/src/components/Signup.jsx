import React, {useState} from 'react'
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Signup() {
    const navigate = useNavigate();

    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        sendRequest().then(()=> navigate("/login"));
    }

    const sendRequest = async () => {
        console.log('sending request...')
        const res = await axios.post('http://localhost:4000/api/signup', {
            name: data.name,
            email: data.email,
            password: data.password
        }).catch(err => console.log(err));

        console.log(res.data);

        const response = await res.data;
        return response;
    }

    const handleChange = (e) => {
        setData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
        // console.log(e.target.name, " value ", e.target.value)
    }

    return (
        <div className='p-6 pt-14 flex flex-col items-center'>
            <form onSubmit={handleSubmit} className='items-center flex flex-col space-y-3 w-200 '>
                <p className='text-4xl'>Sign up</p>
                <input name='name' onChange={handleChange} type="text" value={data.name} className='p-3 rounded-2xl border-2 border-slate-300' placeholder='Name' />
                <input name='email' onChange={handleChange} type="email" value={data.email} className='p-3 rounded-2xl border-2 border-slate-300' placeholder='Email' />
                <input name='password' onChange={handleChange} type="password" value={data.password} className='p-3 rounded-2xl border-2 border-slate-300' placeholder='Password' />

                <button className='px-6 py-3 rounded-xl bg-amber-400' type="submit">Signup</button>
            </form>
        </div>
    )
}
