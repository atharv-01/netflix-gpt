import React from 'react'
import Header from "./Header"
import { useState,useRef } from 'react';
import {checkValidData} from "../utils/validate"
import { createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile  } from "firebase/auth";
import { auth } from "../utils/firebase" 
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
 
const Login = () => {
const [isSignInForm,setIsSignForm]=useState(true);
const [errorMessage,setErrorMessage]=useState(null);
const navigate=useNavigate()

const dispatch=useDispatch();
// const name=useRef(null);
const email=useRef(null);
const password=useRef(null)
const name=useRef("Hello")
const handleButtonClick=()=>{
  //Validate the form data 
// console.log(email.current.value)
// console.log(password.current.value)
const message=checkValidData(email.current.value,password.current.value)
setErrorMessage(message);

// if(message==null){



// }
// or 
if(message)  return;


//Sign Up Logic
if(!isSignInForm){
  createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
 
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"

     
    }).then(() => {
      // Profile updated!
      const {uid,email,displayName} = auth.currentUser;
          dispatch(addUser({uid,email:email,displayName:displayName}))
         
      navigate("/browse")
      //  console.log(name.current.value);
      // ...
    }).catch((error) => {
      setErrorMessage(error.message)
      // ...
    });
    // console.log(user);
    
    // . ..
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    setErrorMessage(errorCode+"-"+ errorMessage)
  });
}
// SignIn
else{
  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    navigate("/browse")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage)
  });
}



}
  const toggleSignInform=()=>{
setIsSignForm(!isSignInForm)
  }
  return (
    <div>
<Header/>
<div className='absolute '>
  <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="home" />
  
  </div>
  <form onSubmit={(e)=>e.preventDefault()}
  className='absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 bg-black text-white bg-opacity-80'>
    {/* If the value is true show sign in else show sign up  */}
    <h1 className='font-bold text-3xl '>{isSignInForm  ? "Sign In":"Sign Up"}</h1>
    {!isSignInForm && (<input type="text "  
    
    // ref={name}
    placeholder='Full Name ' className='p-2 my-4  w-full bg-black bg-opacity-75 border-1 border-white'/>)}
<input type="text "
ref={email}
  placeholder='Email address' 
  className='p-2 my-4  w-full bg-black bg-opacity-75 border-1 border-white'/>

<input type="password"
ref={password}
 placeholder='Password '
  className='p-2 my-4  w-full mt-2 bg-black bg-opacity-75 border-1 border-white'/>
  <p className='text-red-500 font-bold' > {errorMessage}</p>
<button className='py-4 my-6 bg-red-700 w-full ' onClick={handleButtonClick}>{isSignInForm  ? "Sign In":"Sign Up"} 

</button>
<p className='py-4 cursor-pointer ' onClick={toggleSignInform}>


  {isSignInForm  ? "  New to Netflix? Sign Up Now":"Already a user?Sign In Now"}
</p>
      </form>

    </div>
  )
}

export default Login
