import React, { useRef, useState } from 'react'
import vid from '/Users/mahdihadian/VSCode/reuseable-components/src/components/webinar/20_Rules_For_Young_Men_OW4hGV30s6Y_136.mp4';

export default function RegisterWebinar() {
    const [videoPreview, setVideoPreview] = useState(null);
    const filePicekerRef = useRef(null);
 
    function previewFile(e) {
        // Reading New File (open file Picker Box)
        const reader = new FileReader();
        // Gettting Selected File (user can select multiple but we are choosing only one)
        const selectedFile = e.target.files[0];
        if (selectedFile) {
        reader.readAsDataURL(selectedFile);
        }
        // As the File loaded then set the stage as per the file type
        reader.onload = (readerEvent) => {
        if (selectedFile.type.includes("video")) {
            console.log('here : ' + readerEvent.target.result);
            setVideoPreview(readerEvent.target.result);
        }
        };
    }
    function clearFiles() {
        setVideoPreview(null);
    }
  return (
    <div className='flex flex-col items-center justify-between bg-slate-400 mt-20 mx-20 border-solid rounded-3xl w-[90%] p-10'>
        {/* <h1 className='text-xl mb-10'>Upload your webinar video here:</h1> */}
        <div className="preview flex flex-row items-start justify-between space-x-20">
        {videoPreview == null && 
                <video height={300} width={600} controls onClick={() => filePicekerRef.current.click()} className='max-w-3xl border-white border-4 rounded-3xl'>
                    <source src={videoPreview} type='video/mp4' />
                    Sorry your browser does not support videos.
                </video>
                }      
        </div>
        <div className="flex flex-row items-start justify-between space-x-5 m-10">
            <input ref={filePicekerRef} accept="video/*" onChange={previewFile} type="file" hidden />
            <button className="w-20 p-3 rounded-2xl border-4 border-white text-white hover:bg-red-400" onClick={clearFiles}>clear</button>
            <button className="w-40 p-3 rounded-2xl border-4 border-white text-white hover:bg-green-400" >Submit</button>
        </div>
        
    </div>
  )
}
