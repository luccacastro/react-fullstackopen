import React, { Component } from 'react'
import phonebookService from './service/phonebook'


const UserList = ({users, deleteContact}) => {
    console.log(users.map(x => x.name))
    return(
        <ul>
            {users.map((user , index) => 
                <>
                    <li key={user.name}>{user.name} : {user.phone}</li>
                    <button onClick={() => deleteContact(index)}>delete</button>
                </>
                )}
        </ul>
    )
}

export default UserList