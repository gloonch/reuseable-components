import React, { useRef, useState } from 'react'

export default function RegisterWebinar() {
    const [source, setSource] = useState(null);
    const inputRef = useRef(null);
    const dateRef = useRef(null);
 
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        setSource(url);
      };

    const handleDateChange = (e)=> {
        
    }

    const handleSubmitWebinar = ()=>{
        // TODO send a HTTP request
        // POST : user, video, date
        alert('Webinar scheduled successfuly.')
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

        <div id='dates' className=" flex flex-col items-start justify-between space-y-5">
            <input type='datetime-local' className='rounded-2xl p-4 text-red' ref={dateRef} onBlur={handleDateChange}/>
            {/* <button className="w-30 p-3 rounded-2xl border-4 border-white text-white hover:bg-blue-400"
                onClick={()=> {
                    // let a = document.getElementById('dates').innerHTML // append element as many as wanted
                }}>Add Date</button> */}

        </div>           
        </div>
        <div className="flex flex-row items-start justify-between space-x-5 m-10">
            <input ref={inputRef} accept=".mov,.mp4" onChange={handleFileChange} type="file" hidden />
            <button className="w-20 p-3 rounded-2xl border-4 border-white text-white hover:bg-red-400" onClick={()=>window.location.reload()}>clear</button>
            <button className="w-40 p-3 rounded-2xl border-4 border-white text-white hover:bg-green-400" onClick={handleSubmitWebinar} >Submit</button>
        </div>
    </div>
  )
}
