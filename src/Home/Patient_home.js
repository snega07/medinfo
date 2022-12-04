import React , {useState, useEffect,useContext}  from 'react';
import {useNavigate,Link} from "react-router-dom";
import { UserContext} from "../App";
import { SidebarData } from '../SidebarData/patient';
import "./style.css";
const Patient_Home=()=>{
  const {state,dispatch} = useContext(UserContext);
  const [auth,setAuth]=useState('');
  let history=useNavigate();
useEffect(()=>{
  var auth =localStorage.getItem('email');
  setAuth(auth);

},[])
function SideBar(){
return <div className='Sidebar'>
  <div className='SidebarList'>
   <li className='row'>Welcome Back!! {localStorage.getItem('username')}</li></div>
  <ul className='SidebarList'>{SidebarData.map((val, key)=> {
  return(
    <div>
    <li className='row' id={window.location.pathname == val.link ? "active": ""} key={key} >
     <Link  id='title' to ={val.link} > {val.title}</Link> 
    </li>
    </div>
  )
})}
</ul></div>
}
  if(auth===null){
      history('/login_type');
    }
  return(
      <div className='App'>
        <SideBar/>
      </div>
  )
}
export default Patient_Home;