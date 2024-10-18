/* eslint-disable no-unused-vars */
import React from 'react'
import Sidebar from './Components/sidebar'
import Player from './Components/Player'
import Display from './Components/Display'
import { useContext } from 'react'
import {PlayerContext} from './context/PlayerContext'
const App = () => {
     const {audioRef,track}=useContext(PlayerContext)

  return (
    <div className='h-screen bg-black'>
      <div className="h-[90%] flex">
        <Sidebar/>
        <Display/>
      </div>
      <Player/>
      <audio ref={audioRef} preload='auto' src={track.file}></audio>
    </div>
  )
}

export default App