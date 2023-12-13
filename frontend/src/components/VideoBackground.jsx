import React, {useState} from 'react'
const videobg = require('../assets/videobg.mp4')
export default function VideoBackground() {

    return (
        <div className='w-full h-screen mt-24'>
            <div className='overlay absolute top-0 left-0 w-full h-screen bg-yellow-500 opacity-20 mt-24'>

            </div>
            <video src={videobg} className='w-full h-screen object-cover -mt-24' autoPlay loop />
            <div className='content absolute w-full h-screen top-0 flex flex-col justify-center text-white text-center mt-24' >
                <h1 className='text-4xl'>Welcome</h1>
                <p>To my site</p>
            </div>
        </div>
    )
}
