import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate()
  const [toggleMenu, setToggleMenu] = useState(false)


  // checks whether the user exists or not
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (!user) {
        navigate('/login')
      }
    })
    // eslint-disable-next-line
  }, [])


  const logOut = () => {
    signOut(auth)
  }

  return (
    <header className='w-screen py-5 px-2 flex justify-between relative'>
      <div onClick={() => setToggleMenu(prev => !prev)} className="cursor-pointer sm:hidden">
        <MenuIcon />
      </div>
      {toggleMenu && <ul className='py-5 px-2 absolute top-16 left-0 right-0 bg-red flex flex-col space-y-4 z-30'>
        <li className='text-white rounded pl-2'><Link to={'/'}>Home</Link></li>
        <li className='text-white rounded pl-2'><Link to={'/profile'}>Profile</Link></li>
        <li onClick={logOut} className='text-white rounded pl-2'>Log Out</li>
      </ul>}

      <div className="flex md:order-1">
        <RestaurantIcon sx={{ color: 'var(--red)' }} />
        <h1 className='ml-2'>Recipe App</h1>
      </div>

      <nav className="md:ml-auto hidden sm:flex md:mr-auto text-base order-2">
        <Link to={'/'} className="mr-5 hover:text-red cursor-pointer">Home</Link>
        <Link to={'/profile'} className="mr-5 hover:text-red cursor-pointer">Profile</Link>
        <button onClick={logOut} className="mr-5 hover:text-red cursor-pointer px-4">Log Out</button>
      </nav>
    </header>
  )
}

export default Header
