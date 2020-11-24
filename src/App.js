import React, { useState } from 'react';
import './App.css'
import Filter from './Filter'
import UserList from './UserList'

function App(){
    const [user, setUser] = useState([])
    const [alert, setAlert] = useState(false) 
    const [searchItem, setSearchItem] = useState()
    // const [name, setName] = useState()
    // const [phone, setPhone] = useState()

    const addUser = (event) => {
        setAlert(false)
        event.preventDefault()
        const nameList = user.map(x => x.name)
       
        
        let name = event.target.name.value
        let phone = event.target.phone.value
        if(nameList.find(x => x == name)){
            setAlert(true)
            console.log("ERROR NAME IS ALREADY BEING USED")
        }else{
            const userObject = {
                name : name,
                phone: phone
            }
            setUser(user.concat(userObject))
        }
       
        // setName('')
        // setPhone('')
    }
    console.log(user.map(x => x.name))
    
    
    return (
        <div>
            <h2>Phonebook</h2>
            {alert? <h4>Error: This username is taken</h4>: false}
            
            <form onSubmit={addUser}>
                <div>
                    <label >Name</label>
                     <input type="text" id="name"/>
                </div>
                <div>
                    <label>Phone</label>
                     <input type="text" id="phone"/>
                </div>
                
                <div>
                    <button type="submit">save</button>
                </div>
            </form>
            <ul>
                <UserList users={user}/>
                {/* {user.map(us => 
                    <li key={us.name}>
                        {us.name}: {us.phone}
                    </li>
                )} */}
            </ul>
            <Filter userList={user}/>
        </div>
    )
}


export default App