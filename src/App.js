import React,{createContext,useReducer} from 'react';
import './App.css';

import Header from './Header';
import Patient_Login from './Login/Patient_Login';
import Home from './Home';
import Login_Type from './Login/Login_type';
import Patient_Register from './register/Patient_Register'
import Register_Type from './register/Register_Type';
import Hospital_Register from './register/Hospital_register';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Patient_Home from './Home/Patient_home';
import { initialState, reducer } from './reducer/UseReducer';
import Hospital_Home from './Home/Hospital_home';
import Insurance_Home from './Home/Insurance_Home';
import Doctor_Register from './register/Doctor_register';
export const UserContext = createContext();

const  SubApp= (props) => {
  const [state,dispatch] = useReducer(reducer, initialState);
  if(props.display){
  return (
    <>
      <Router>
      <div className='container'>
      <UserContext.Provider value={{state, dispatch}}>
        <Header/>
        <Routes>
         <Route path ="/" element={<Home/>}/>
         <Route path ="/patient_login" element={<Patient_Login/>}/>
         <Route path ="/login_type" element={<Login_Type/>}/>
         <Route path ="/patient_register" element={<Patient_Register/>}/>
         <Route path ="/register_type" element={<Register_Type/>}/>
         <Route path ="/hospital_type" element={<Hospital_Register/>}/>
         <Route path ="/patient_home" element={<Patient_Home/>}/>
         <Route path ="/hospital_home" element={<Hospital_Home/>}/>
         <Route path ="/insurance_home" element={<Insurance_Home/>}/>
         <Route path ="/doctor_register" element={<Doctor_Register/>}/>
        </Routes>
        </UserContext.Provider>
        </div>
        </Router>
        </>
  
  );
}
}

export default class App extends React.Component{
  render(){
    return(
      <SubApp display={true}/>
    )
  }
}