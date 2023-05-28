import React from 'react'

export default function Home() {
  return (
    <div>
        <section id="hero">
            <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
                <div className="flex flex-col space-y-10 mb-44 lg:mt-36 xl:mb-52 lg:w-1/2">
                    <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
                        Let your video be shown
                    </h1>
                    <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
                        Log in to see what dashboard you're going to use.
                    </p>
                    
                </div>

                <div className="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
                    {/* <img src="images/illustration-working.svg" alt=""> */}
                </div>
            </div>
        </section>
    </div>
  )
}
