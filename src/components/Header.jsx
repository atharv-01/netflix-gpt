import React from 'react'
import {auth} from "../utils/firebase"
import {  signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { addUser,removeUser } from '../utils/userSlice';
import { LOGO ,userAvtar} from '../utils/constants';
const Header = () => {
  const dispatch=useDispatch();
const navigate=useNavigate();
const user =useSelector((store)=>
store.user
)
const handleSignOut=()=>{
  signOut(auth).then(() => {
    // navigate("/")
  }).catch((error) => {
  navigate("/ërror")
  });
};

useEffect(()=>{
 const unsubscribe= onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const {uid,email,displayName} = user;
      dispatch(addUser({uid,email:email,displayName:displayName}));
      navigate("/browse")
     
      // ...
    } else {
      // User is signed out
      // ...
      dispatch(removeUser());
     navigate("/")
    }
  });

  //Remove auth change || Unsubscribe when component unmounts

  return ()=>unsubscribe();
},[])

  return (
    <div className='absolute px-4  py-2 z-10 w-screen flex justify-between'>
      <div>
        <img className='w-36' src={LOGO} alt="logo" />
       
      </div>
{user&&(<div className='flex p-2'>
  <img src={userAvtar}alt="userIcon" className='w-12 h-12 ' />

     <button onClick={handleSignOut} className='font-bold text-white '>Sign Out</button> 
    </div>)}
    </div>
    
  )
}

export default Header
