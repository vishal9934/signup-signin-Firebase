
import {getAuth,createUserWithEmailAndPassword} from "firebase/auth"
import {app} from "../Firebase"

import React from 'react'
import {useState} from 'react';

const auth=getAuth(app);

const Signup = () => {
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const clickHandle=()=>{
    createUserWithEmailAndPassword(auth,email,password)
    .then((value)=> alert("successfully signup"))
}
  return (
    <div className='signup-page'>
      <label >Email</label>
      <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='enter your email here' />
      <label>Password</label>
      <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder='enter your password here'/>
      <button onClick={clickHandle}>signup</button>
    </div>
  )
}

export default Signup
