import React, { useState } from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {ref} from 'firebase/storage'
import { auth, storage } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const navigate = useNavigate()
    const [img, setImg] = useState({})

    const handleChange = (e) => {
        if(img){
            setImg(e.target.files[0])
            const imgRef = ref(storage, `avatar/${auth.currentUser.uid}`)
        }
    }
    
    const uploadImg = () => {

    }

    return (
        <section className="text-gray-60 body-font h-screen">

            <div className="container px-5 py-24 mx-auto h-screen flex flex-wrap items-center">

                <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                    <h1 className="title-font font-medium text-3xl text-gray-900">What Are you Cooking Today</h1>
                    <p className="leading-relaxed mt-4">Easy Way To Make Your Favorite Dish</p>
                </div>

                <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <h2 className="text-gray-900 text-xl text-center font-medium title-font mb-5">Profile</h2>

                    <div className="relative mb-4">

                        <div className='flex justify-center mb-4 w-full h-full'>
                            <AccountCircleIcon sx={{ fontSize: '10rem' }} />
                        </div>

                        <input type="file" id="image" name="image" accept='image/*' onChange={handleChange} className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"/>
                    </div>

                    <button onClick={uploadImg} className="text-white bg-red border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Upload Image</button>

                    <button onClick={()=>navigate('/')} className="text-white mt-4 bg-red border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Home Page</button>

                </div>
            </div>
        </section>
    )
}

export default Profile
