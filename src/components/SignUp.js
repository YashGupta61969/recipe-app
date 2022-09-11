import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {auth} from '../firebase/firebase'

function SignUp() {
    const navigate = useNavigate();
    const [data, setData] = useState({
        email:'',
        password:''
    })

    useEffect(()=>{

      // updates realtime user status
      onAuthStateChanged(auth, user=>{
        if(user){
          navigate('/profile')
        }
      })

    },[])

    const handleChange = (e)=>{
        setData({...data, [e.target.name]: e.target.value})
    }

    const createAccount = ()=>{
        createUserWithEmailAndPassword(auth, data.email, data.password)
        .then(data=>console.log(data))
        .catch(err=>alert(err.message))
    }

  return (
    <section className="text-gray-60 body-font h-screen">

    <div className="container px-5 py-24 mx-auto h-screen flex flex-wrap items-center">

      <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
        <h1 className="title-font font-medium text-3xl text-gray-900">What Are you Cooking Today</h1>
        <p className="leading-relaxed mt-4">Easy Way To Make Your Favorite Dish</p>
      </div>

      <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
        <h2 className="text-gray-900 text-xl text-center font-medium title-font mb-5">Sign Up</h2>

        <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" required id="email" name="email" value={data.email} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>

            <div className="relative mb-4">
              <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
              <input type="password" required id="password" name="password" value={data.password} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>

        <button onClick={createAccount} className="text-white bg-red border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Sign Up</button>

        <p className="text-s text-center text-gray-500 mt-3">Already a user ? <Link to={'/login'} className='hover:text-primaryBlack'>Log In</Link></p>

      </div>
    </div>
  </section>
  )
}

export default SignUp
