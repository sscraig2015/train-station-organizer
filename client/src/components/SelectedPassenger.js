import React from 'react'

function SelectedPassenger({passenger}) {
    console.log(passenger)
    return (
    <div>
        <ul>
            {passenger.tickets.map((ticket) => {
            return <li>{ticket.price}</li>
            })}
        </ul>
    </div>
  )
}

export default SelectedPassenger