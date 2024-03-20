import React from 'react'
import Header from "./Header"
import { useState } from 'react';
const Login = () => {
const [isSignInForm,setIsSignForm]=useState(true);


  const toggleSignInform=()=>{
setIsSignForm(!isSignInForm)
  }
  return (
    <div>
<Header/>
<div className='absolute '>
  <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="home" />
  
  </div>
  <form action="" className='absolute w-3/12 p-12 my-36 mx-auto right-0 left-0 bg-black text-white bg-opacity-80'>
    {/* If the value is true show sign in else show sign up  */}
    <h1 className='font-bold text-3xl '>{isSignInForm  ? "Sign In":"Sign Up"}</h1>
    {!isSignInForm && (<input type="text "  placeholder='Full Name ' className='p-2 my-4  w-full bg-black bg-opacity-75 border-1 border-white'/>)}
<input type="text "  placeholder='Email address' className='p-2 my-4  w-full bg-black bg-opacity-75 border-1 border-white'/>

<input type="password" placeholder='Password ' className='p-2 my-4  w-full mt-2 bg-black bg-opacity-75 border-1 border-white'/>
<button className='py-4 my-6 bg-red-700 w-full '>{isSignInForm  ? "Sign In":"Sign Up"}</button>
<p className='py-4 cursor-pointer ' onClick={toggleSignInform}>


  {isSignInForm  ? "  New to Netflix? Sign Up Now":"Already a user?Sign In Now"}
</p>
      </form>

    </div>
  )
}

export default Login
