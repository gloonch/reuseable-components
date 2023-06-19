import React, { useRef, useState} from 'react'
import DateInput from './DateInput';

export default function RegisterWebinar() {
    const [source, setSource] = useState(null);
    const [video, setVideo] = useState(null);
    const [date, setDate] = useState([]);
    const [name, setName] = useState(null);
    const inputRef = useRef(null);
    const [dates, setDates] = useState([<DateInput />]);

    const addNewDate = ()=>{
        const newDates = [...dates, <DateInput />];
        setDates(newDates);
    }
 
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const url = URL.createObjectURL(file);
        setVideo(file)
        setSource(url);
      };


    const handleSubmitWebinar = ()=>{

        if (name === null || name === "" || video === null || video === [] || date === null || date === [] )
            return alert('Please fill the fields above')
        
        // let formdata = new FormData();
        // formdata.append('videos', video);
        // formdata.append('name', name);
        // formdata.append('date', date);
        // formdata.append('user', 'gloonch');

        // axios.post(BACKEND_URI + '/api/v1/media/', formdata)
        //     .then(success => {
        //         alert('Webinar scheduled successfuly.');
        //     })
        //     .catch(error => {
        //         alert('Error Happened!');
        //     })
        //     .finally(f=> {
        //         window.location.reload();
        //     });

    }

    const handleDateChange = (e)=>{
        setDate([...date, e.target.value])
        e.target.setAttribute('disabled', 'disabled')
    }

    
  return (
    <div className='flex flex-col items-center justify-between bg-slate-500 mt-20 mx-20 border-solid rounded-3xl w-[90%] p-10'>
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

            <div className="flex flex-col max-h-sm items-start justify-between space-y-5">
                <input type="text" onChange={(e)=> setName(e.target.value)} className="w-full placeholder:text-white text-white flex-1 p-3 rounded-xl border-1 bg-slate-400 border-slate-500 " placeholder="Enter webinar name" />
                <div id='dates' className="flex flex-col max-h-sm items-start justify-between space-y-5">
                    {dates.map((d, index) => {
                        return <DateInput key={index} onBlur={handleDateChange}/>
                    })}
                <button className="w-30 p-3 rounded-2xl border-4 border-white text-white hover:bg-blue-400" onClick={addNewDate}>Add Date</button>

                </div>
            </div>           
        </div>
        <div className="flex flex-row items-start justify-between space-x-5 m-10">
            <input ref={inputRef} accept=".mov,.mp4" onChange={handleFileChange} type="file" hidden id="video" />
            <button className="w-20 p-3 rounded-2xl border-4 border-white text-white hover:bg-red-400" onClick={()=>window.location.reload()}>clear</button>
            <button className="w-40 p-3 rounded-2xl border-4 border-white text-white hover:bg-green-400" onClick={handleSubmitWebinar} >Submit</button>
        </div>
    </div>
  )
}
