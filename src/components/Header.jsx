import React, { useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/slices/userSlice';
import { signOut } from "firebase/auth";

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(store => store.user)

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
      navigate('/')
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }


  return (
    <div className='absolute bg-gradient-to-b z-10 from-black w-full px-10 py-4 flex justify-between'>
      <div className="">
        <img className='w-36 -mt-3' src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
      </div>
    {user&&<div className="flex">
    <img className='w-9 h-9' src={user.photoURL} alt="profile" />
      <div><button className='px-4 py-2 mx-3  bg-red-600 font-bold text-white rounded-lg' onClick={signOutHandler}>SignOut</button></div>
    </div>}
    </div>
  )
}

export default Header