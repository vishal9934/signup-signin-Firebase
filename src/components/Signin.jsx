


import { useState } from "react"
import {getAuth,signInWithEmailAndPassword} from "firebase/auth"
import {app} from "../Firebase"

const auth=getAuth(app);
const Signin = () => {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const clickHandle=()=>{
        signInWithEmailAndPassword(auth,email,password)
        .then((value)=>alert("signin successfully"))
        .catch((err)=> console.log(err))
    }
  return (
    <div className='signin-page'>
      <label>Enter yout email</label>
      <input onChange={(e)=>setEmail(e.target.value)} value={email} type="email" placeholder='enter your email here' />
      <label>Enter yout password </label>
     <input onChange={(e)=>setPassword(e.target.value)} value={password} type="password" placeholder='enter your password here' />
     <button onClick={clickHandle}>Signme In</button>

    </div>
  )
}

export default Signin
