import React from 'react'

export default function Home() {
  return (
    <div>
        <section id="hero">
            <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
                <div className="flex flex-col space-y-10 mb-44 lg:mt-36 xl:mb-52 lg:w-1/2">
                    <h1 className="text-5xl font-bold text-center lg:text-6xl lg:max-w-md lg:text-left">
                        Navigate to your favourite page
                    </h1>
                    <p className="text-2xl text-center text-gray-400 lg:max-w-md lg:text-left">
                        Each navbar represents a common reusable react component that you can use in your own projects.
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
