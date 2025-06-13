//login.js
import React from 'react';
import './App.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import axios from 'axios';



function Login() {
  
   const [email,setemail] = useState('');
   const [password,setpassword] = useState('');
   
   async function onlogin(){
    let data = await axios.post('https://education-backend-eight.vercel.app/coding-learner-login/login?email='+email+'&password='+password)
    if(data.data === "Invalid detail"){
      alert(data.data)
    }else if(data.data.message === "login successfully"){
      localStorage.setItem("token", data.data.signature)
      console.log(data.data.email)
      localStorage.setItem('email',data.data.email);
      console.log(data.data.signature)
      alert(data.data.message)
      setemail('');
      setpassword('');
      window.location.reload();
    }else if(data.data.err === "wrong password"){
      alert(data.data.err)
    }else{
      alert('website error')
    }
   }
       
   

  
  return (
  <>
 <div className="loginpage">
    <h1 className='hlogin'>Login now</h1>
    <input className='linput' type="text" value={email} onChange={(e)=>setemail(e.target.value)} placeholder='Email' />
   
    <input className='linput' type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='Password' />
    <input  className='linput' onClick={onlogin} type="submit" value={'Login now'} />
    <p className="antext">If you don't have an account?<Link  to="/Signup">Sign up</Link></p>
    
   
 </div>
  </>
  );
   
}

export default Login;
