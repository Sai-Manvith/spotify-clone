import React from 'react'

const SongsItem = ({image,name,desc,id}) => {
    return (
      <div className='min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
          <img className='rounded' src={image} alt="" />
          <p className='font-bold mt-2 mb-1'>{name}</p>
          <p className='font-sm text-slate-200'>{(id%2 == 0) ? desc.slice(0,30) : desc.slice(0,37)}......</p>
      </div>
    )
  }

export default SongsItem