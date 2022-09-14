import React from 'react'

function FilterBtn({query ,setFilterQuery}) {

    const setHealth = (e)=>{
        const text = e.target.innerText;
        if(text === 'None'){
          setFilterQuery(prev=>({
            ...prev,
            health:''
          }))
        }
        else{
          setFilterQuery(prev=>({
              ...prev, 
              health:text.toLowerCase()
          }))
        }
    }

    const setDiet = (e)=>{
        const text = e.target.innerText;
        if(text === 'None'){
          setFilterQuery(prev=>({
            ...prev,
            diet:''
          }))
        }
        else{
          setFilterQuery(prev=>({
              ...prev, 
              diet:text.toLowerCase()
          }))
        }
    }

    const setCuisine = (e)=>{
        const text = e.target.innerText;
        if(text === 'None'){
          setFilterQuery(prev=>({
            ...prev,
            cuisine:''
          }))
        }
        else{
          setFilterQuery(prev=>({
            ...prev, 
            cuisine:text
          }))
        }
    }

    const setMeal = (e)=>{
        const text = e.target.innerText;
        if(text === 'None'){
          setFilterQuery(prev=>({
            ...prev,
            mealType:''
          }))
        }
        else{

          setFilterQuery(prev=>({
            ...prev, 
            mealType:text
          }))
        }
      }


  return (
    <div className="group inline-block text-red mt-5 align-top w-full ml-5 sm:w-fit">
      <button className="outline-none focus:outline-none px-3 py-1 rounded-sm flex items-center min-w-32 bg-red text-white">

        <span className="pr-1 font-semibold flex-1 text-xl">Filter</span>
        <span>
          <svg className="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
          </svg>
        </span>
      </button>

      <ul className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32">
        <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
          <button
            className="w-full text-left flex items-center outline-none focus:outline-none"
          >
            <span className="pr-1 flex-1">Health</span>
            <span className="mr-auto">
              <svg
                className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </span>
          </button>
          <ul
            className="bg-white border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
          >
            <li className="px-3 py-1 whitespace-nowrap hover:bg-gray-100" onClick={setHealth}>None</li>
            <li className="px-3 py-1 whitespace-nowrap hover:bg-gray-100" onClick={setHealth}>Vegetarian</li>
            <li className="px-3 py-1 whitespace-nowrap hover:bg-gray-100" onClick={setHealth}>Alcohol-cocktail</li>
            <li className="px-3 py-1 whitespace-nowrap hover:bg-gray-100" onClick={setHealth}>Alcohol-free</li>
            <li className="px-3 py-1 whitespace-nowrap hover:bg-gray-100" onClick={setHealth}>Dairy-free</li>
            <li className="px-3 py-1 whitespace-nowrap hover:bg-gray-100" onClick={setHealth}>Egg-free</li>
            <li className="px-3 py-1 whitespace-nowrap hover:bg-gray-100" onClick={setHealth}>Fish-ree</li>
            <li className="px-3 py-1 whitespace-nowrap hover:bg-gray-100" onClick={setHealth}>gluten-free</li>
            <li className="px-3 py-1 whitespace-nowrap hover:bg-gray-100" onClick={setHealth}>Kidney Friendly</li>
            <li className="px-3 py-1 whitespace-nowrap hover:bg-gray-100" onClick={setHealth}>Low Fat</li>
            <li className="px-3 py-1 whitespace-nowrap hover:bg-gray-100" onClick={setHealth}>Low Sugar</li>
            <li className="px-3 py-1 whitespace-nowrap hover:bg-gray-100" onClick={setHealth}>No oil Added</li>
            <li className="px-3 py-1 whitespace-nowrap hover:bg-gray-100" onClick={setHealth}>Peanut-free</li>
          </ul>
        </li>

        <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
          <button
            className="w-full text-left flex items-center outline-none focus:outline-none"
          >
            <span className="pr-1 flex-1">Diet</span>
            <span className="mr-auto">
              <svg
                className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </span>
          </button>
          <ul
            className="bg-white border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32"
          >
            <li className="px-3 py-1 whitespace-nowrap hover:bg-gray-100" onClick={setDiet}>None</li>
            <li className="px-3 py-1 whitespace-nowrap hover:bg-gray-100" onClick={setDiet}>Balanced</li>
            <li className="px-3 py-1 whitespace-nowrap hover:bg-gray-100" onClick={setDiet}>High-Fiber</li>
            <li className="px-3 py-1 whitespace-nowrap hover:bg-gray-100" onClick={setDiet}>High-Protein</li>
            <li className="px-3 py-1 whitespace-nowrap hover:bg-gray-100" onClick={setDiet}>Low-Carb</li>
            <li className="px-3 py-1 whitespace-nowrap hover:bg-gray-100" onClick={setDiet}>Low-fat</li>
            <li className="px-3 py-1 whitespace-nowrap hover:bg-gray-100" onClick={setDiet}>Low-Sodium</li>
          </ul>
        </li>




        <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
          <button
            className="w-full text-left flex items-center outline-none focus:outline-none"
          >
            <span className="pr-1 flex-1">Cuisine</span>
            <span className="mr-auto">
              <svg
                className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </span>
          </button>
          <ul
            className="bg-white border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
          >
            <li className="px-3 py-1 hover:bg-gray-100" onClick={setCuisine}>None</li>
            <li className="px-3 py-1 hover:bg-gray-100" onClick={setCuisine}>Inidan</li>
            <li className="px-3 py-1 hover:bg-gray-100" onClick={setCuisine}>American</li>
            <li className="px-3 py-1 hover:bg-gray-100" onClick={setCuisine}>British</li>
            <li className="px-3 py-1 hover:bg-gray-100" onClick={setCuisine}>Caribbean</li>
            <li className="px-3 py-1 hover:bg-gray-100" onClick={setCuisine}>French</li>
            <li className="px-3 py-1 hover:bg-gray-100" onClick={setCuisine}>Italian</li>
            <li className="px-3 py-1 hover:bg-gray-100" onClick={setCuisine}>Japanese</li>
            <li className="px-3 py-1 hover:bg-gray-100" onClick={setCuisine}>Mexican</li>
          </ul>
        </li>


        <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
          <button
            className="w-full text-left flex items-center outline-none focus:outline-none"
            >
            <span className="pr-1 flex-1">Meal Type</span>
            <span className="mr-auto">
              <svg
                className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </span>
          </button>
          <ul
            className="bg-white border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
          >
            <li className="px-3 py-1 hover:bg-gray-100" onClick={setMeal}>None</li>
            <li className="px-3 py-1 hover:bg-gray-100" onClick={setMeal}>Breakfast</li>
            <li className="px-3 py-1 hover:bg-gray-100" onClick={setMeal}>Lunch</li>
            <li className="px-3 py-1 hover:bg-gray-100" onClick={setMeal}>Dinner</li>
            <li className="px-3 py-1 hover:bg-gray-100" onClick={setMeal}>Snack</li>
            <li className="px-3 py-1 hover:bg-gray-100" onClick={setMeal}>TeaTime</li>
          </ul>
        </li>

      </ul>
    </div>
  )
}

export default FilterBtn