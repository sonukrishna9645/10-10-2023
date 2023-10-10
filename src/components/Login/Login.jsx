import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';
const Login = () => {
    const [un,setUn] =useState('');
    const [pwd,setPwd] =useState('');
    const[error,setError] =useState(false)
    const navigate=useNavigate();
    const readusername =(event) =>{
        event.preventDefault();
        setUn(event.target.value);
        console.log(event.target.value);
    }
    const readpassword =(event) =>{
        event.preventDefault();
        setPwd(event.target.value);
        console.log(event.target.value);
    }
    const checkfilldata =(event) =>{
        event.preventDefault();
       if(un.trim ()===''|| pwd.trim ==='')
       {
        setError(true);
        return;
       }
       else
       {
       navigate("/Home")
      }
       
      
    }
    return (
     <div>
     <h1>SIGN-IN</h1>
      <form>
      User Name:<input type="text" onChange={readusername} /><br/>
      PASSWORD:<input type="password" onChange={readpassword}/><br/>
      <button type="submit" onClick={checkfilldata}>LOGIN</button><br/>
      {error && 'Error Occured'}
      </form>
    </div>
  )
}

export default Login
