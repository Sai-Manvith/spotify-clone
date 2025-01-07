import React from 'react'
import { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const SongsItem = ({image,name,desc,id}) => {

    const {playWithId} = useContext(PlayerContext) 

    return (
      <div onClick={() => playWithId(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
          <img className='rounded' src={image} alt="" />
          <p className='font-bold mt-2 mb-1'>{name}</p>
          <p className='font-sm text-slate-200'>{(id%2 == 0) ? desc.slice(0,30) : desc.slice(0,37)}......</p>
      </div>
    )
  }

export default SongsItem