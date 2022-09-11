import React, { useState } from 'react'

function SearchBar() {
    const [input, setInput] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault();
        

    }

  return (
    <form className='mt-2 absolute w-[500px] z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' onSubmit={handleSubmit}>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
    <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input value={input} onChange={(e)=>setInput(e.target.value)} type="search" id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 :focus:ring-blue-500" placeholder="Search Recipes"/>
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-red hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
    </div>
</form>
  )
}

export default SearchBar