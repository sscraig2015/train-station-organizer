import React, { useState} from 'react'
import SelectedPassenger from '/home/sscraig/Development/Mod4/train-station/client/src/components/SelectedPassenger.js'
import SearchForm from "/home/sscraig/Development/Mod4/train-station/client/src/components/SearchForm.js"

const Passengers = ( ) => {
  
  const [passName, setPassName] = useState('')
  const [passenger, setPassenger] = useState(null)
  const [errors, setErrors] = useState([])
 
  // useEffect(() => {
  //   fetch('/passengers')
  //     .then(resp => resp.json())
  //     .then(data => setPassengers(data))
  // }, [])

  function handleSubmit(e){
    e.preventDefault()

    
    fetch(`/passengers/${passName}`).then((r) => {
      if (r.ok) {
        r.json().then((data) => setPassenger(data));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    })
      
  }

  if (!passenger) {
    return <SearchForm setPassName={setPassName} handleSubmit={handleSubmit} errors={errors}/>
  } else {
    return (
      <div className="passengerPage">
          <SearchForm setPassName={setPassName} handleSubmit={handleSubmit} errors={errors}/>
          <SelectedPassenger passenger={passenger} />
      </div>
    )
  }  
  

  }

export default Passengers