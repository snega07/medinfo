import React , {useState}  from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
const Doctor_Login=(props)=>{
    let history = useNavigate();
    const [data, setData]=useState({
        email: "",
        password: ""
    })
    const handleChange=(e)=>{
        setData({...data, [e.target.name] : e.target.value});
        //console.log(data);
    }
    const submitForm =(e)=> {
        e.preventDefault();
       const sendData ={
            email: data.email,
            password: data.password,
        }
    
    axios.post('http://localhost/unisys/login.php',sendData).then((result)=>{
        console.log(result.data);
        if(result.data.data.status==='invalid')
        {
            alert('Invalid User');
            
            console.log(result.data.data.status);
        }
        else{
            history('/');
            console.log(result.data.data.status);
        }
    })
}
    return(
        <div className='main-box'>
        <form onSubmit={submitForm}>
        <div className="row">               
        </div>
        <div className="row">
            <div className="col-md-6">Email</div>
            <div className="col-md-6">
                <input type="email" name="email" className='form-control'
                onChange={handleChange} value={data.email}/>
            </div>               
        </div>
        <div className="row">
            <div className="col-md-6">Password</div>
            <div className="col-md-6">
                <input type="password" name="password" className='form-control'
                onChange={handleChange} value={data.password}/>
            </div>               
        </div>
        <div className="row">
                <div className="col-md-6">
                    <input type="submit" name="submit" value="register" className="btn btn-success"/>
                </div>               
            </div>
        </form>
    </div>
    )
}

export default Doctor_Login;