import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import {clearAllChat} from '../utils/ChatSlice'

const ChatHeader = ({match}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className='flex justify-between p-4 bg-base-200 shadow-md'>
      <div className='flex items-center'>
        <button onClick={() => navigate("/matches")} className='btn mr-2'>←</button>
        <img src={match.avatar} alt={match.name} className='w-10 h-10 rounded-full mr-2'/>
        <h2 className='font-bold'>{match.name}</h2>
      </div>
      <button onClick={() => dispatch(clearAllChat())} className='btn btn-error btn-outline'>Clear Chat</button>
    </div>
  )
}

export default ChatHeader