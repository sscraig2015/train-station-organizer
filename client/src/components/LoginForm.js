import React, { useState } from 'react'


const LoginForm = ({onLogin}) => {
  
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    
    
  
    function handleSubmit(e) {
      e.preventDefault();
     
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }).then((r) => {
        
        if (r.ok) {
          r.json().then((user) => onLogin(user));
        } else {
          
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }
  
  
    

    return (
      <div className='loginForm'>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
              <label>Username </label>
              <input type="text" name="uname" onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass"  onChange={(e) => setPassword(e.target.value)}/>
              
          </div>
          <div className="button-container">
              <input type="submit" />
          </div>
          {errors.map((err) => (
            <div key={err}>{err}</div>
          ))}
        </form>
      </div>
    )
      
  
}

export default LoginForm