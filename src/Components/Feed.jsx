import React from 'react'
import ProfileCard from './ProfileCard'
import MatchPopup from './MatchPopup'
import SwipeActions from './SwipeActions'
import { useSelector } from 'react-redux'

const Feed = () => {
    const {profiles , currentIndex} = useSelector((state) => state.feed);

    if(!profiles.length){
        return <p className='text-center mt-10'>No profiles available</p>
    }

    const currentProfile = profiles[currentIndex]
  return (
    <div className='flex flex-col items-center mt-10'>
        <ProfileCard profile={currentProfile}/>
        <MatchPopup/>
        <SwipeActions/>
    </div>
  )
}

export default Feed