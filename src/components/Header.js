import React, { useEffect } from 'react'
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate()
  // const url ="https://api.edamam.com/search?q=chicken&app_id=23efa564&app_key=858c2982c6031489d8b8b22cb1c82f93&from=0&to=5&calories=591-722&health=alcohol-free";

  // fetch(url).then(resp=>resp.json()).then(data=>console.log(data))


  useEffect(()=>{
    onAuthStateChanged(auth, user=>{
      if(!user){
        navigate('/login')
      }
    })
  },[])

  const logOut = () => {
    signOut(auth)
  }

  return (
    <header className="text-primaryBlack body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <RestaurantMenuIcon className='text-red' />
          <span className="ml-3 text-xl">Recipe App</span>
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link to={'/'} className="mr-5 hover:text-red cursor-pointer">Home</Link>

          <Link to={'/'} className="mr-5 hover:text-red cursor-pointer">Second Link</Link>
          
          <Link to={'/'} className="mr-5 hover:text-red cursor-pointer">Third Link</Link>
          <Link to={'/profile'} className="mr-5 hover:text-red cursor-pointer">Profile</Link>
        </nav>
        <button onClick={logOut} className="inline-flex items-center bg-red text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-primaryBlack rounded text-base mt-4 md:mt-0">Log Out
          <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Header
