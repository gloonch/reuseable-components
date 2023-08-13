import React, {useState} from 'react'
import useInput from "../hooks/useInput";


export default function CustomHookSample(props) {

    const {
        value: enteredName,
        isValid: enteredNameIsValid,
        hasError: nameInputHasError,
        valueChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        reset: resetNameInput
    } = useInput(value => value.trim() !== '')

    const formSubmissionHandler = (e) => {
        e.preventDefault();
        if (!enteredNameIsValid)
            return;

        console.log(enteredName);

        resetNameInput()
    }

    const nameInputClasses = nameInputHasError ?
        'form-control invalid' : 'form-control';

    return (
        <div className='flex flex-col p-30 mt-80 items-center'>
            <form onSubmit={formSubmissionHandler} className='items-center flex flex-col space-y-3 w-full '>
                <input className='p-3 w-1/4 rounded-2xl border-2 border-slate-300' placeholder='Name' type='text' id='name' onChange={nameChangeHandler} onBlur={nameBlurHandler} value={enteredName} />
                {nameInputHasError && (
                    <p className='text-red-800'>Name must not be empty.</p>
                )}
                <button className='bg-green-700 hover:bg-green-400 duration-500 text-white w-1/6 rounded-2xl p-4'>Submit</button>
            </form>
        </div>
    )
}
