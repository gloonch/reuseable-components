import React, { useRef, useState } from 'react'

export default function RegisterWebinar() {
    const [source, setSource] = useState(null);
    const inputRef = useRef(null);
 
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        setSource(url);
      };

    const clearFields = ()=>{
        setSource(null);
        // setDates(null);
    }
    
  return (
    <div className='flex flex-col items-center justify-between bg-slate-400 mt-20 mx-20 border-solid rounded-3xl w-[90%] p-10'>
        <h1 className='text-xl mb-10 text-white '>Upload your webinar video here:</h1>
        <div className="preview flex flex-row items-start justify-between space-x-20">
        {!source && (
            <video
            onClick={()=> inputRef.current.click()}
            className='max-w-3xl border-white border-4 rounded-3xl'
            width="600"
            height="300"
            controls
        />
        )}
        {source && (
            <video
                onClick={()=> inputRef.current.click()}
                className='max-w-3xl border-white border-4 rounded-3xl'
                width="600"
                height="300"
                controls
                src={source}
            />
        )}
                      
        </div>
        <div className="flex flex-row items-start justify-between space-x-5 m-10">
            <input ref={inputRef} accept=".mov,.mp4" onChange={handleFileChange} type="file" hidden />
            <button className="w-20 p-3 rounded-2xl border-4 border-white text-white hover:bg-red-400" onClick={clearFields}>clear</button>
            <button className="w-40 p-3 rounded-2xl border-4 border-white text-white hover:bg-green-400" >Submit</button>
        </div>
    </div>
  )
}
