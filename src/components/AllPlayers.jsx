import { useState, useEffect } from 'react'
import Search from './Search';
import URL from './index'

export default function AllPlayers() {
    const URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2302-ACC-PT-WEB-PT-C/players'
    const [players, setPlayers] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(URL)
                const result = await response.json()
                setPlayers(result.data.players);
                console.log(result.data.players)
        } catch (error) {
            console.log(error)
        }
        
    }
        fetchData();
      }, []);

  return (
    <div>
        {players.map((players, index) => (
            <div className='card' key={index}>
                <h2>{players.name}</h2>
                <img src={players.imageUrl} />
                <h3>{players.breed}</h3>
            </div>
        ))}
    </div>
    );
}
