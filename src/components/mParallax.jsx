import React from 'react'
import '../App.css'
import {Parallax} from "react-parallax";
const img1 = require('../images/nature1.jpg');
const img2 = require('../images/nature2.jpg');
const img3 = require('../images/nature3.png');

export default function MParallax() {
    return (
        <div className=''>
            <Parallax strength={300} bgImage={img1} >
                <div className='content'>
                    <div className='text-content'>Normal Parallax</div>
                </div>
            </Parallax>

            {/*<div className='content'>*/}
            {/*</div>*/}

            <Parallax strength={300} blur={{min: -10, max:15}} bgImage={img2} >
                <div className='content'>
                    <div className='text-content'>Blur Parallax</div>
                </div>
            </Parallax>

            <Parallax strength={-600} bgImage={img3} >
                <div className='content'>
                    <div className='text-content'>Reverse Parallax</div>
                </div>
            </Parallax>
        </div>
    )
}
