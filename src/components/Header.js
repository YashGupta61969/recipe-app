import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate()
  const [toggleMenu, setToggleMenu] = useState(false)
  // const url ="https://api.edamam.com/search?q=chicken&app_id=23efa564&app_key=858c2982c6031489d8b8b22cb1c82f93&from=0&to=5&calories=591-722&health=alcohol-free";

  // fetch(url).then(resp=>resp.json()).then(data=>console.log(data))


  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (!user) {
        navigate('/login')
      }
    })
  }, [])

  const logOut = () => {
    signOut(auth)
  }

  return (
    // <header className="text-primaryBlack body-font">
    //   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    //     <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    //       <RestaurantMenuIcon className='text-red' />
    //       <span className="ml-3 text-xl">Recipe App</span>
    //     </a>

    //     <button onClick={logOut} className="inline-flex items-center bg-red text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 hover:text-primaryBlack rounded text-base mt-1 md:mt-0">Log Out
    //       <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
    //         <path d="M5 12h14M12 5l7 7-7 7"></path>
    //       </svg>
    //     </button>
    //   </div>
    // </header>

    <header className='w-screen py-5 px-2 flex justify-between relative'>
      <div onClick={() => setToggleMenu(prev => !prev)} className="cursor-pointer sm:hidden">
        <MenuIcon />
      </div>
      {toggleMenu && <ul className='py-5 px-2 absolute top-16 left-0 right-0 bg-red flex flex-col space-y-4'>
        <li className='text-white rounded pl-2'><Link to={'/'}>Home</Link></li>
        <li className='text-white rounded pl-2 flex items-center'>Filter <KeyboardArrowDownIcon /> </li>
        <li className='text-white rounded pl-2'><Link to={'/profile'}>Profile</Link></li>
        <li onClick={logOut} className='text-white rounded pl-2'>Log Out</li>
      </ul>}
      <div className="flex md:order-1">
        <RestaurantIcon sx={{ color: 'var(--red)' }} />
        <h1 className='ml-2'>Recipe App</h1>
      </div>

      <nav className="md:ml-auto hidden sm:flex md:mr-auto text-base order-2">
        <Link to={'/'} className="mr-5 hover:text-red cursor-pointer">Home</Link>
        <Link to={'/'} className="mr-5 hover:text-red cursor-pointer">Second Link</Link>

        <Link to={'/profile'} className="mr-5 hover:text-red cursor-pointer">Profile</Link>
        <Link to={'/'} className="mr-5 hover:text-red cursor-pointer px-4">Log Out</Link>
      </nav>
    </header>
  )
}

export default Header
