'use client'
import axios from 'axios';
import React, { useState } from 'react'
const API='http://localhost:3002/user/login'
const API2='http://localhost:3002/user/sign'
// import '../tailwindcss/log.css'
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
  <style jsx>{
    `
    .form {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 90vh;
      }
      
      .signform {
        text-align: center;
        margin-bottom: 20px;
      }
      
      .logform {
        color: #333;
        font-size: 24px;
        margin-bottom: 20px;
      }
      
      .card {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      
      .card input {
        width: 300px;
        padding: 10px;
        margin-bottom: 10px;
        border: none;
        border-bottom: 1px solid #333;
        background-color: transparent;
        color: #333;
        font-family: 'Arial', sans-serif;
        font-size: 16px;
        transition: border-color 0.3s ease-in-out;
      }
      
      .card input:focus {
        outline: none;
        border-color: #000;
      }
      
      .btnlog {
        background-color: #000;
        color: #fff;
        border: none;
        padding: 10px 20px;
        margin-top: 20px;
        cursor: pointer;
        font-family: 'Arial', sans-serif;
        font-size: 16px;
        transition: background-color 0.3s ease-in-out;
      }
      
      .btnlog:hover {
        background-color: #333;
      }
      
      .login {
        text-align: center;
        margin-bottom: 20px;
      }
      
      .form-title {
        color: #333;
        font-size: 24px;
        margin-bottom: 20px;
      }
      
      .form-holder {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      
      .form-holder input {
        width: 300px;
        padding: 10px;
        margin-bottom: 10px;
        border: none;
        border-bottom: 1px solid #333;
        background-color: transparent;
        color: #333;
        font-family: 'Arial', sans-serif;
        font-size: 16px;
        transition: border-color 0.3s ease-in-out;
      }
      
      .form-holder input:focus {
        outline: none;
        border-color: #000;
      }
      
      .submit-btn {
        background-color: #000;
        color: #fff;
        border: none;
        padding: 10px 20px;
        margin-top: 20px;
        cursor: pointer;
        font-family: 'Arial', sans-serif;
        font-size: 16px;
        transition: background-color 0.3s ease-in-out;
      }
      
      .submit-btn:hover {
        background-color: #333;
      }
      
      .create {
        background-color: transparent;
        border: none;
        color: #333;
        font-family: 'Arial', sans-serif;
        font-size: 14px;
        margin-top: 10px;
        cursor: pointer;
        transition: color 0.3s ease-in-out;
      }
      
      .create:hover {
        color: #000;
      }
      .register {
        background-color: #000;
        color: #fff;
        border: none;
        padding: 10px 20px;
        margin-top: 20px;
        margin-left: 1ch;
        cursor: pointer;
        font-family: 'Arial', sans-serif;
        font-size: 16px;
        transition: background-color 0.3s ease-in-out;
      }
      
      .register:hover {
        background-color: #333;
      }
      
      `
  }

  </style>
</div>

        
  )
}

export default Login