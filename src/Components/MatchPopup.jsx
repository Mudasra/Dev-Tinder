import React from 'react'
import { useSelector } from 'react-redux'

const MatchPopup = () => {
  const match = useSelector((state) => state.feed.MatchPopup)

  if(!match) return null;
// fixed inset-0 flex items-center justify-center bg-black bg-opacity-40
  return (
    <div className=''>
      <div>
        <h2>🎉 It's a match!</h2>
        <p>You matched with {match.name}</p>
        <img src={match.avatar} alt={match.name}/>
      </div>
    </div>
  )
}

export default MatchPopup