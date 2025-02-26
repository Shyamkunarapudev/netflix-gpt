import React, { useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/slices/userSlice';
import { signOut } from "firebase/auth";
import { NETFLIX_LOGO_URL, SIGN_IN_LOGO_URL } from '../utils/constants';
import { removeMovies } from '../utils/slices/movieSlice';
import { removeMovieInfo } from "../utils/slices/infoSlice";
import { gptTogglePage, removeSearchMovieList } from '../utils/slices/gptSlice';
import { SUPPORTED_LAUNGUAGES } from '../utils/constants';
import { changeLanguage } from '../utils/slices/languageSlice';


const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(store => store.user)
  const showGPTButton = useSelector(store =>store.gpt.showGptPage)

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL: photoURL}))
        navigate("/browse")
        // ...
      } else {
        dispatch(removeUser())
        navigate("/")
      }
    });

    return () => unsubscribe()
  },[])

  const signOutHandler =()=>{
    signOut(auth).then(() => {
      dispatch(removeUser())
      dispatch(removeMovies())
      dispatch(removeMovieInfo())
      
      navigate('/')
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  const netFlixhandler = () =>{
    dispatch(gptTogglePage())
    dispatch(removeSearchMovieList())
  }

  const hadleLanguage =(e)=>{
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className=' absolute bg-gradient-to-b z-50 from-black w-full px-10 sm:py-15 md:py-4 py-10 flex justify-between'>
      <div className="">
        <img className='w-36 sm:w-48 -mt-3 cursor-pointer -ml-5' src={NETFLIX_LOGO_URL} alt="Logo"/>
      </div>
      {user&&<div className="flex">
       <div>
        {showGPTButton&&<select className='p-2 rounded-lg cursor-pointer bg-gray-900 text-white' onChange={hadleLanguage}>
            {SUPPORTED_LAUNGUAGES.map((lang, arr)=><option key={arr} value={lang.identifier}>{lang.language}</option>)}
        </select>}
       </div>
        <div className="">
         <button className='px-2 py-1 ml-3 cursor-pointer  bg-sky-700 md:font-semibold text-white rounded-md' onClick={netFlixhandler}>{showGPTButton?"Home":"NetflixGPT"}</button>
        </div>
        <div>
          <button className='px-2 py-1 mx-3 cursor-pointer  bg-red-600 md:font-semibold text-white rounded-md' onClick={signOutHandler}>SignOut</button>
        </div>
        <img className='w-9 h-9 cursor-pointer' src={SIGN_IN_LOGO_URL} alt="profile" />
      </div>}
    </div>
  )
}

export default Header