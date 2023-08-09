import React from 'react'
import DateInput from '../components/webinar/DateInput'
import { useState } from 'react'

export default function DateComparison() {
    const [firstDate, setFirstDate] = useState();
    const [secondDate, setSecondDate] = useState();
    const [nowDate, setNowDate] = useState();
    const [isShowTime, setIsShowTime] = useState(false);

    const handleComparison = ()=>{
        let begin = new Date(firstDate)
        let second = new Date(secondDate)
        let now = new Date(nowDate)

        // console.log(begin.getTime() + " " + now.getTime() + " " + second.getTime())

        if ((begin.getTime() < now.getTime()) && (now.getTime() < begin.getTime()+ 3600000)) {
            setIsShowTime(true)
        } else {
            setIsShowTime(false)
        }
    }

  return (
    <>
        <div className='flex flex-col w-full h-80 mt-10 p-10 items-center justify-between space-y-10 bg-slate-400 rounded-3xl '>

            <input onChange={(e)=> {setFirstDate(e.target.value.replace('T', ' '))}} type='datetime-local' className='border-2 w-200 placeholder:text-white text-white flex-1 p-3 rounded-3xl border-1 bg-slate-400 border-slate-500' />
            {/* <input onChange={(e)=> {setSecondDate(e.target.value.replace('T', ' '))}} type='datetime-local' className='w-200 placeholder:text-white text-white flex-1 p-3 rounded-xl border-1 bg-slate-400 border-slate-500' /> */}
            <input onChange={(e)=> {setNowDate(e.target.value.replace('T', ' '))}} type='datetime-local' className='border-2 w-200 placeholder:text-white text-white flex-1 p-3 rounded-3xl border-1 bg-slate-400 border-slate-500' />
            <button className='border-2 p-4 rounded-3xl text-white' onClick={handleComparison}>Compare</button>

        </div>
        {isShowTime && (
            <div className='flex flex-col w-full h-40 mt-10 p-10 items-center justify-between bg-slate-400 rounded-3xl '>
                It's show time
            </div>
        )}
    </>
  )
}
