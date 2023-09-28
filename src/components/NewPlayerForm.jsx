import { useState } from 'react'

export default function NewPlayerForm() {
    const [playerName, setPlayerName] = useState('')
    const [playerBreed, setPlayerBreed] = useState('')

    const handleCreatePlayer = async () => {
        try {
            const response = await fetch(
              'https://fsa-puppy-bowl.herokuapp.com/api/COHORT-NAME/players',
              {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  name: playerName,
                  breed: playerBreed,
                }),
              }
            );
            const result = await response.json();
            console.log(result);
            
            

          } catch (err) {
            console.error(err);
          }
    }

  return (
    <>
        <input className='input' type='text' placeholder='Player Name' value={playerName} onChange={(e) => setPlayerName (e.target.value)} />

        <input className='input' type='text' placeholder='Player Breed' value={playerBreed} onChange={(e) => setPlayerBreed (e.target.value)} />

        <button className='button' onClick={handleCreatePlayer}>Create Player</button>
    </>
  )
}
