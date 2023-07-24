import React from 'react'
import Lottie, {LottieRefCurrentProps} from 'lottie-react'
import animationData from '../assets/animation_dumbell.json'
import {useRef} from "react";

export default function LottieAnimation() {
    const animationRef = useRef();

    return (
    <div className="min-h-screen flex items-center justify-center lg:mx-48">
      <div className='text-center space-y-4'>
          <h1 className='text-2xl font-bold'>Create lovely animations with Lottie</h1>
          <p>Create fancy animations</p>
          <div className='flex gap-2 justify-center'>
              <button>Learn More</button>
              <button>Library</button>
          </div>
        <Lottie onComplete={ ()=>{
                animationRef.current?.setDirection(-1)
                animationRef.current?.play()
                    // animationRef.current?.goToAndPlay(45, true);
                }}

                ref={animationRef}
                animationData={animationData} />
      </div>
    </div>
  )
}
