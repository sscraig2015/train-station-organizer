import React from 'react'


const SelectedTicket = ({ticket, setTicket}) => {
  console.log(ticket)
  
  function UpdatePassenger(e){
    e.preventDefault()
    
    
    const name = e.target.updateName.value
    
    
    fetch(`/tickets/${ticket.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({passenger_name: name})
    })
    .then((r) => r.json())
    .then((ticket) => setTicket(ticket))
    
  }
  
  return (
    <div>
      Passenger: {ticket.passenger_name}
      <form onSubmit={UpdatePassenger}>
      Change Name: <input type='text' name="updateName"></input>
      <input type='Submit'></input>
      </form>
      {console.log(ticket)}
      
    </div>
  )
}

export default SelectedTicket