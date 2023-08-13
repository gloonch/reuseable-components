import React, {useState} from 'react'
import ErrorModal from "./ErrorModal";


export default function Modals(props) {
    const [error, setError] = useState();

    const showModal = (e) => {
        setError({
            title: 'Invalid input',
            message: 'Please enter a valid name and age (non-empty values).',
        })
        return;
    }
    const errorHandler = () => {
        setError(null);
    }
    return (
        <div className='flex flex-col p-30 mt-80 items-center'>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onConfirm={errorHandler}
                />
            )}
            <button onClick={showModal} className='bg-green-700 hover:bg-green-400 duration-500 text-white w-1/6 rounded-2xl p-4'> Click me </button>
        </div>
    )
}
