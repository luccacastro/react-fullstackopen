import React, { Component } from 'react'


const UserList = ({users}) => {
   
    return(
        <ul>
            {users.map(user => 
                    <li key={user.name}>{user.name} : {user.number}</li>
                )}
        </ul>
    )
}

export default UserList