import React, { useRef, useState } from 'react'
import Header from './Header'
import { validation } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/slices/userSlice';
import { BACKGROUND_LOGO_URL, SIGN_IN_LOGO_URL } from '../utils/constants';

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const dispatch = useDispatch()

  const name = useRef(null)
  const email = useRef(null)
  const password = useRef(null)

  const handleButtonClick = () =>{
    const message = validation(email.current.value, password.current.value)
    setErrorMessage(message)
    if(!message){
      if(!isSignIn){
        //signup
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
              updateProfile(user, {
                displayName: name.current.value, photoURL : SIGN_IN_LOGO_URL
              }).then(() => {
                // Profile updated!
                const {uid, email, displayName, photoURL} = auth.currentUser
                dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
                // ...
              }).catch((error) => {
                // An error occurred
              // ...
            });
            // ...
          })
          .catch((error) => {
            const errorCode = error.code; 
            const errorMessage = error.message;
            setErrorMessage(errorCode+" "+errorMessage )  
            // ..
          });

      }else{
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+" "+errorMessage)
          });
      }
    }

    
  }

  const toggleSignInForm = () =>{
    setIsSignIn(!isSignIn)
  }

  return (
    <div>
      <Header />
      <div className=" absolute">
        <img src={BACKGROUND_LOGO_URL} alt="Background image" />
      </div>
      <form className="w-1/3 absolute text-white mt-20 p-14 rounded-lg mx-auto left-0 right-0 bg-black/80 " onSubmit={(e)=>e.preventDefault()}>
        <h1 className="mb-4 text-3xl font-bold">{isSignIn?"Sign In":"Sign Up"}</h1>
        {!isSignIn&&<input ref={name} className="w-full p-3 my-3 rounded-lg bg-slate-700 cursor-pointer" type='text' placeholder='Full name' />}
        <input ref={email} className="w-full p-3 my-3 rounded-lg bg-slate-700 cursor-pointer" type='text' placeholder='Email address' />
        <input ref={password} className="w-full p-3 my-3 rounded-lg bg-slate-700 cursor-pointer" type='password' placeholder='Password'/>
        <p className="py-3 font-bold text-red-600">{errorMessage}</p>
        <button className='w-full p-3 my-3 rounded-lg bg-red-600 font-bold cursor-pointer' onClick={handleButtonClick}>{isSignIn?"Sign In":"Sign Up"}</button>
        <p className="">{isSignIn?"New to Netflix?":"Already registered?"} <span className="font-bold cursor-pointer hover:underline" onClick={toggleSignInForm}>{isSignIn?"Sign Up Now":"Sign In Now"}</span></p>
      </form>
    </div>
  )
}

export default Login