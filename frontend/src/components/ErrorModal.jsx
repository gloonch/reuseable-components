import React from 'react'
import ReactDOM from "react-dom";

const Backdrop = (props) => {
    return <div style={{position: 'fixed', top: 0, left: 0, width:'100%', height: '100vh', zIndex: 10, background: 'rgba(0, 0, 0, 0.75)'}} onClick={props.onConfirm} />
}

const ModalOverlay = (props) => {
    return (
        <div style={{position: 'fixed', top: '30vh', left: '10%', width:'80%', zIndex: 100, overflow: "hidden"}}
            className='bg-white w-1/4 rounded-2xl flex flex-col space-y-10 ' >
            <header className='bg-amber-500 text-white text-2xl p-8'>
                <h2>{props.title}</h2>
            </header>
            <div className='p-10 text-xl'>
                <p>{props.message}</p>
            </div>
            <footer className='p-8'>
                <button className='bg-green-700 hover:bg-green-400 duration-500 text-white w-1/6 rounded-2xl p-4' onClick={props.onConfirm}>Okay</button>
            </footer>
        </div>
    );
}
export default function ErrorModal(props) {
    return (
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm} />, document.getElementById('backdrop-root'))}
            {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onConfirm={props.onConfirm} />, document.getElementById('modal-root'))}
        </React.Fragment>
    )
}
