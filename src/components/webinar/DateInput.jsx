import React from 'react'

export default function DateInput({onBlur}) {
  return (
      <input type='datetime-local' onBlur={onBlur} className='w-full placeholder:text-white text-white flex-1 p-3 rounded-xl border-1 bg-slate-400 border-slate-500' />
  )
}
