import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongsItem from './SongsItem'

const DisplayHome = () => {
  return (
    <>
     <Navbar />
     <div className='mb-5'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
        {
            albumsData.map((item, index) =>{
              return <AlbumItem key={index} name={item.name} image={item.image} desc={item.desc} id={item.id} />  
            })
        }
        </div>
     </div>
     <div className='mb-5'>
        <h1 className='my-5 font-bold text-2xl'>Today's Latest Hit's</h1>
        <div className='flex overflow-auto'>
        {
            songsData.map((item, index) =>{
              return <SongsItem key={index} name={item.name} image={item.image} desc={item.desc} id={item.id} />  
            })
        }
        </div>
     </div>
    </>
  )
}

export default DisplayHome