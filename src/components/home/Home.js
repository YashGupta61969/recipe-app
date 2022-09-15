import React, { useState } from 'react'
import Header from "../header/Header";
import Hero from '../hero/Hero';
import RecipeSection from './RecipeSection';

const Home = () => {
  const [recipes, setRecipes] = useState({})
  
  return (
    <div className='overflow-hidden'>

            {/* header for navigation */}
            <Header/>

            {/* hero section with tag line and search input */}
            <Hero setRecipes={setRecipes}/>

            {/* section which shows all the rcipes */}
            <RecipeSection recipes={recipes} setRecipes={setRecipes}/>
    </div>
  )
}

export default Home
