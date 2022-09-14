import React, { useState } from 'react'
import Header from "./Header";
import Hero from './Hero';
import RecipeSection from './RecipeSection';

const Home = () => {
  const [recipes, setRecipes] = useState({})
  
  return (
    <div className='overflow-hidden'>
            <Header/>
            <Hero setRecipes={setRecipes}/>
            <RecipeSection recipes={recipes} setRecipes={setRecipes}/>
    </div>
  )
}

export default Home
