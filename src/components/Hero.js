import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import FilterBtn from './FilterBtn';

function Hero({ setRecipes }) {
  const [input, setInput] = useState('');
  const [query, setQuery] = useState('paneer');
  const [filterQuery, setFilterQuery] = useState({
    diet:'',
    health:'',
    cuisine:'',
    mealType:''
  })

  useEffect(() => {

    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}${filterQuery.diet && `&diet=${filterQuery.diet}`}${filterQuery.health && `&health=${filterQuery.health}`}${filterQuery.cuisine && `&cuisineType=${filterQuery.cuisine}`}${filterQuery.mealType && `&mealType=${filterQuery.mealType}`}`).then(res => res.json()).then(data => setRecipes(data))

  }, [query, filterQuery])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input) {
      setQuery(input)
    }else{alert('Please Type Something')}
  }


  return (

    // Section With Tag Line And Input For Search
    <div className='w-screen py-5 px-1 flex flex-col items-center bg-gradient-to-r from-[#ff5f6d] to-[#ffc371] text-center text-white'>
      <h1 className='font-bold'>What Are You Cooking Today ?</h1>
      <form onSubmit={handleSubmit} className='bg-white pr-2 mt-2 rounded w-4/5 flex items-center'>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Search Recipe" className='text-black w-full pl-2 py-2 rounded focus:outline-none' />
        <SearchIcon sx={{ color: 'var(--red)' }} className='cursor-pointer' />
      </form>


      {/* Filter Button To Filter Among The Recipes */}
      <FilterBtn query={filterQuery} setFilterQuery={setFilterQuery}/>
    </div>
  )
}

export default Hero
