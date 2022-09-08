import React, {useEffect, useState} from 'react'
import SelectedTicket from '../components/SelectedTicket'


const UserProfile = () => {

    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(false)
    const [selectedTicket, setTicket] = useState(null)
 
    useEffect(() => {
        fetch('/me')
        .then((resp) => resp.json())
        .then((data) => setUser(data))
        .then((resp) => setLoading(true))
    },[])

    function handleDelete(e){
        fetch(`/tickets/${e.target.name}`, {
            method: 'DELETE',
            header: {
                'Content-type': 'application/json'
            }
        })
    }

    function handleUpdate(e){
        
        const ticket = user.tickets.find((ticket) => ticket.id === parseInt(e.target.value))
        
        setTicket(ticket)
    }
    
    if (!loading) {
        return <div>Loading...</div>
    } else {
        return (
        <div className='myTickets'>
            <table>
                <thead>
                    <tr>
                        <th>Ticket Number</th>
                        <th>Train Number</th>
                        <th>Arrival</th>
                        <th>Destination</th>
                        <th>Update</th>
                        <th>Action</th>
                    </tr>    
                </thead>
                <tbody>
                    {user.tickets.map((ticket, key) => {
                    return (
                        <tr key={ticket.id}>
                            <td>{key + 1}</td>
                            <td>{ticket.train.number}</td>
                            <td>{ticket.train.arrival}</td>
                            <td>{ticket.train.departure}</td>
                            <td><button onClick={handleUpdate} value={ticket.id}>Update</button></td>
                            <td><button onClick={handleDelete} name={`${ticket.id}`}>Delete</button></td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
            {selectedTicket ? <SelectedTicket ticket={selectedTicket} setTicket={setTicket}/> : null} 
        </div>
        )
    }
  
}

export default UserProfile