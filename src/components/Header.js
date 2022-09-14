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
        <Link to={'/profile'} className="mr-5 hover:text-red cursor-pointer">Profile</Link>
        <button onClick={logOut} className="mr-5 hover:text-red cursor-pointer px-4">Log Out</button>
      </nav>
    </header>
  )
}

export default Header
