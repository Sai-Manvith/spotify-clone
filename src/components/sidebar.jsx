import React from 'react'
import {assets} from "../assets/assets"

const sidebar = () => {
    const goToHome = () => {
        console.log("In home page");
    }
  return (
    <div className=' w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex '>
        <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
            <div className='flex pl-8 gap-3 items-center cursor-pointer'>
                <img src={assets.home_icon} alt="" className='w-6' onClick={goToHome} />
                <p className='font-bold'>Home</p>
            </div>
            <div className='flex pl-8 gap-3 items-center cursor-pointer'>
                <img className='w-6' src={assets.search_icon} alt="" />
                <p className='font-bold'>Search</p>
            </div>
        </div>
        <div className='bg-[#121212] h-[85%] rounded'>
            <div className='p-2 flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <img className='w-8' src={assets.stack_icon} alt="" />
                    <p className='font-bold'>Your Library</p>
                </div>
                <div className='flex items-center gap-3'>
                    <img className='w-5' src={assets.arrow_icon} alt="" />
                    <img className='w-5' src={assets.plus_icon} alt="" />
                </div>
            </div>
            <div className='p-4 bg-[#242424] m-2 font-semibold flex flex-col items-start justify-start g-1 pl-2'>
                <h1>Create Your First Playlist</h1>
                <p className='font-light'>It's easy we will help you</p>
                <button className='px-4 py-1.5 bg-white text-black rounded-full mt-3'>Create Playlist</button>
            </div>
            <div className='p-4 bg-[#242424] m-2 font-semibold flex flex-col items-start justify-start g-1 pl-2 mt-4'>
                <h1>Let's Find Some Podcast To Follow</h1>
                <p className='font-light'>We'll kepp you update on the latest episodes</p>
                <button className='px-4 py-1.5 bg-white text-black rounded-full mt-3'>Browse Podcast</button>
            </div>
        </div>

    </div>
  )
}

export default sidebar