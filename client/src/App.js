import React, {useEffect, useState} from "react"
import NavBar from "./components/NavBar";
import {  Routes, Route } from "react-router-dom";
import Trains from "./pages/Trains";
import Passengers from "./pages/Passengers"
import LoginForm from "./components/LoginForm";
import LogOut from "./components/LogOut";





function App() {
  
  
  
  const [user, setUser] = useState(null)
 
  
  useEffect(() => {
    
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  function handleLogOut(){
    fetch('/sessions', {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
    }
    }).then(setUser(null))
  }


  
  if (!user) return <LoginForm onLogin={setUser} />;
 
  return (
      <div className= "content">
        <NavBar />
        <Routes>
          
          <Route path= '/trains' element={ <Trains/> } />
          <Route path= '/passengers' element={ <Passengers/> } />
          <Route path= '/' element = { <LogOut handleLogOut={handleLogOut}/> } />
        </Routes>
      </div>
  )
}

export default App;