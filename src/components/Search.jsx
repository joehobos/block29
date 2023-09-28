import React from 'react'
import { useState } from 'react'
import AllPlayers from './AllPlayers';

export default function Search() {
    const [search, setSearch] = useState('')
    
  return (
    <>
        <div className='search-container'>
            <input
            className='search'
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
             placeholder="Search Players"
            />
        </div>
    </>
  )
}
