
//signup.js
import React from 'react';
import './App.css';
import { useState } from 'react';
import './Login.css'
import axios from 'axios';



function Signup() {
  const [email,setemail] = useState('');
  const [password,setpassword] = useState(''); 
  const [name,setname] = useState();
   
  async function onsignup(){
    let data = await axios.post('https://education-backend-eight.vercel.app/coding-learner-signup/signup?email='+email+'&password='+password+'&name='+name)
   if(data.data === 'success'){
     alert('Registration Successfully')
     setemail('');
     setpassword('');
     setname('');
   }else if(data.data === "user already exist"){
    alert(data.data)
   }
    
   }
   

  
  return (
  <>
 <div className="loginpage">
    <h1 className='hlogin'>Sign up and start your career</h1>
    <input className='linput' type="text" value={name} onChange={(e)=>setname(e.target.value)} placeholder='Full name' />
    <input className='linput' type="text" value={email} onChange={(e)=>setemail(e.target.value)} placeholder='Email' />
    <input className='linput' type="password" value={password} onChange={(e)=>setpassword(e.target.value)} placeholder='Password' />
   
    <input  className='linput' onClick={onsignup} type="submit" value={'Sign up'} />
   
    
   
 </div>
  </>
  );
}

export default Signup;
