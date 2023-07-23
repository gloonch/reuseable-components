import React, {useEffect, useState} from 'react'
import Loading from "./Loading";

export default function Skeleton() {

    const [listing, setListing] = useState([]);
    useEffect( () => {
        const getGames = async () => {
            const res = await fetch(`https://api.rawg.io/api/games?key=f178b7daea604667aa69c50ba716e3f7&page=2`);
            if (!res.ok)
                throw new Error('Failed to fetch data!');
            await new Promise(resolve => setTimeout(resolve, 2000))
            const data = await res.json();
            setListing(data.results);
        }
        getGames();
    }, []);

    return (
        <div className='p-10 items-center rounded-md grid grid-cols-3 gap-12'>
            {listing.map(game => {
                return (
                    <div key={game.id} className='m-5 col-span-1 '>
                        <img src={game.background_image} fill className='object-cover rounded-2xl' alt={game.name}/>
                        <h1 className=''>{game.name}</h1>
                        <p>{game.rating}</p>
                    </div>
                    // in next.js 13 you can simply put the loading to the folder that contains page.jsx
                    // Don't know how to use in react
                    // <Loading/>
                )
            })}
        </div>
    )
}
