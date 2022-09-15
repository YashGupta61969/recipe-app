import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../header/Header'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LanguageIcon from '@mui/icons-material/Language';

function RecipePage() {
    const {id} = useParams()
    const [recipe, setRecipe] = useState({});

    // fetches the recipes on load
    useEffect(()=>{
        fetch(`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${process.env.REACT_APP_APP_ID}&app_key=${process.env.REACT_APP_API_KEY}`)
        .then(res => res.json())
        .then(data => setRecipe(data))
        .catch(err=> console.log(err))
    },[id])

  return (
    <div className='overflow-hidden'>
        <Header/>
        <div className="mt-3">
            <h1 className='text-center text-5xl mb-2'>{recipe?.recipe?.label}</h1>
            <h3 className='text-center text-2xl mb-3 text-red'>{recipe?.recipe?.dishType}</h3>

            <div className="sm:flex items-center sm:mt-5">
                <div className="sm:w-[50%] sm:max-w-lg sm:ml-2">
                <img src={recipe?.recipe?.image} alt="recipe" className='w-full object-contain rounded' />
                </div>
                <div className="pl-2 sm:ml-5">
                    <h1 className='text-3xl mt-4'>INGREDIENTS</h1>
                    <ul className='ml-6 mt-3 space-y-2'>
                        {
                            recipe?.recipe?.ingredientLines?.map(ingredient=>(
                                <li key={ingredient} className='list-disc text-dove'>{ingredient}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            <div className=" w-4/5 m-auto space-y-4 flex flex-col items-center py-3 mt-6 max-w-md">
                <div className="bg-gallery flex items-center justify-center rounded w-full"><AccessTimeIcon sx={{fontSize:'4rem', color:'var(--red)'}}/><span className='ml-3'>{recipe?.recipe?.totalTime} Minutes</span></div>
                <div className="bg-gallery flex items-center justify-center rounded w-full"><RestaurantIcon sx={{fontSize:'4rem', color:'var(--red)'}}/><span className='ml-3'>{recipe?.recipe?.yield} Servings</span></div>
                <div className="bg-gallery flex items-center justify-center rounded w-full"><LanguageIcon sx={{fontSize:'4rem', color:'var(--red)'}}/><span className='ml-3'>{recipe?.recipe?.cuisineType[0]}</span></div>
            </div>

            
            <div className="flex flex-col items-center mt-4">
                <h1 className='text-center text-lg'>A Recipe By {recipe?.recipe?.source}</h1>
                <a href={recipe?.recipe?.url} className='underline text-xl mt-1 mb-5'>View Full Recipe And Steps</a>
            </div>

        </div>
    </div>
  )
}

export default RecipePage