import React, {useEffect, useState} from "react"
import NavBar from "./components/NavBar";
import {  Routes, Route } from "react-router-dom";
import Trains from "./pages/Trains";
import SelectedTrain from "./pages/SelectedTrain";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";




function App() {
  
  
  const [user, setUser] = useState(null)

  const [errors, setErrors] = useState([]);
  
  
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      };
    })
    }, []);

    function handleSubmit(e) {
      e.preventDefault();
      
      let username = e.target.uname.value
      let password = e.target.pass.value
     
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      }).then((r) => {
        
        if (r.ok) {
          r.json().then((user) => setUser(user));
        } else {
          
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }

    function handleLogOut(){
      fetch('/sessions', {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json'
      }
      }).then(setUser(null))
    }


    return (
      <div className= "content">
        <NavBar user={user}/>
        <Routes>
          <Route path= '/' element = {<Home onLogin={setUser} user={user} handleLogOut={handleLogOut} handleSubmit={handleSubmit} errors={errors}/>} />
          <Route path= '/trains' element={ <Trains /> } />
          <Route path = '/trains/:id' element = { <SelectedTrain />} />
          <Route path = '/myProfile' element = { <UserProfile />} />
        </Routes>
      </div>
    )
  
}

export default App;