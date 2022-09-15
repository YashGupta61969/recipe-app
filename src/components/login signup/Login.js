import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase';

function Login() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email:'',
    password:''
  })

  useEffect(()=>{

    // updates realtime user status
    onAuthStateChanged(auth, user=>{
      if(user){
        navigate('/')
      }
    })
// eslint-disable-next-line
  },[])

  const handleChange = (e)=>{
    setData({...data, [e.target.name]: e.target.value})
}

// logs in into the web
  const userLogin = ()=>{
    signInWithEmailAndPassword(auth, data.email, data.password)
    .then(data=>console.log(data))
    .catch(err=>alert(err.message))
  }

    return(
        <section className="text-gray-600 body-font h-screen">
        <div className="container px-5 py-24 mx-auto h-screen flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font font-medium text-3xl text-gray-900">What Are you Cooking Today</h1>
            <p className="leading-relaxed mt-4">Easy Way To Make Your Favorite Dish</p>
          </div>
          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-center text-xl font-medium title-font mb-5">Log In</h2>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" value={data.email} onChange={handleChange} required id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <div className="relative mb-4">
              <label htmlFor="password" className="leading-7 text-sm text-gray-600">Password</label>
              <input type="password" value={data.password} onChange={handleChange} id="password" required name="password" className="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
            </div>
            <button onClick={userLogin} className="text-white bg-red border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Button</button>
            <p className="text-s text-center text-gray-500 mt-3">Don't have an Account ? <Link to={'/signup'} className='hover:text-primaryBlack'>Sign In</Link></p>
          </div>
        </div>
      </section>
    )
}

export default Login
