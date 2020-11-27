import React, { useState, useEffect } from 'react';
import './App.css'
import Filter from './Filter'
import UserList from './UserList'
import phonebookService from './service/phonebook'
import Axios from 'axios';

function App(){
    const [user, setUser] = useState([])
    const [alert, setAlert] = useState(false) 

    const [searchItem, setSearchItem] = useState()
    const filteredUsers = user.filter(item =>{
        if(!searchItem) return true
        if(item.name.includes(searchItem)) return true
    })

    const deleteContact = (us) => {
        const result = window.confirm(`Delete ${user.name}?`)
        if(result){
            phonebookService
            .Delete(us.id)
            let a = user.filter(u => u.id !== us.id)
            setUser(a)
        }
       
        
        
    }

    const handleUpdate = ( userID,userObj ) => {
        console.log("WORKING")
        console.log(userID)
        phonebookService
        .update(userID, userObj)
        .then(userData =>{
            
            let newUserList = user.map(us => us.name === userData.name ? userData : us)
            console.log(newUserList)
            setUser(newUserList)
        })
    }

    const addUser = (event) => {
        setAlert(false)
        event.preventDefault()
        const nameList = user.map(x => x.name)
       
        
        let name = event.target.name.value
        let phone = event.target.phone.value
        const userObject = { name ,phone }
        const userExists = user.find(x => x.name == name)
        console.log(userExists, "++++++++")
        if(userExists){
            setAlert(true)
            console.log(userExists.id)
            handleUpdate(userExists.id,userObject)
            console.log("ERROR NAME IS ALREADY BEING USED")
        }else{
            
            phonebookService
             .create(userObject)
             .then(createdObj =>{
                 setUser(user.concat(createdObj))
             })
        }
    }
    useEffect(() => {
        phonebookService
         .getAll()
        .then(newObj =>{
            setUser(newObj)
        })
    }, [])
    
    
    return (
        <div>
            {console.log(user)}
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
            
            <div>
            <label>filter</label>   
            <input
                type="text"
                value={searchItem}
                onChange={e => setSearchItem(e.target.value)}
            />
            <h2>Numbers</h2>
            <ul>
            {filteredUsers.map((user , index) => 
                <>
                    <li key={user.name}>{user.name} : {user.phone}</li>
                    <button onClick={() => deleteContact(user)}>delete</button>
                </>
                )}
        </ul>
        </div>
        </div>
    )
}


export default App