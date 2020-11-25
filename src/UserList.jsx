import React, { useEffect, useState } from 'react'
import CountryDetails from './CountryDetails'


const UserList = ({users}) => {
    const [show, setShow] = useState({})

    const toggleDetails = id => {
        setShow(prev => Boolean(!prev[id]) ? {...prev, [id]: true} : {...prev, [id]: false});
    }
   
    return(
        <ul>
            {users.length === 1? <CountryDetails item={users[0]}/>
            :
            users.map((user, index) => 
                <div key={user.name}>
                    <li >{user.name}</li> 
                    <button onClick={() => toggleDetails(user.name)}>show</button>
                    {show[user.name]? <CountryDetails item={user}/> : false}
                </div>
                )
            }
        </ul>
    )
}

export default UserList