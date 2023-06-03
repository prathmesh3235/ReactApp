import React from 'react'
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';


function Login({handleLogin}) {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        if(e.target.title.value.length > 0)
        { handleLogin(e.target.title.value);
        navigate("/home");
      }
    }
  return (
    <div>
        <form className='login-form' onSubmit={handleSubmit}>
            <label className='label-text'>Bitte geben Sie noch einmal Ihren Probandencode ein (Initialen + Geburtstag, z.B. LV03)” </label>
            <input required type="text" className="form-control" name="title" />
            <br/>
            <input type='submit' className="btn btn-primary" value="abschicken" />
        </form>
    </div>
  )
}

export default Login