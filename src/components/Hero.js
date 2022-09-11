import React from 'react'
import img from '../assets/background.jpg'
import SearchBar from './SearchBar'


function Hero() {
  return (
    <div className='w-screen px-8 relative'>
      <img src={img} alt="lol" className='rounded-md object-contain' />
      <SearchBar/>
    </div>
  )
}

export default Hero
