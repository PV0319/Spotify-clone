/* eslint-disable no-unused-vars */
import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
const Sidebar = () => {
    const navigate=useNavigate();

    return (
        <div className='w-[25%] h-full p-2 flex-col text-white hidden gap-2 lg:flex mt-1.25 ml-1.25 '>
            <div className="bg-[#121212] h-[15%] rounded-lg flex flex-col justify-around ">
                <div onClick={()=>navigate("/")} className="flex items-center gap-3 pl-8 cursor-pointer">
                    <img src={assets.home_icon} alt="hi" className='w-6' />
                    <p className='font-bold'>Home</p>
                </div>
                <div className="flex items-center gap-3 pl-8 cursor-pointer">
                    <img src={assets.search_icon} alt="hi" className='w-6' />
                    <p className='font-bold'>Search</p>
                </div>
            </div>
            <div className="bg-[#121212] h-[85%] rounded-lg">
                <div className="p-4 flex items-center justify-between">
                    <div className="flex gap-3 items-center">
                        <img src={assets.stack_icon} alt=" " className='w-8' />
                        <p className="font-semibold">Your Library</p>
                    </div>
                    <div className="flex gap-3 items-center">
                        <img src={assets.plus_icon} alt=" " className='w-5' />
                        <img src={assets.arrow_icon} alt=" " className='w-5' />
                    </div>
                </div>
                <div className="p-4 font-semibold bg-[#242424] m-2 flex flex-col items-start justify-start pl-4 gap-1 rounded-lg mt-4">
                    <h1 className='font-bold'>Create your first playlist</h1>
                    <p className='font-normal'>It&apos;s easy, we&apos;ll help you</p>
                    <button className='py-1.5 px-4 mt-4 bg-white text-black text-[15px] rounded-full font-bold'>Create playlist</button>
                </div>
                <div className="p-4 font-semibold bg-[#242424] m-2 flex flex-col items-start justify-start pl-4 gap-1 rounded-lg mt-4">
                    <h1 className='font-bold'>Let&apos;s find some podcasts to follow</h1>
                    <p className='font-normal'>We&apos;ll keep you updated on new episodes</p>
                    <button className='py-1.5 px-4 mt-4 bg-white text-black text-[15px] rounded-full font-bold'>Browse podcasts</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar