'use client'
import axios from 'axios';
import React, { useState } from 'react'
const API='http://localhost:3002/user/login'
const API2='http://localhost:3002/user/sign'
import '../tailwindcss/Log.css'
function Login() {
const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Create, setCreate] = useState(false);
  const obj={
    full_name:username,
    email:email,
    password:password
  }
const handlecreate=()=>{
setCreate(!Create)
}
const handleLog= async()=>{

await axios.post(API,obj)
.then((res)=>{
    alert("loged")
    console.log(res.data.token) 
})
.catch(err=>console.log(err))
}
const handleSubmit=async()=>{
    if(username==''||email==''||password==''){
        alert('fill it')
    }else{
    await axios.post(API2,obj)
.then((res)=>{
    alert("signed in")
    console.log(res.data) 
})
.catch(err=>console.log(err))
}
    }

  return (
    
   <div className="form">
     <style>{`
         background-color: white;
         background-size: cover;
         background-position: center;
       }
     `}</style>
     <>
      
    {Create && (
      <div className="signform">
        <h2 className="logform">Login</h2>
        <div className="card">
          <input
            type="email"
            required
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            required
            className="input"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="btnlog"
          onClick={handleLog}
        >
          Login
        </button>
      </div>
    )}
  </>

  {!Create && (
    <div className="login">
      <div className="center">
        <h2 className="form-title ">Create account</h2>
        <div className="form-holder">
          <input
            type="text"
            required
            className="input"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            required
            className="input"
            placeholder="set your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            required
            className="input"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="submit-btn"
          onClick={handleSubmit}
        >
          Create account
        </button>
        <button
          className="register"
          onClick={handlecreate}
        >
          Already have an account?
        </button>
      </div>
    </div>
  )}
</div>

        
  )
}

export default Login