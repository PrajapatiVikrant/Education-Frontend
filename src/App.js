import React from 'react';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './Home'
import { Link } from 'react-router-dom';
import Login from './Login'
import Signup from './Signup'
import Mern from './Mernstack';
import Pythondev from './Pythonbackend';
import Video from './Video'
import Courses from './Course';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Logo from './Asset/logo.png';
import Dropdown from 'react-bootstrap/Dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  
  useEffect(()=>{
    getdata();
})
const [user,setuser] = useState(()=>{
  return (
    <>
 <Link className='link' to="/Login"> <div className="item login">Login</div></Link>
<Link className='link' to="/Signup"><div className="item signup">Sign up</div></Link>  
    </>
   
  )
})
   
  async function getdata(){
    
    let data  =  await axios.get('https://education-backend-eight.vercel.app/home/data',{
      headers: {
          "mytoken":localStorage.getItem('token'),
        },
      })
    if(data.data.name)
    {
      setuser(()=>{
        
        return (
          <div className='usernamebox'>
          <Dropdown className="d-inline mx-2">
        <Dropdown.Toggle  id="dropdown-autoclose-true">
        {data.data.name} 
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item><Link className='link' to='/mycourses'> My Course</Link></Dropdown.Item>
          
        </Dropdown.Menu>
      </Dropdown>
      </div>
        )
      })
    }else{
      console.log(data.data)
      setuser(()=>{
        return (
          <>
       <Link className='link' to="/Login"> <div className="item login">Login</div></Link>
      <Link className='link' to="/Signup"><div className="item signup">Sign up</div></Link>  
          </>
         
        )
      })
    }
    
  }   

   
   

  
  return (
  <>
  <section className="navbar">
  <Link className='link' to="/"><div className="logo"><img className='logoimg' src={Logo} alt="weblogo"/></div></Link>
   
   
   
    <div className="loginSignupandCart">
    <div className="course">
  <span>Course</span>
  <i className="fa-solid fa-caret-down"></i>
  <div className="course-content">
 
 <Link className='link' to="/Mern"><div className='citem'>Mern Stack</div> </Link>
 <Link className='link' to="/python"> <div className='citem'>Python with Django</div> </Link>

  </div>
</div>
   {user}
    </div>
  </section>
 
  <Routes>
   
   <Route path='/' Component={Home}/>
   <Route path='/Login' Component={Login}/>
   <Route path='/Signup' Component={Signup}/>
   <Route path='/mycourses' Component={Courses}/>
   <Route path='/Mern' Component={Mern}/>
   <Route path='/python' Component={Pythondev}/>
   <Route path='/allvideo' Component={Video}/>
   
    
   </Routes>
 
  </>
  );
}

export default App;
