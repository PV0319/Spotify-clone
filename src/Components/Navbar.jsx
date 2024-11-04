/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Navbar = () => {
    const navigate=useNavigate()
    return (
        <>
            <div className='w-full flex justify-between font-semibold items-center'>
                <div className="flex items-center gap-2">
                    <img onClick={()=>navigate(-1)} src={assets.arrow_left} alt="" className='w-8 rounded-2xl p-2 bg-black cursor-pointer' />
                    <img onClick={()=>navigate(1)} src={assets.arrow_right} alt="" className='w-8 rounded-2xl p-2 bg-black cursor-pointer lg:block hidden' />
                </div>
                <div className="flex items-center gap-4">
                    <p className="bg-white text-black px-4 py-1 text-[15px] rounded-2xl font-semibold lg:block hidden cursor-pointer transform transition-transform duration-300 hover:scale-110 hover:bg-[#1db954] border-solid border-2  border-yellow-500">
                        Explore Premium</p>
                    <p className="bg-black text-white px-3 py-1 text-[15px] rounded-2xl font-semibold cursor-pointer  transform transition-transform duration-300 hover:scale-110"><span></span>Install App</p>
                    <p className="bg-amber-500 w-7 h-7 text-black rounded-full items-center justify-center flex">PV</p>
                </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
                <p className="flex px-4 py-1 rounded-2xl bg-white text-black cursor-pointer transform transition-transform duration-300 hover:scale-110 hover:bg-[#1db954] border-solid border-2  border-yellow-500">All</p>
                <p className="flex px-4 py-1 rounded-2xl bg-black text-white cursor-pointer transform transition-transform duration-300 hover:scale-110 hover:bg-[#1db954] border-solid border-2  border-yellow-500">Music</p>
                <p className="flex px-4 py-1 rounded-2xl bg-black text-white cursor-pointer transform transition-transform duration-300 hover:scale-110 hover:bg-[#1db954] border-solid border-2  border-yellow-500">Podcasts</p>
            </div>
            
        </>
    )
}
export default Navbar
