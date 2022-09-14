import React, { useEffect, useState } from 'react'
import UploadIcon from '@mui/icons-material/Upload';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage'
import { auth, storage } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { updateProfile } from 'firebase/auth';

function Profile() {
    const navigate = useNavigate()
    const currentUser = auth.currentUser
    const [img, setImg] = useState({})
    const [userImgUrl, setUserImgUrl] = useState('https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg')

    const handleChange = (e) => {
        if(e.target.files[0]){
            setImg(e.target.files[0])
        }
    }
    
    const uploadImg = async() => {
        if(img){
            const imgRef = ref(storage, `avatar/${auth.currentUser.uid}`)
            const snapshot = await uploadBytes(imgRef, img);
            const photoURL = await getDownloadURL(imgRef)     
            updateProfile(currentUser, {photoURL})
        }
        
    }

    useEffect(()=>{
        if(currentUser?.photoURL){
            setUserImgUrl(currentUser.photoURL);
        }
        // console.log(currentUser)
    }, [currentUser])

    return (
        <section className="text-gray-60 body-font h-screen">
            <div className="container px-5 py-24 mx-auto h-screen flex flex-wrap items-center">

                <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                    <h1 className="title-font font-medium text-3xl text-gray-900">What Are you Cooking Today</h1>
                    <p className="leading-relaxed mt-4">Easy Way To Make Your Favorite Dish</p>
                </div>

                <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                    <h2 className="text-gray-900 text-xl text-center font-medium title-font mb-5">Profile</h2>

                    <div className="mb-4">

                        <div className='mb-4 mx-auto h-52 w-52'>
                            {userImgUrl && <img src={userImgUrl} alt="user" className='h-full w-full object-contain rounded-[50%]' />}
                        </div>

                        <input type="file" id="image" name="image" accept='image/*' onChange={handleChange} className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-red hover:file:bg-violet-100"/>
                    </div>

                    <button onClick={uploadImg} className="text-white bg-red border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Upload Image <UploadIcon/></button>

                    <button onClick={()=>navigate('/')} className="text-white mt-4 bg-red border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg">Home Page</button>

                </div>
            </div>  
        </section>
    )
}

export default Profile
