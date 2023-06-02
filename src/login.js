import React from 'react'
import { useNavigate } from "react-router-dom";


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
        <form onSubmit={handleSubmit}>
            <label>UserId: </label>
            <input required type="text" className="form-control" name="title" />
            <input type='submit' className="btn btn-primary" value="Login" />
        </form>
    </div>
  )
}

export default Login