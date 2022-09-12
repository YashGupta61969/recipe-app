import React, {useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';

function Hero() { 
  const [input, setInput] = useState('')
  return (
    <div className='w-screen py-5 px-1 flex flex-col items-center bg-gradient-to-r from-[#ff5f6d] to-[#ffc371] text-center text-white'>
      <h1 className='font-bold'>What Are You Cooking Today ?</h1>
      <div className='bg-white mt-2 rounded w-4/5 flex items-center'>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="Search Recipe" className='text-black w-full pl-2 py-2 rounded focus:outline-none' />
      <SearchIcon sx={{color:'var(--red)'}}/>
      </div>
    </div>
  )
}

export default Hero
