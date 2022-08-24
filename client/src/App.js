import React from "react"
import NavBar from "./components/NavBar";
import {  Routes, Route } from "react-router-dom";
import Flights from "./pages/Flights";



function App() {
  return (
      <div class= "content">
        <NavBar />
        <Routes>
          <Route path= '/flights' element={ <Flights/> } />
        </Routes>
      </div>
  )
}

export default App;