import React , {useContext,useEffect,useState}  from 'react';
import {Link, useNavigate } from 'react-router-dom';
import { UserContext } from './App';
const Header=()=>{
  const {state,dispatch} = useContext(UserContext);
  
  const [user,setUser]=useState('');

 
  const RenderMenu=()=>{
    const LogOut =() =>{
      localStorage.removeItem('email');
      localStorage.removeItem('username');
      localStorage.clear();
       dispatch({type:"USER",payload: false})
       
     }
    if(state){
      return(
        <>
         <li class="nav-item active">
        <Link to ="/" class="nav-link">Home</Link> 
      </li>
      <li class="nav-item">
      <Link to ="/login_type" onClick={LogOut} class="nav-link">Logout</Link> 
      </li>
      </>
      )
    }
    else{
      return(
        <>
          <li class="nav-item active">
        <Link to ="/" class="nav-link">Home</Link> 
      </li>
      <li class="nav-item">
      <Link to ="/register_type" class="nav-link">Register</Link> 
      </li>
      <li class="nav-item">
      <Link to ="/login_type" class="nav-link">Login</Link> 
      </li>
        </>
      )
    }
  }
    return(
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<ul class="navbar-nav mr-auto">
      <li class="nav-item active">
      <Link to ="/" class="nav-link">MedinfoBlock</Link>
      </li>
      </ul>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">

     <RenderMenu/>
    </ul>
  </div>
</nav>
    )
}

export default Header;

