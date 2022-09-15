import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import EastIcon from '@mui/icons-material/East';


function RecipeSection({recipes, setRecipes}) {
    const [pageNo, setPageNo] = useState(1)
    const navigate = useNavigate()
    

    const nextPage = async()=>{        
        try {
            const resp = await fetch(recipes?._links?.next.href)
            const data = await resp.json()
            setRecipes(data)
            setPageNo(prev=>prev+1)
            } catch (error) {
                console.log(error)
            }
        }

        const redirectToRecipePage = (obj)=>{
              const temp = obj._links.self.href.split('?')[0].split('/')
              const id = temp[temp.length-1]
              navigate(`/recipe/${id}`)
        }

  return (
    <>
    {recipes.count ? <>
        <div className='w-64 mt-3 mx-auto flex justify-around py-1 max-w-sm min-w-fit'>
            <div className="text-2xl mx-1">Page: {pageNo}</div>
            <button onClick={nextPage} className="flex items-center justify-center bg-red py-2 w-28 text-white rounded">Next<EastIcon sx={{marginLeft:'5px'}}/></button>
    </div>

    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center mt-2 pb-8'>
        {recipes?.hits?.map(rc=>{
            return (
                <div key={rc.recipe.uri} className='w-4/5 mt-4 lg:mt-8 flex flex-col items-center rounded'>
                    <img src={rc.recipe.image} alt="recipe" className='w-full' />
                    <h6 className='text-red uppercase text-xs mt-2'>{rc.recipe.dishType}</h6>
                    <h1 className='text-xl font-semibold'>{rc.recipe.label}</h1>
                    <button onClick={()=>redirectToRecipePage(rc)} className='bg-red mt-2 w-full rounded text-white py-2'>Complete Recipe</button>
                </div>
            )
        })}

    </div>
    </> : <h1 className='text-center text-4xl mt-8'>No Recipes Found</h1>
    }
    </>
  )
}

export default RecipeSection