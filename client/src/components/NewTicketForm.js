import React from 'react'


const NewTicketForm = ( { setPassenger, handleSubmit }) => {
  
    
    return (
    <div>
        <form>
            <label>Passenger Name</label>
            <input type='text' name='passName' onChange={(e) => setPassenger(e.target.value)}></input>
            <input type='submit' onSubmit={(e) => handleSubmit(e)}/>
        </form>
    </div>
  )
}

export default NewTicketForm