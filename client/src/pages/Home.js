import React, { useState }from 'react'



const Home = ({user, handleLogOut, handleSubmit, errors}) => {
  

  if (user) {
    return (
        <div>
            {`Welcome ${user.display_name}`}
            <button onClick={handleLogOut}>Log Out</button>
        </div>
      )
  } else {
   


    return (
      <div className='loginForm'>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
              <label>Username </label>
              <input type="text" name="uname"   />
          </div>
          <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass"  />
              
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
  
}

export default Home