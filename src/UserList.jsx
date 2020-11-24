import React, { Component } from 'react'


const UserList = ({users}) => {
    console.log(users.map(x => x.name))
    return(
        <ul>
            {users.map(user => 
                    <li key={user.name}>{user.name} : {user.phone}</li>
                )}
        </ul>
    )
}

export default UserList