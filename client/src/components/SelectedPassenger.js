import React from 'react'

function SelectedPassenger({passenger}) {
    console.log(passenger)
    return (
    <div className='passSelect'>
        <h4>Passenger: {passenger.name} </h4>
        <table >
            <tr>
                <th>Ticket Number</th>
                <th>Train Number</th>
                <th>Section</th>
                <th>Purchase Date</th>
            </tr>
            {passenger.tickets.map((ticket, key) => {
                return (
                    <tr key={key}>
                        <td>{passenger.tickets.indexOf(ticket) + 1}</td>
                        <td>{ticket.train.number}</td>
                        <td>{ticket.train.section}</td>
                        <td>Today</td>
                    </tr>
                )
            })}
        </table>
    </div>
  )
}



export default SelectedPassenger