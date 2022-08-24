import React from "react"
import NavBar from "./components/NavBar";
import {  Routes, Route } from "react-router-dom";
import Trains from "./pages/Trains";



function App() {
  

  
  return (
      <div className= "content">
        <NavBar />
        <Routes>
          <Route path= '/trains' element={ <Trains  /> } />
        </Routes>
      </div>
  )
}

export default App;