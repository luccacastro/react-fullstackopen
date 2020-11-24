import React, { useState } from 'react'
import UserList from './UserList'

const Filter = ({userList}) => {
    const [searchItem, setSearchItem] = useState()
    const filteredUsers = userList.filter(item =>{
        if(!searchItem) return true
        if(item.name.includes(searchItem)) return true
    })

    return(
        <div>
            <input
                type="text"
                value={searchItem}
                onChange={e => setSearchItem(e.target.value)}
            />
            <h2>Results</h2>
    
            <UserList users={filteredUsers}/>
        </div>
    )
}

export default Filter;