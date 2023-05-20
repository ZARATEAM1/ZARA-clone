'use client'
import axios from 'axios';
import React, { useState } from 'react'
import jwtDecode from 'jwt-decode';
import { create } from 'lodash';

const API='http://localhost:3002/user/login'
const API2='http://localhost:3002/user/sign'
interface TokenPayload {
  email: string;
  iat: number;
}
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
  const token = res.data.token;
  const decodedToken = jwtDecode<TokenPayload>(token);
  localStorage.setItem('token', token);
  console.log(decodedToken.email,"Ala");
  console.log(decodedToken);
  window.location.href='/All'
  
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
     {!Create &&<style >
     </style>}
      
    {!Create && (
    
      
     
    <>
    <div className="login">
      <div className="center">
        <h2 className="form-title">LOG IN</h2>
        <div className="form-holder">
          <input
            type="email"
            required
            value={email}
            className="input"
            placeholder="Set your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            required
            value={password}
            className="input"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            onDoubleClick={handleLog}
           
          />
        </div>
        
      </div>
    </div>
  
    <div id="reg">
      <section>
        <h3>REGISTER</h3>
        <div className="size">
          <p>
            IF YOU STILL DON'T HAVE A{" "}
            <span>
              <strong>ZARA.com</strong> ACCOUNT, USE THIS OPTION TO ACCESS THE
              REGISTRATION FORM.
            </span>
          </p>
        </div>
  
        <div className="size">
          <p>
            BY GIVING US YOUR DETAILS, PURCHASING <b>ZARA</b> WILL BE FASTER AND
            AN ENJOYABLE EXPERIENCE.
          </p>
        </div>
  
        <div id="bttn">
          <button onClick={handlecreate}>
            <a>CREATE ACCOUNT</a>
          </button>
        </div>
      </section>
    </div>
  
    <div id="footer"></div>
  </>
  
    )}
  </>

  {Create && (
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
    #reg{
      padding-left:400px;
      margin-top:-140px
    }
    .login{
      padding-right:600px;
    }
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
      
*{
  font-family: 'Poppins',sans-serif;
}

#logindiv {
  width: 70%;
  height: 100%;


  margin-top: 200px;
  display: flex;
  gap: 3%;

}

#logindiv div {
  width: 50%;
  height: 100%;

}
#log{
  margin-left: 220px;
}

#logindiv input {
  outline: none;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  

}

.size {
  font-size: 10px;

}
.size6{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 8px;
  font-weight: bold;
  margin-top: 10px;
}
.size p{
  width: 180%;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 8px;

}
#bttn{
  margin-top: 70px;
}

#bttn button {
  width: 19em;
  height: 2.7em;
  background-color: black;
  color: white;
  margin-top: 13px;
  cursor: pointer;
  outline: none;
  border: none;
}
#bttn button:hover ,#logbttn button:hover{
  background-color: rgb(46, 46, 46);

}

#bttn button a{
  color: white;
  font-size: x-small;
  text-decoration: none;
  font-size: 10px;
}
#logbttn button a{
  color: white;
  font-size: x-small;
  text-decoration: none;
  font-size: 10px;
}

#logbttn button {
width: 19em;
height: 2.7em;
  background-color: black;
  color: white;
 
  margin-top: 45px;
  cursor: pointer;
  outline: none;
  border: none;

}



#inputEmail {
  border: 0.01px solid gray;

  width: 130%;
  height: 20px;
}
#inputPasswd {
  border: 0.01px solid gray;

  width: 130%;
  height: 30px;
}

@media only screen and (min-width:375px) and (max-width:768px){
 
  #logindiv {
      width: 100%;
      height: 100%;
  margin-top: 200px;
   
  font-size: 40px;
      display: flex;
      gap: 2%;
  
  }
  #log{
   margin-left: 10%;
  
      
  }


  #bttn button {
      width: 10em;
      height: 3em;
      background-color: black;
      color: white;
      margin-top: 5px;
  }
  #logbttn button {
      width: 10em;
      height: 3em;
        background-color: black;
        color: white;
       
        margin-top: 45px;
     
    }
    #bttn{
      margin-top: 60px;
  }
  .size {
      font-size: 30px;
  
  }
  .size6{
      font-family: Arial, Helvetica, sans-serif;
      font-size: 12px;
      font-weight: bold;
      margin-top: 10px;
  }
  .size p{
      width: 150%;
      font-family: Arial, Helvetica, sans-serif;
      font-weight: bold;
      font-size: 15px;
  
  }
  

}
@media only screen and (min-width:0px) and (max-width:844px){
#logindiv>#reg{
  display: none;
}
.size p{
  width: 150%;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 35px;

}
#inputEmail {
  border: 0.01px solid gray;

  width: 200%;
  height: 20px;
}
#inputPasswd {
  border: 0.01px solid gray;

  width: 200%;
  height: 30px;
}
 #log {
    background: transparent;
  }
  
  #log section {
    background: transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  #log h3 {
    font-size: 24px;
    margin-bottom: 20px;
  }
  
  #ep input[type="email"],
  #ep input[type="password"] {
    background: transparent;
    border: none;
    border-bottom: 2px solid black;
    padding: 10px;
    margin-bottom: 10px;
    width: 300px;
    font-size: 16px;
    color: black;
  }
  
  button {
    background-color: black;
    border: none;
    color: white;
    padding: 12px 24px;
    font-size: 18px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #333;
  }
`}





      
      
  

  </style>
</div>

        
  )
}

export default Login